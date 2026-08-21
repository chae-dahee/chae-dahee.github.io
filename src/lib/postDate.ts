const POST_DATE_PATTERN = /^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?$/;

const KST_OFFSET = "+09:00";

type PostDateParts = { day: string; time?: string };

// Date.parse는 2023-02-30을 3월 1일로, T24:00을 다음 날 자정으로 보정해 통과시킨다.
function parsePostDate(date: string): PostDateParts | undefined {
  const matched = POST_DATE_PATTERN.exec(date);

  if (!matched) {
    return undefined;
  }

  const [, year, month, dayOfMonth, hours, minutes] = matched;

  // Date.UTC는 0~99 연도에 1900을 더해 해석하므로(MakeFullYear) 0096이 1996이 된다.
  const reconstructed = new Date(0);
  reconstructed.setUTCFullYear(Number(year), Number(month) - 1, Number(dayOfMonth));

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

export function isValidPostDate(date: string): boolean {
  return parsePostDate(date) !== undefined;
}

export function toPostDateTime(date: string): string {
  const { day, time } = requirePostDate(date);

  return `${day}T${time ?? "00:00"}:00${KST_OFFSET}`;
}

// datetime 속성은 날짜만으로도 유효하므로 시각 미상인 글에 자정을 만들어 넣지 않는다.
export function toPostDateTimeAttr(date: string): string {
  const { day, time } = requirePostDate(date);

  return time ? `${day}T${time}${KST_OFFSET}` : day;
}

export function formatPostDay(date: string): string {
  return requirePostDate(date).day;
}

export function formatPostMonthDay(date: string): string {
  return formatPostDay(date).slice(5);
}

export function formatPostDateTime(date: string): string {
  const { day, time } = requirePostDate(date);

  return time ? `${day} ${time}` : day;
}
