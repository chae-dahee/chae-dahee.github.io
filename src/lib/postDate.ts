// 게시글 date frontmatter는 "YYYY-MM-DD" 또는 "YYYY-MM-DDTHH:mm" 형식이며 KST로 해석한다.
// 시각을 확인하지 못한 글은 날짜만 기재해 "시각 미상"을 자정으로 위장하지 않는다.
const POST_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?$/;

const KST_OFFSET = "+09:00";

type PostDateParts = { day: string; time?: string };

// Date.parse는 2023-02-30을 3월 1일로, T24:00을 다음 날 자정으로 보정해 통과시킨다.
// 잘못된 값이 RSS·sitemap·OG 메타데이터로 나가지 않도록 달력 유효성을 직접 검사한다.
function parsePostDate(date: string): PostDateParts | undefined {
  const matched = POST_DATE_PATTERN.exec(date);

  if (!matched) {
    return undefined;
  }

  const [, year, month, dayOfMonth, hours, minutes] = matched;
  const reconstructed = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(dayOfMonth))
  );

  // 재구성한 날짜가 입력과 다르면 달력에 없는 날짜다. 윤년과 각 달의 일수가 함께 걸러진다.
  if (
    reconstructed.getUTCFullYear() !== Number(year) ||
    reconstructed.getUTCMonth() !== Number(month) - 1 ||
    reconstructed.getUTCDate() !== Number(dayOfMonth)
  ) {
    return undefined;
  }

  if (hours !== undefined && (Number(hours) > 23 || Number(minutes) > 59)) {
    return undefined;
  }

  return {
    day: `${year}-${month}-${dayOfMonth}`,
    time: hours === undefined ? undefined : `${hours}:${minutes}`,
  };
}

function requirePostDate(date: string): PostDateParts {
  const parts = parsePostDate(date);

  if (!parts) {
    throw new Error(`Invalid post date: ${date}`);
  }

  return parts;
}

// frontmatter 검증용. 형식과 달력 유효성을 한 번에 판단한다.
export function isValidPostDate(date: string): boolean {
  return parsePostDate(date) !== undefined;
}

// RSS·sitemap·OG 메타데이터용. 완전한 타임스탬프를 요구하는 규격이므로
// 시각 미지정 글은 KST 자정으로 보정한다.
export function toPostDateTime(date: string): string {
  const { day, time } = requirePostDate(date);

  return `${day}T${time ?? "00:00"}:00${KST_OFFSET}`;
}

// UI의 time 요소용. datetime 속성은 날짜만으로도 유효하므로
// 시각을 모르는 글에 자정을 만들어 넣지 않는다.
export function toPostDateTimeAttr(date: string): string {
  const { day, time } = requirePostDate(date);

  return time ? `${day}T${time}${KST_OFFSET}` : day;
}

// 목록·카드용. 밀도를 위해 시각은 노출하지 않는다.
export function formatPostDay(date: string): string {
  return requirePostDate(date).day;
}

// 홈 최신 글 목록용 월-일.
export function formatPostMonthDay(date: string): string {
  return formatPostDay(date).slice(5);
}

// 상세 페이지용. 시각을 아는 글만 분까지 노출한다.
export function formatPostDateTime(date: string): string {
  const { day, time } = requirePostDate(date);

  return time ? `${day} ${time}` : day;
}
