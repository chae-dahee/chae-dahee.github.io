import { motion } from "framer-motion";

export default function Stack() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">📚 STACK</h1>
      <section className="flex items-center justify-center w-full mx-auto text-textLight body-font">
        <div className="px-5 pt-2 pb-20 mx-auto ">
          <div className="flex flex-wrap ">
            <motion.div
              className="p-4 md:w-1/3"
              initial={{ opacity: 0, y: 100 }}
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
                <h1 className="mb-3 text-xl font-semibold text-textDark title-font md:text-2xl">
                  React
                </h1>
                <p className="mb-3 leading-relaxed">
                  CRA, VITE, webpack을 다양하게 사용해 보았습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  axiosInstance와 react-query를 통한 요청 관리, <br /> zustand와
                  jotai를 활용한 상태 관리, <br /> jest와 access·refresh Token
                  사용 경험이 있습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  JavaScript와 TypeScript를 사용하였으며, <br /> tailwindCSS,
                  styled-components, bootstrap, keyframe, Framer-motion 등
                  다양한 CSS 기술을 적극 활용했습니다. <br /> kakaoMap,
                  carousel, calendar, chart, MSW-faker.js를 구현하였습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  prittier, eslint, Code Convention, Ground Rule, Story Book,
                  Thunder Client, nvm의 프로젝트 규칙을 철저히 준수합니다.
                </p>
                <a className="inline-flex items-center text-dark">
                  More
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
              className="p-4 md:w-1/3"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 2,
                y: { duration: 1 },
              }}
            >
              <div className="relative w-full h-full px-8 pt-10 pb-10 overflow-hidden text-center bg-gray-100 bg-opacity-75 rounded-lg">
                <h2 className="mb-1 text-xs font-medium tracking-widest text-light title-font">
                  ETC
                </h2>
                <h1 className="mb-3 text-xl font-semibold text-textDark title-font md:text-2xl">
                  Node.js, Express, MariaDB etc...
                </h1>
                <p className="mb-3 leading-relaxed">
                  ERD 작성, DBMS Workbench, Postman으로 환경을 구성한 경험이
                  있습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  express-validator와 JWT를 사용하여 회원 로그인을 관리했습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  Node.js를 활용해 조회, 페이지네이션, 좋아요 등의 RESTful API를
                  설계하고 구현한 경험이 있으며, <br /> 프론트엔드 API 요청
                  관리에 대한 이해도가 높습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  Express.js 프레임워크를 사용하여 엔드포인트를 구성하고, <br />
                  데이터베이스와 연동하여 CRUD 작업을 수행했습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  Jira, Notion, Slack, Discord, Figma, Adobe XD 등 다양한 협업
                  도구를 경험하였으며, 빠르게 적응하였습니다.
                </p>
                <a className="inline-flex items-center text-dark">
                  More
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
              className="p-4 md:w-1/3"
              initial={{ opacity: 0, y: 100 }}
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
                <h1 className="mb-3 text-xl font-semibold text-textDark title-font md:text-2xl">
                  Deploy
                </h1>
                <p className="mb-3 leading-relaxed">
                  AWS EC2, S3-CloudFront, Vercel, CloudType, Docker, GitHub
                  Actions를 사용해 본 경험이 있습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  프론트엔드와 백엔드(Express)의 배포 및 CI/CD를 담당하며,
                  테스트와 배포 과정에서 발생한 여러 오류를 해결한 경험이
                  있습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  AWS EC2 인스턴스에 웹 애플리케이션을 배포하고, <br />
                  S3를 통해 정적 웹사이트를 호스팅한 경험이 있습니다. <br />
                  Docker와 Kubernetes를 활용하여 컨테이너화화를 학습하였습니다.
                </p>
                <p className="mb-3 leading-relaxed">
                  GitHub Actions으로 테스트 및 배포 파이프라인을 설정하며,
                  <br />
                  .yml 파일을 꼼꼼히 분석합니다. <br />
                  환경 변수를 설정할 때 실수를 방지하기 위해 이중 체크하는
                  편입니다. <br />
                </p>
                <p className="mb-3 leading-relaxed">
                  Git은 Issue와 PR을 적극 활용하였으며,
                  <br />각 파트와 백엔드 팀과 함께 코드 리뷰를 진행하였습니다.
                  <br />
                  Vercel로 애플리케이션을 배포한 경험이 있으며,
                  <br />
                  새로운 기술에 도전하는 것을 좋아합니다.
                </p>

                <a className="inline-flex items-center text-dark">
                  More
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
    </>
  );
}
