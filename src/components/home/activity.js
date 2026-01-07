import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Activity() {
  const router = useRouter();

  const activities = [
    {
      year: "2024",
      logo: "/cotato.png",
      title: "대학생 IT 연합 동아리 코테이토 8기",
      period: "23.09 ~ 현재",
      description:
        "프로젝트, 스터디, 해커톤, 협업, 최신 IT 기술 공유 등 다양한 활동에 적극 참여하였습니다. 교육팀에 소속되어 CS 지식을 발표하고, 문제를 만들어 교육을 진행하였습니다. 타 분야와 협업하는 방식과 프론트엔드 구현 기술을 코드 리뷰를 통해 학습하였으며, 프로젝트를 통해 실전에서 적용하려 노력하였습니다.",
      link: "/cotato",
    },
    {
      year: null,
      logo: "/programmers.jpg",
      title: "Programmers DevCource 타입스크립트로 함께하는 웹 풀 사이클 개발",
      period: "24.04 ~ 24.10",
      description:
        "React와 Node.js를 활용하여 웹 애플리케이션의 설계부터 배포까지 경험하였습니다. 현업 멘토에게 실무 트렌드 기술을 배우며 새로운 기술을 적극적으로 학습하였고, 프론트엔드, 백엔드, 데브옵스 경험을 통해 프로젝트의 전체적인 흐름을 깊이 이해하게 되었습니다.",
      link: "/devcource",
    },
    {
      year: "2023",
      logo: "/리테일테크코딩교실.png",
      title: "신세계아이앤씨와 함께하는 리테일테크 코딩교실 6기",
      period: "23.09 ~ 24.02",
      description:
        "IT 인재 육성을 위해 서울 덕수중, 예천군 가족센터에서 코딩 교육을 실시하였습니다. 파이썬 및 아두이노 PBL 실습과정과 자율주제로 교육을 진행하였으며, 활동 우수 멘토로 선정되었습니다.",
      link: "/codingeducation",
    },
    {
      year: null,
      logo: "/umc.webp",
      title: "대학생 개발 연합 동아리 University MakeUs Challenge",
      period: "23.03 ~ 23.08",
      description:
        "처음 개발을 접하며 클론 코딩과 기획에 따른 개발을 진행하였습니다. 별도로 리액트 스터디에 참여해 기초를 쌓았으며, 기술 구현 시 파트 팀원과 논의하고 소통 후 개발하는 협업 방식을 이해하게 되었습니다.",
      link: "/umc4th",
    },
    {
      year: "2022",
      logo: "/unity.jpg",
      title: "게임 관련 경험",
      period: "~ 22",
      description:
        "게임 및 미디어 콘텐츠 제작 대회에서 모바일 게임 제작으로 우수상을 수상하였고, 아동 게임 개발 인턴으로 9개월간 활동하였습니다.",
      link: null,
    },
  ];

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary-500">👀 ACTIVITY</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            다양한 활동과 경험을 통한 성장
          </p>
        </motion.div>

        {/* 타임라인 */}
        <div className="relative">
          {/* 세로 라인 */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700"></div>

          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="relative mb-12 md:mb-16"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* 연도 배지 (모바일: 왼쪽, 데스크탑: 중앙) */}
                {activity.year && (
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg z-10">
                    {activity.year}
                  </div>
                )}
                {!activity.year && (
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary-400 rounded-full shadow z-10"></div>
                )}

                {/* 카드 */}
                <div
                  className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}
                >
                  <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700">
                    <div className="flex items-start gap-4">
                      {/* 로고 */}
                      <div
                        className={`flex-shrink-0 ${
                          activity.link ? "cursor-pointer" : ""
                        }`}
                        onClick={() =>
                          activity.link && router.push(activity.link)
                        }
                      >
                        <Image
                          src={activity.logo}
                          alt={activity.title}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>

                      {/* 내용 */}
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-bold text-neutral-900 dark:text-neutral-50 mb-1 ${
                            activity.link
                              ? "cursor-pointer hover:text-primary-500 transition-colors"
                              : ""
                          }`}
                          onClick={() =>
                            activity.link && router.push(activity.link)
                          }
                        >
                          {activity.title}
                        </h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold mb-3">
                          {activity.period}
                        </p>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
