export function slugify(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
}

// 동적 세그먼트는 퍼센트 인코딩된 상태로 전달되므로 slug 비교 전에 되돌린다.
// 인코딩이 깨진 값은 그대로 반환해 어느 slug와도 매칭되지 않게 한다.
export function decodeSlugParam(param: string): string {
  try {
    return decodeURIComponent(param);
  } catch {
    return param;
  }
}

const SAFE_SLUG_PATTERN = /^[\p{Letter}\p{Number}._~-]+$/u;

export function isSafeSlug(slug: string): boolean {
  // "."과 ".."은 URL 경로에서 dot segment로 정규화되어 정적 경로를 가리키지 못한다.
  return slug !== "." && slug !== ".." && SAFE_SLUG_PATTERN.test(slug);
}
