import PostCard from "@/components/blog/PostCard";
import type { Post } from "@/types";

interface TaxonomyPostListProps {
  title: string;
  posts: Post[];
}

/**
 * 카테고리·태그별로 필터링된 포스트 목록 섹션.
 * category/[slug]·tag/[slug] 페이지가 제목과 포스트 배열만 달리하여 공유한다.
 * @param title - 섹션 상단 제목 (예: 카테고리명, "Tag: React")
 * @param posts - 렌더할 포스트 배열
 */
export default function TaxonomyPostList({ title, posts }: TaxonomyPostListProps) {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-[var(--color-accent)]">
        {title}
      </h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
