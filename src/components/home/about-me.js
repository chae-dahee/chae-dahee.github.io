import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  const profileImgSrc = "/채다희-갈.jpg";

  const socialLinks = [
    {
      name: "Email",
      icon: "📧",
      url: "mailto:cdh010126r@gmail.com",
      bgColor: "bg-primary-500",
      hoverColor: "hover:bg-primary-600",
    },
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com/chae-dahee/",
      bgColor: "bg-neutral-800",
      hoverColor: "hover:bg-neutral-900",
    },
    {
      name: "Blog",
      icon: "📝",
      url: "https://datdaradanadat.tistory.com/",
      bgColor: "bg-accent-300",
      hoverColor: "hover:bg-accent-300/90",
    },
    {
      name: "Notion",
      icon: "📚",
      url: "https://equal-canoe-62c.notion.site/c5e8570222f44e30b4a262e3c04d2818?pvs=4",
      bgColor: "bg-secondary-300",
      hoverColor: "hover:bg-secondary-300/90",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* 프로필 이미지 */}
        <motion.div
          className="w-full md:w-2/5 lg:w-1/3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative mx-auto max-w-[200px]">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={profileImgSrc}
                alt="채다희"
                width={200}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>

        {/* 텍스트 콘텐츠 */}
        <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
          {/* 타이핑 애니메이션 헤딩 - 빠른 속도 */}
          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-2 overflow-hidden whitespace-nowrap border-r-4 border-primary-500 opacity-0 animate-typing"
            style={{ maxWidth: "fit-content" }}
          >
            꼼꼼함과 차분함을 갖춘 성장 지향적인
          </h1>
          <h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 overflow-hidden whitespace-nowrap opacity-0 animate-typingSecond"
            style={{ maxWidth: "fit-content" }}
          >
            <span className="text-primary-500">FrontEnd 개발자 채다희</span>
            입니다.
            <span className="animate-blink">|</span>
          </h1>

          {/* 소개 텍스트 */}
          <motion.div
            className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed mb-8 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.5 }}
          >
            <p>
              설계부터 깊이 생각하고,{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                보다 넓은 시야
              </span>
              로 프로젝트를 바라보려고 노력합니다.
            </p>
            <p>
              모르는 것을 부끄러워하지 않고{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                적극적으로 소통
              </span>
              합니다.
            </p>
            <p>나의 것으로 만들기 위해 끊임없이 고민하고 나아갑니다.</p>
            <p>
              새로운 기술에 대해서{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                두려워하지 않고
              </span>{" "}
              배우고, 적용하고자 합니다.
            </p>
            <p>
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                BackEnd
              </span>
              에 대해서도 학습한 경험이 있습니다.
            </p>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100 mt-4">
              &ldquo;문제 해결은 항상 왜, 어떻게를 시작으로 깊고 넓게 고민해야
              합니다.&rdquo;
            </p>
          </motion.div>

          {/* 소셜 링크 버튼 - 단색 */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 5 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-3 rounded-full ${link.bgColor} ${link.hoverColor} text-white font-semibold shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* 상세 정보 */}
          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base text-neutral-700 dark:text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 5.3 }}
          >
            <div className="space-y-1">
              <p className="flex items-center gap-2">
                <span className="text-primary-500">📅</span> 2001.01.26
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary-500">📍</span> 경기도 부천시
              </p>
            </div>
            <div className="space-y-1">
              <p className="flex items-center gap-2">
                <span className="text-primary-500">🎓</span> 가톨릭대학교
                (2019.03-2025.02)
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary-500">💡</span>{" "}
                미디어기술콘텐츠학과
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary-500">➕</span> 컴퓨터정보공학부
                (복수전공)
              </p>
            </div>
            <div className="md:col-span-2 space-y-1">
              <p className="flex items-center gap-2">
                <span className="text-accent-300">🏆</span> 정보처리기사
                (2024.06)
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent-300">🥇</span> 코테이토 제3회
                해커톤 1st (2024)
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent-300">🏅</span> UMC 4th 해커톤
                우수상 (2023)
              </p>
              <p className="flex items-center gap-2">
                <span className="text-accent-300">🎮</span> 가톨릭대 게임
                제작대회 우수상 (2021)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
