import Image from "next/image";
import { motion } from "framer-motion";
import ProfileImg from "${prefix}/assets/img/채다희_23.11.jpg";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const fullText = `꼼꼼꼼하고 차분하게 생각하는 것을 목표로 하는\nFrontEnd  개발자 채다희입니다.`;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // 타이핑 속도 조절
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-gray-600 body-font">
      <div className="container flex flex-col items-start px-5 pt-5 pb-5 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full d:mb-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Image
              src={ProfileImg}
              alt="채다희"
              width={300}
              className="mx-auto"
            />{" "}
          </motion.div>
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <motion.h1 className="mb-4 text-lg font-medium text-gray-900 w-[89%] title-font sm:text-4xl sm:leading-relaxed">
            {displayedText}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <p className="mb-4 leading-relaxed">
              설계부터 깊이 생각하고,
              <span className="font-bold">보다 넓은 시야</span>로 프로젝트를
              바라보려고 노력합니다. <br />
              모르는 것을 부끄러워하지 않고
              <span className="font-bold">적극적으로 소통</span>합니다. 나의
              것으로 만들기 위해 끊임없이 나아갑니다. <br />
              새로운 기술에 대해서
              <span className="font-bold">두려워 하지않고</span> 배우고,
              적용하고자 합니다. <br />
              <span className="font-bold">BackEnd</span>에 대해서도 학습한
              경험이 있습니다.
              <br />
              <span className="font-bold">
                항상 자만하지않고 배우는 자세로 임합니다.
              </span>
            </p>
          </motion.div>
          <div className="flex flex-col flex-wrap items-center justify-center md:flex-row md:justify-between">
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
          </div>
          <div className="w-full mt-3 text-lg text-left">
            <p>
              | Univ. 가톨릭대학교(2019.03-2025.02) <br />
              | Major. 미디어기술콘텐츠학과 <br />| Plural Major.
              컴퓨터정보공학부
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
