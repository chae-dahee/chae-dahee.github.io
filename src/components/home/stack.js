import { motion } from "framer-motion";

export default function Stack() {
  return (
    <div className="w-full">
      <h1 className="flex items-center justify-center w-full p-5 mx-auto text-3xl font-bold">
        📚 STACK
      </h1>
      <section className="text-textLight body-font">
        <div className="container px-5 pt-2 pb-20 mx-auto">
          <div className="flex flex-wrap ">
            <motion.div
              className="p-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
              }}
            >
              <div className="relative h-full px-8 pt-10 pb-10 overflow-hidden text-center bg-gray-100 bg-opacity-75 rounded-lg">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-light title-font">
                  FrontEnd
                </h2>
                <h1 className="mb-3 text-xl font-semibold text-textDark title-font sm:text-2xl">
                  React
                </h1>
                <p className="mb-3 leading-relaxed">
                  CRA, VITE, webpack 분석 다양하게 사용해 보았습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  axiosInstance, react-query의 요청관리, <br />
                  zustand, jotai를 사용한 상태관리, <br />
                  jest, access·refresh Token 사용 경험이 있습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  javascript, typescript 언어를 사용하고,
                  <br />
                  tailwindCSS, styled-component, bootstrap, keyframe,
                  Framer-motion의 다양한 CSS 기술을 적극 사용했습니다. <br />
                  kakaoMap, carousel, calendar, chart, MSW-faker.js <br />
                  구현하였습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  pritteir, eslint, Code Convention, Ground Rule, Story Book,
                  Thunder Client, nvm 프로젝트의 규칙을 정확히 지킵니다.
                </p>
                <a className="inline-flex items-center text-dark">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              className="p-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
              }}
            >
              <div className="relative h-full px-8 pt-10 pb-10 overflow-hidden text-center bg-gray-100 bg-opacity-75 rounded-lg">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-light title-font">
                  ETC
                </h2>
                <h1 className="mb-3 text-xl font-semibold text-textDark title-font sm:text-2xl">
                  Node.js, Express, MariaDB etc...
                </h1>
                <p className="mb-3 leading-relaxed">
                  ERD 작성, DBMS workbench, postman 사용한 경험이 있습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  express-validator, JWT를 사용해 회원 로그인을 관리하였습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  Node.js를 사용해서 조회, 페이지네이션, 좋아요 등의 RESTfull
                  API 를 설계 및 구현하여 FE api 요청관리 시 높은 이해도를
                  가지고 있습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  Express.js 프레임워크를 활용하여 엔드포인트를 구성하고,
                  데이터베이스와의 연동을 통해 CRUD 작업을 수행했습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  Jira, Notion, Slack, Discord, Figma, Adobe XD <br />
                  다양한 협업툴을 경험하였고, 빠르게 적응하였습니다.
                </p>
                <a className="inline-flex items-center text-dark">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              className="p-4 lg:w-1/3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
              }}
            >
              <div className="relative h-full px-8 pt-10 pb-10 overflow-hidden text-center bg-gray-100 bg-opacity-75 rounded-lg">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-light title-font">
                  Deploy
                </h2>
                <h1 className="mb-3 text-xl font-semibold text-textDark title-font sm:text-2xl">
                  Deploy
                </h1>
                <p className="mb-3 leading-relaxed">
                  AWS, Vercel, CloudType, Docker, GithubAction
                </p>
                <p className="mb-3 leading-relaxed">
                  axiosInstance, react-query의 요청관리, <br />
                  zustand, jotai를 사용한 상태관리, <br />
                  jest, access·refresh Token 사용 경험이 있습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  javascript, typescript 언어를 사용하고,
                  <br />
                  tailwindCSS, styled-component, bootstrap, keyframe,
                  Framer-motion의 다양한 CSS 기술을 적극 사용했습니다. <br />
                  kakaoMap, carousel, calendar, chart 구현하였습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  pritteir, eslint, Code Convention, Ground Rule, Story Book,
                  Thunder Client, nvm 프로젝트의 규칙을 정확히 지킵니다.
                </p>
                <a className="inline-flex items-center text-dark">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
