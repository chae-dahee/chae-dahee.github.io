import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/posts/${slug}`);
      if (res.ok) {
        const data = await res.json();
        setPost(data);
      } else {
        router.push("/404");
      }
    } catch (error) {
      console.error("Failed to fetch post:", error);
      router.push("/404");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{post.title} | Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <article className="min-h-screen bg-white dark:bg-neutral-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* 뒤로 가기 */}
          <Link href="/blog">
            <motion.button
              className="mb-8 flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              목록으로
            </motion.button>
          </Link>

          {/* 헤더 */}
          <motion.header
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              {post.title}
            </h1>

            {/* 메타 정보 */}
            <div className="flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm mb-6">
              <time>
                {new Date(post.createdAt).toLocaleDateString("ko-KR")}
              </time>
              <span>·</span>
              <span>👁️ {post.viewCount} views</span>
            </div>

            {/* 태그 */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full"
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            )}
          </motion.header>

          {/* 썸네일 */}
          {post.thumbnail && (
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
          )}

          {/* 본문 (HTML) */}
          <motion.div
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-neutral-900 dark:prose-headings:text-neutral-50
              prose-p:text-neutral-700 dark:prose-p:text-neutral-300
              prose-a:text-primary-500 hover:prose-a:text-primary-600
              prose-strong:text-neutral-900 dark:prose-strong:text-neutral-50
              prose-code:text-primary-600 dark:prose-code:text-primary-400
              prose-code:bg-neutral-100 dark:prose-code:bg-neutral-800
              prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-neutral-900 dark:prose-pre:bg-neutral-950
              prose-img:rounded-xl prose-img:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            dangerouslySetInnerHTML={{ __html: post.htmlContent }}
          />

          {/* 하단 */}
          <motion.div
            className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/blog">
              <button className="w-full md:w-auto px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
                다른 글 보기
              </button>
            </Link>
          </motion.div>
        </div>
      </article>
    </>
  );
}
