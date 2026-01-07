import { executeQuery } from "@/lib/db";
import { markdownToHtml } from "@/lib/markdown";

/**
 * 게시글 상세 조회 API
 * GET /api/posts/[slug]
 */
export default async function handler(req, res) {
  const { slug } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 게시글 조회
    const query = `
      SELECT 
        p.id,
        p.title,
        p.slug,
        p.content,
        p.excerpt,
        p.thumbnail,
        p.published,
        p.view_count,
        p.created_at,
        p.updated_at,
        GROUP_CONCAT(t.name) as tags,
        GROUP_CONCAT(t.slug) as tag_slugs
      FROM posts p
      LEFT JOIN post_tags pt ON p.id = pt.post_id
      LEFT JOIN tags t ON pt.tag_id = t.id
      WHERE p.slug = ?
      GROUP BY p.id
    `;

    const posts = await executeQuery(query, [slug]);

    if (posts.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }

    const post = posts[0];

    // 조회수 증가
    await executeQuery(
      "UPDATE posts SET view_count = view_count + 1 WHERE id = ?",
      [post.id]
    );

    // 마크다운을 HTML로 변환
    const htmlContent = await markdownToHtml(post.content);

    // tags를 배열로 변환
    const tags = post.tags
      ? post.tags.split(",").map((name, index) => ({
          name,
          slug: post.tag_slugs.split(",")[index],
        }))
      : [];

    return res.status(200).json({
      id: post.id,
      title: post.title,
      slug: post.slug,
      content: post.content,
      htmlContent,
      excerpt: post.excerpt,
      thumbnail: post.thumbnail,
      published: Boolean(post.published),
      viewCount: post.view_count + 1,
      createdAt: post.created_at,
      updatedAt: post.updated_at,
      tags,
    });
  } catch (error) {
    console.error("Get post error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
