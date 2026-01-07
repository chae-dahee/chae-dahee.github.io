import { executeQuery } from "@/lib/db";

/**
 * 게시글 목록 조회 API
 * GET /api/posts?page=1&limit=10&published=true&tag=react
 */
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { page = 1, limit = 10, published, tag } = req.query;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const offset = (pageNum - 1) * limitNum;

    // WHERE 조건 구성
    let whereConditions = [];
    let whereParams = [];

    if (published !== undefined) {
      whereConditions.push("p.published = ?");
      whereParams.push(published === "true" ? 1 : 0);
    }

    if (tag) {
      whereConditions.push("t.slug = ?");
      whereParams.push(tag);
    }

    const whereClause =
      whereConditions.length > 0
        ? `WHERE ${whereConditions.join(" AND ")}`
        : "";

    // 게시글 조회 (태그 포함)
    const query = `
      SELECT 
        p.id,
        p.title,
        p.slug,
        p.excerpt,
        p.thumbnail,
        p.published,
        p.view_count,
        p.created_at,
        p.updated_at,
        GROUP_CONCAT(DISTINCT t.name) as tags
      FROM posts p
      LEFT JOIN post_tags pt ON p.id = pt.post_id
      LEFT JOIN tags t ON pt.tag_id = t.id
      ${whereClause}
      GROUP BY p.id
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?
    `;

    const queryParams = [...whereParams, limitNum, offset];
    const posts = await executeQuery(query, queryParams);

    // 전체 개수 조회
    const countQuery = `
      SELECT COUNT(DISTINCT p.id) as total
      FROM posts p
      LEFT JOIN post_tags pt ON p.id = pt.post_id
      LEFT JOIN tags t ON pt.tag_id = t.id
      ${whereClause}
    `;

    const countResult = await executeQuery(countQuery, whereParams);
    const total = countResult[0]?.total || 0;

    // tags를 배열로 변환
    const postsWithTags = posts.map((post) => ({
      ...post,
      tags: post.tags ? post.tags.split(",") : [],
      published: Boolean(post.published),
    }));

    return res.status(200).json({
      posts: postsWithTags,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total: parseInt(total),
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error("Get posts error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
