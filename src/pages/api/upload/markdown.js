import { executeQuery } from "@/lib/db";
import { parseMarkdown, generateSlug, extractExcerpt } from "@/lib/markdown";
import formidable from "formidable";
import fs from "fs/promises";

// Next.js body parser 비활성화 (파일 업로드를 위해)
export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 * 마크다운 파일 업로드 API
 * POST /api/upload/markdown
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // formidable로 파일 파싱
    const form = formidable({});
    const [fields, files] = await form.parse(req);

    // 비밀번호 인증
    const password = fields.password?.[0];
    if (password !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // 파일 확인
    const file = files.file?.[0];
    if (!file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // 마크다운 파일인지 확인
    if (!file.originalFilename?.endsWith(".md")) {
      return res.status(400).json({ error: "Only markdown files are allowed" });
    }

    // 파일 읽기
    const fileContent = await fs.readFile(file.filepath, "utf-8");

    // 마크다운 파싱 (frontmatter + content)
    const { data: frontmatter, content: markdownContent } =
      parseMarkdown(fileContent);

    // 필수 정보 확인
    const title = frontmatter.title || file.originalFilename.replace(".md", "");
    const slug = frontmatter.slug || generateSlug(title);
    const excerpt = frontmatter.excerpt || extractExcerpt(markdownContent);
    const thumbnail = frontmatter.thumbnail || null;
    const published =
      frontmatter.published !== undefined ? frontmatter.published : true;
    const tags = frontmatter.tags || [];

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
      thumbnail,
      published ? 1 : 0,
    ]);

    const postId = result.insertId;

    // 태그 추가
    if (tags.length > 0) {
      for (const tagName of tags) {
        const tagSlug = generateSlug(tagName);

        // 태그가 없으면 생성
        await executeQuery(
          "INSERT IGNORE INTO tags (name, slug) VALUES (?, ?)",
          [tagName, tagSlug]
        );

        // 태그 ID 조회
        const [tag] = await executeQuery("SELECT id FROM tags WHERE slug = ?", [
          tagSlug,
        ]);

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
      message: "Markdown file uploaded successfully",
      postId,
      slug,
      title,
    });
  } catch (error) {
    console.error("Upload markdown error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
