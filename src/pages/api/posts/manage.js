import { executeQuery } from "@/lib/db";
import { parseMarkdown, generateSlug, extractExcerpt } from "@/lib/markdown";

/**
 * 게시글 생성/수정/삭제 API
 * POST /api/posts - 생성
 * PUT /api/posts - 수정
 * DELETE /api/posts - 삭제
 */
export default async function handler(req, res) {
  // 간단한 인증 체크 (환경 변수의 비밀번호와 비교)
  const { password } = req.body || {};

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // POST: 게시글 생성
  if (req.method === "POST") {
    try {
      const { title, content, thumbnail, published, tags } = req.body;

      if (!title || !content) {
        return res
          .status(400)
          .json({ error: "Title and content are required" });
      }

      // 마크다운 파싱
      const { data: frontmatter, content: markdownContent } =
        parseMarkdown(content);

      // slug 생성
      const slug = generateSlug(title);

      // excerpt 추출 (frontmatter에 없으면 본문에서 추출)
      const excerpt = frontmatter.excerpt || extractExcerpt(markdownContent);

      // 게시글 삽입
      const insertQuery = `
        INSERT INTO posts (title, slug, content, excerpt, thumbnail, published)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      const result = await executeQuery(insertQuery, [
        title,
        slug,
        markdownContent,
        excerpt,
        thumbnail || null,
        published ? 1 : 0,
      ]);

      const postId = result.insertId;

      // 태그 추가
      if (tags && tags.length > 0) {
        for (const tagName of tags) {
          const tagSlug = generateSlug(tagName);

          // 태그가 없으면 생성
          await executeQuery(
            "INSERT IGNORE INTO tags (name, slug) VALUES (?, ?)",
            [tagName, tagSlug]
          );

          // 태그 ID 조회
          const [tag] = await executeQuery(
            "SELECT id FROM tags WHERE slug = ?",
            [tagSlug]
          );

          // 게시글-태그 연결
          if (tag) {
            await executeQuery(
              "INSERT INTO post_tags (post_id, tag_id) VALUES (?, ?)",
              [postId, tag.id]
            );
          }
        }
      }

      return res.status(201).json({
        message: "Post created successfully",
        postId,
        slug,
      });
    } catch (error) {
      console.error("Create post error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // PUT: 게시글 수정
  if (req.method === "PUT") {
    try {
      const { id, title, content, thumbnail, published, tags } = req.body;

      if (!id) {
        return res.status(400).json({ error: "Post ID is required" });
      }

      const { content: markdownContent } = parseMarkdown(content);
      const excerpt = extractExcerpt(markdownContent);

      // 게시글 업데이트
      const updateQuery = `
        UPDATE posts 
        SET title = ?, content = ?, excerpt = ?, thumbnail = ?, published = ?
        WHERE id = ?
      `;

      await executeQuery(updateQuery, [
        title,
        markdownContent,
        excerpt,
        thumbnail || null,
        published ? 1 : 0,
        id,
      ]);

      // 기존 태그 연결 삭제
      await executeQuery("DELETE FROM post_tags WHERE post_id = ?", [id]);

      // 새 태그 추가
      if (tags && tags.length > 0) {
        for (const tagName of tags) {
          const tagSlug = generateSlug(tagName);

          await executeQuery(
            "INSERT IGNORE INTO tags (name, slug) VALUES (?, ?)",
            [tagName, tagSlug]
          );

          const [tag] = await executeQuery(
            "SELECT id FROM tags WHERE slug = ?",
            [tagSlug]
          );

          if (tag) {
            await executeQuery(
              "INSERT INTO post_tags (post_id, tag_id) VALUES (?, ?)",
              [id, tag.id]
            );
          }
        }
      }

      return res.status(200).json({ message: "Post updated successfully" });
    } catch (error) {
      console.error("Update post error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  // DELETE: 게시글 삭제
  if (req.method === "DELETE") {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: "Post ID is required" });
      }

      await executeQuery("DELETE FROM posts WHERE id = ?", [id]);

      return res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      console.error("Delete post error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
