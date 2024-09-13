import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://chae-dahee.github.io/"
      : "";
  const profileImgSrc = `${prefix}/채다희_23.11.jpg`;

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-screen text-gray-600 body-font">
      <div className="flex flex-col items-center w-4/5 p-3 ml-32 md:flex-row md:items-center">
        <div className="w-[20%] mb-10  lg:w-[40%] md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 4 }}
          >
            <Image
              src={profileImgSrc}
              alt="채다희"
              width={400}
              height={600}
              className="mx-auto"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center w-full text-center lg:flex-grow md:w-full lg:pl-24 md:pl-16 md:items-start md:text-left ">
          <h1
            className="mb-4 overflow-hidden text-lg font-medium text-gray-900 border-black opacity-0 title-font md:text-4xl md:leading-relaxed whitespace-nowrap animate-typing"
            style={{ animationDelay: "1s" }}
          >
            꼼꼼함과 차분함을 갖춘 성장 지향적인
          </h1>
          <h1
            className="mb-4 overflow-hidden text-lg font-medium text-gray-900 border-black opacity-0 title-font md:text-4xl md:leading-relaxed whitespace-nowrap animate-typingSecond "
            style={{ animationDelay: "3.5s" }}
          >
            <span className="font-bold">FrontEnd 개발자 채다희</span>
            입니다.
            <span className="animate-blink">|</span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 2, delay: 6 }}
          >
            <p className="mb-4 leading-relaxed">
              설계부터 깊이 생각하고,
              <span className="font-bold"> 보다 넓은 시야</span>로 프로젝트를
              바라보려고 노력합니다. <br />
              모르는 것을 부끄러워하지 않고
              <span className="font-bold"> 적극적으로 소통</span>합니다.
              <br /> 나의 것으로 만들기 위해 끊임없이 나아갑니다. <br />
              새로운 기술에 대해서
              <span className="font-bold"> 두려워하지 않고</span> 배우고,
              적용하고자 합니다. <br />
              <span className="font-bold">BackEnd</span>에 대해서도 학습한
              경험이 있습니다.
              <br />
              <span className="font-bold">
                항상 자만하지 않고 배우는 자세로 임합니다.
              </span>
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col flex-wrap items-center justify-center md:flex-row md:justify-between"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 2, delay: 6.5 }}
          >
            {["cdh010126r@gmail.com", "GITHUB", "BLOG", "NOTION"].map(
              (text, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    const links = [
                      "mailto:cdh010126r@gmail.com",
                      "https://github.com/chae-dahee/",
                      "https://datdaradanadat.tistory.com/",
                      "https://equal-canoe-62c.notion.site/c5e8570222f44e30b4a262e3c04d2818?pvs=4",
                    ];
                    window.open(links[index], "_blank");
                  }}
                  className="inline-flex px-6 py-2 mx-2 mb-2 text-lg text-white rounded bg-light focus:outline-none hover:bg-dark"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {text}
                </motion.button>
              )
            )}
          </motion.div>
          <motion.div
            className="flex flex-col items-start justify-between w-full mt-3 text-lg text-left "
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 2, delay: 7 }}
          >
            <div className="flex flex-col justify-between w-[70%] md:flex-row">
              <p>
                | 2001.01.26
                <br />
                | Address. 경기도 부천시 <br />
              </p>
              <p>
                | Univ. 가톨릭대학교(2019.03-2025.02) <br />
                | Major. 미디어기술콘텐츠학과 <br />| Plural Major.
                컴퓨터정보공학부
              </p>
            </div>
            <p className="w-full ">
              | Engineer. 정보처리기사 (2024.06) <br />
              | 코테이토 제3회 해커톤 1st (2024), UMC 4th 해커톤 우수상 (2023)
              <br />
              | 가톨릭대 게임 제작대회 우수상 (2021)
              <br />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
