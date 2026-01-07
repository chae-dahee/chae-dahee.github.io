import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import prism from "remark-prism";

/**
 * 마크다운 파일의 frontmatter와 content 파싱
 * @param {string} markdownContent - 마크다운 문자열
 * @returns {Object} { data, content }
 */
export function parseMarkdown(markdownContent) {
  const { data, content } = matter(markdownContent);
  return { data, content };
}

/**
 * 마크다운을 HTML로 변환
 * @param {string} markdown - 마크다운 문자열
 * @returns {Promise<string>} HTML 문자열
 */
export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown);

  return result.toString();
}

/**
 * 제목에서 slug 생성
 * @param {string} title - 게시글 제목
 * @returns {string} URL-safe slug
 */
export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s-]/g, "") // 특수문자 제거
    .replace(/\s+/g, "-") // 공백을 하이픈으로
    .replace(/-+/g, "-") // 연속된 하이픈 제거
    .trim();
}

/**
 * 본문에서 요약(excerpt) 추출
 * @param {string} content - 마크다운 본문
 * @param {number} maxLength - 최대 길이
 * @returns {string} 요약
 */
export function extractExcerpt(content, maxLength = 200) {
  // 마크다운 헤더, 링크 등 제거
  const plainText = content
    .replace(/#{1,6}\s/g, "") // 헤더 제거
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // 링크 제거
    .replace(/[*_~`]/g, "") // 강조 문법 제거
    .replace(/\n+/g, " ") // 줄바꿈을 공백으로
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  return plainText.substring(0, maxLength).trim() + "...";
}
