import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/posts?page=${page}&limit=10&published=true`
      );
      const data = await res.json();
      setPosts(data.posts);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Blog | Chae Dahee</title>
        <meta
          name="description"
          content="개발 블로그 - 학습한 내용과 프로젝트 경험을 공유합니다"
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-neutral-900 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* 헤더 */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary-500">📝 Blog</span>
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              개발 학습과 경험을 기록합니다
            </p>
          </motion.div>

          {/* 로딩 */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* 게시글 목록 */}
          {!loading && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                아직 작성된 글이 없습니다.
              </p>
            </div>
          )}

          {!loading && posts.length > 0 && (
            <div className="space-y-6">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 cursor-pointer">
                      <div className="flex flex-col md:flex-row gap-6">
                        {/* 썸네일 (있으면) */}
                        {post.thumbnail && (
                          <div className="md:w-1/3">
                            <img
                              src={post.thumbnail}
                              alt={post.title}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                          </div>
                        )}

                        {/* 내용 */}
                        <div className={post.thumbnail ? "md:w-2/3" : "w-full"}>
                          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-3 group-hover:text-primary-500 transition-colors">
                            {post.title}
                          </h2>

                          <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* 태그 */}
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.map((tag, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-xs font-semibold rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* 메타 정보 */}
                          <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
                            <span>👁️ {post.view_count || 0} views</span>
                            <span>
                              {new Date(post.created_at).toLocaleDateString(
                                "ko-KR"
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* 페이지네이션 */}
          {pagination && pagination.totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 bg-primary-500 text-white rounded-lg disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:cursor-not-allowed hover:bg-primary-600 transition-colors"
              >
                이전
              </button>

              <span className="px-4 py-2 text-neutral-700 dark:text-neutral-300">
                {page} / {pagination.totalPages}
              </span>

              <button
                onClick={() => setPage(page + 1)}
                disabled={page === pagination.totalPages}
                className="px-4 py-2 bg-primary-500 text-white rounded-lg disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:cursor-not-allowed hover:bg-primary-600 transition-colors"
              >
                다음
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
