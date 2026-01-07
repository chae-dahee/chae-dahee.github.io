import { motion } from "framer-motion";

export default function Stack() {
  const stacks = [
    {
      category: "FrontEnd",
      title: "React",
      icon: "⚛️",
      bgColor: "bg-primary-50",
      borderColor: "border-primary-400",
      accentColor: "text-primary-600",
      descriptions: [
        "CRA, VITE, webpack을 다양하게 사용",
        "axiosInstance, react-query를 통한 요청 관리",
        "zustand, jotai를 활용한 상태 관리",
        "jest, access·refresh Token 사용 경험",
        "JavaScript & TypeScript 활용",
        "tailwindCSS, styled-components, Framer-motion 등 다양한 CSS 기술",
        "kakaoMap, carousel, calendar, chart, MSW-faker.js 구현",
        "prettier, eslint, Code Convention 준수",
      ],
    },
    {
      category: "BackEnd",
      title: "Node.js & Database",
      icon: "🚀",
      bgColor: "bg-accent-50",
      borderColor: "border-accent-300",
      accentColor: "text-accent-600",
      descriptions: [
        "ERD 작성, DBMS Workbench, Postman 환경 구성",
        "express-validator, JWT 회원 로그인 관리",
        "RESTful API 설계 및 구현 (조회, 페이지네이션, 좋아요 등)",
        "Express.js 프레임워크 활용",
        "데이터베이스 연동 CRUD 작업 수행",
        "Jira, Notion, Slack, Discord, Figma, Adobe XD 협업 도구 경험",
      ],
    },
    {
      category: "Deploy & Tools",
      title: "Deploy & DevOps",
      icon: "🛠️",
      bgColor: "bg-secondary-50",
      borderColor: "border-secondary-300",
      accentColor: "text-secondary-600",
      descriptions: [
        "AWS EC2, S3-CloudFront, Vercel, CloudType 배포 경험",
        "Docker, GitHub Actions CI/CD 담당",
        "AWS EC2 인스턴스 웹 애플리케이션 배포",
        "S3 정적 웹사이트 호스팅",
        "Docker & Kubernetes 컨테이너화 학습",
        "GitHub Actions 테스트 및 배포 파이프라인 설정",
        "Git Issue & PR 적극 활용, 코드 리뷰 진행",
      ],
    },
  ];

  return (
    <section className="w-full py-20 px-4 bg-neutral-50 dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-500">📚 STACK</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            다양한 기술 스택과 도구를 활용한 경험
          </p>
        </motion.div>

        {/* 스택 카드 - 단색 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stacks.map((stack, index) => (
            <motion.div
              key={index}
              className={`group relative ${stack.bgColor} dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${stack.borderColor} dark:border-neutral-700`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* 카테고리 & 아이콘 */}
              <div className="relative flex items-center justify-between mb-6">
                <span
                  className={`text-sm font-semibold ${stack.accentColor} dark:text-primary-400 uppercase tracking-wide`}
                >
                  {stack.category}
                </span>
                <span className="text-4xl">{stack.icon}</span>
              </div>

              {/* 타이틀 */}
              <h3 className="relative text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-6">
                {stack.title}
              </h3>

              {/* 설명 리스트 */}
              <ul className="relative space-y-3 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                {stack.descriptions.map((desc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className={`${stack.accentColor} dark:text-primary-400 mt-1 flex-shrink-0`}
                    >
                      •
                    </span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* hover 효과 화살표 */}
              <div
                className={`relative mt-6 flex items-center ${stack.accentColor} dark:text-primary-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <span>Learn more</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
