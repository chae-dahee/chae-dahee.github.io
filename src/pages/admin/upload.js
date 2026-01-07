import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function AdminUploadPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.name.endsWith(".md")) {
      setFile(selectedFile);
      setMessage("");
    } else {
      setMessage("마크다운 파일(.md)만 업로드 가능합니다.");
      setFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("파일을 선택해주세요.");
      return;
    }

    if (!password) {
      setMessage("비밀번호를 입력해주세요.");
      return;
    }

    try {
      setUploading(true);
      setMessage("");

      const formData = new FormData();
      formData.append("file", file);
      formData.append("password", password);

      const res = await fetch("/api/upload/markdown", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`✅ 업로드 성공! "${data.title}" 게시글이 생성되었습니다.`);
        setFile(null);
        setPassword("");

        // 3초 후 블로그 상세 페이지로 이동
        setTimeout(() => {
          router.push(`/blog/${data.slug}`);
        }, 2000);
      } else {
        setMessage(`❌ 업로드 실패: ${data.error}`);
      }
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("❌ 업로드 중 오류가 발생했습니다.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Upload | Chae Dahee</title>
      </Head>

      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white dark:bg-neutral-800 rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-200 dark:border-neutral-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 헤더 */}
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">
              <span className="text-primary-500">📤</span> 마크다운 업로드
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              관리자 전용 페이지
            </p>

            {/* 폼 */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 비밀번호 */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  관리자 비밀번호
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-neutral-900 dark:text-neutral-50"
                  placeholder="비밀번호를 입력하세요"
                />
              </div>

              {/* 파일 선택 */}
              <div>
                <label className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                  마크다운 파일 (.md)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept=".md"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg cursor-pointer text-neutral-700 dark:text-neutral-300
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-primary-500 file:text-white
                      hover:file:bg-primary-600
                      file:cursor-pointer"
                  />
                </div>
                {file && (
                  <p className="mt-2 text-sm text-primary-600 dark:text-primary-400">
                    선택된 파일: {file.name}
                  </p>
                )}
              </div>

              {/* 안내 */}
              <div className="bg-primary-50 dark:bg-primary-900 border border-primary-200 dark:border-primary-700 rounded-lg p-4">
                <p className="text-sm text-primary-700 dark:text-primary-300">
                  <strong>📌 Frontmatter 예시:</strong>
                </p>
                <pre className="mt-2 text-xs text-primary-600 dark:text-primary-400 overflow-x-auto">
                  {`---
title: 게시글 제목
tags: [React, Next.js]
published: true
---`}
                </pre>
              </div>

              {/* 메시지 */}
              {message && (
                <div
                  className={`p-4 rounded-lg ${
                    message.startsWith("✅")
                      ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                      : "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                  }`}
                >
                  {message}
                </div>
              )}

              {/* 버튼 */}
              <button
                type="submit"
                disabled={uploading}
                className="w-full px-6 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-neutral-400 text-white font-bold rounded-lg transition-colors disabled:cursor-not-allowed"
              >
                {uploading ? "업로드 중..." : "업로드"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
