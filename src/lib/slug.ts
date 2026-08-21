export function slugify(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

const SAFE_SLUG_PATTERN = /^[\p{Letter}\p{Number}._~-]+$/u;

export function isSafeSlug(slug: string): boolean {
  // "."과 ".."은 URL 경로에서 dot segment로 정규화되어 정적 경로를 가리키지 못한다.
  return slug !== "." && slug !== ".." && SAFE_SLUG_PATTERN.test(slug);
}
