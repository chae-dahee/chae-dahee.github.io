// 게시글 date frontmatter는 "YYYY-MM-DD" 또는 "YYYY-MM-DDTHH:mm" 형식이며 KST로 해석한다.
// 시각을 확인하지 못한 글은 날짜만 기재해 "시각 미상"을 자정으로 위장하지 않는다.
export const POST_DATE_PATTERN = /^(\d{4}-\d{2}-\d{2})(?:T(\d{2}:\d{2}))?$/;

const KST_OFFSET = "+09:00";

function splitPostDate(date: string): { day: string; time?: string } {
  const matched = POST_DATE_PATTERN.exec(date);

  if (!matched) {
    throw new Error(`Invalid post date: ${date}`);
  }

  return { day: matched[1], time: matched[2] };
}

// RSS·sitemap·OG 메타데이터용 ISO 8601 문자열. 시각 미지정 글은 KST 자정으로 본다.
export function toPostDateTime(date: string): string {
  const { day, time } = splitPostDate(date);

  return `${day}T${time ?? "00:00"}:00${KST_OFFSET}`;
}

// 목록·카드용. 밀도를 위해 시각은 노출하지 않는다.
export function formatPostDay(date: string): string {
  return splitPostDate(date).day;
}

// 홈 최신 글 목록용 월-일.
export function formatPostMonthDay(date: string): string {
  return formatPostDay(date).slice(5);
}

// 상세 페이지용. 시각을 아는 글만 분까지 노출한다.
export function formatPostDateTime(date: string): string {
  const { day, time } = splitPostDate(date);

  return time ? `${day} ${time}` : day;
}
