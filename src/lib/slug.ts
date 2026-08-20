// 분류 이름을 URL 슬러그로 바꾼다. 카테고리와 태그가 같은 규칙을 쓴다.
export function slugify(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

// URL 경로에 그대로 실을 수 있는 슬러그인지 확인한다.
// 예약문자를 조용히 제거하는 대신 빌드에서 걸러 분류 이름을 고치도록 한다.
const SAFE_SLUG_PATTERN = /^[\p{Letter}\p{Number}._~-]+$/u;

export function isSafeSlug(slug: string): boolean {
  return SAFE_SLUG_PATTERN.test(slug);
}
