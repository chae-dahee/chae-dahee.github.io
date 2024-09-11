import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import animation from "@/styles/animation.module.css";
import { useRouter } from "next/router";

export default function Activity() {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://chae-dahee.github.io/"
      : "";

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    const currentRefValue = ref.current;

    return () => {
      if (currentRefValue) {
        observer.unobserve(currentRefValue);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center ">👀 Activity</h1>
      <section className="text-gray-600 body-font">
        <div
          ref={ref}
          className={`flex flex-wrap px-5 py-24 mx-auto ${
            animation.scrollFadeIn
          } ${isVisible ? animation.visible : animation.scrollFadeIn.hidden}`}
        >
          <div
            className={`relative flex pt-10 pb-20 mx-auto md:items-center md:w-2/3 `}
          >
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full left-4">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 mt-10 text-sm font-medium text-white rounded-full h-14 w-14 bg-dark md:mt-0 title-font">
              2024
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 md:items-center md:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24rounded-full">
                <Image
                  className="rounded-full cursor-pointer"
                  src={`${prefix}/cotato.png`}
                  alt="cotato"
                  width={100}
                  height={100}
                  onClick={() => router.push("/cotato")}
                />
              </div>
              <div className="flex-grow mt-6 md:pl-6 md:mt-0">
                <h2
                  className="mb-1 text-xl font-medium text-gray-900 cursor-pointer title-font"
                  onClick={() => router.push("/cotato")}
                >
                  대학생 IT 연합 동아리 코테이토 8기 (23.09 ~ 현재)
                </h2>
                <p className="leading-relaxed">
                  프로젝트, 스터디, 해커톤, 협업, CS 교육자, 최신 IT 기술 공유
                  등 다양한 활동에 적극 참여하였습니다. 타 분야와 협업하는
                  방식과 프론트엔드 구현 기술을 코드 리뷰를 통해 학습하였으며,
                  프로젝트를 통해 실전에서 적용하려 노력하였습니다.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`relative flex pb-20 mx-auto md:items-center md:w-2/3 `}
          >
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full left-4">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 mt-10 text-sm font-medium rounded-full h-14 w-14 md:mt-0 title-font"></div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 md:items-center md:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full">
                <Image
                  className="rounded-full cursor-pointer"
                  src={`${prefix}/programmers.jpg`}
                  alt="programmers"
                  width={100}
                  height={100}
                  onClick={() => router.push("/devcource")}
                />
              </div>
              <div className="flex-grow mt-6 md:pl-6 md:mt-0">
                <h2
                  className="mb-1 text-xl font-medium text-gray-900 cursor-pointer title-font"
                  onClick={() => router.push("/devcource")}
                >
                  Programmers DevCource 타입스크립트로 함께하는 웹 풀 사이클
                  개발 (24.04 ~ 24.10)
                </h2>
                <p className="leading-relaxed">
                  React와 Node.js를 활용하여 웹 애플리케이션의 설계부터 배포까지
                  경험하였습니다. 현업 멘토에게 실무 트렌드 기술을 배우며 새로운
                  기술을 적극적으로 학습하였고, 프론트엔드, 백엔드, 데브옵스
                  경험을 통해 프로젝트의 전체적인 흐름을 깊이 이해하게
                  되었습니다. 요구사항을 기반으로 꼼꼼한 설계 및 구축 프로세스를
                  익혔으며, 개발, 테스트, 운영, 유지보수에 대한 이해도와 실력을
                  갖추게 되었습니다.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`relative flex pt-10 pb-20 mx-auto md:items-center md:w-2/3 `}
          >
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full left-4">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 mt-10 text-sm font-medium text-white rounded-full h-14 w-14 bg-dark md:mt-0 title-font">
              2023
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 md:items-center md:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24rounded-full">
                <Image
                  className="rounded-full cursor-pointer"
                  src={`${prefix}/리테일테크코딩교실.png`}
                  alt="리테일테크코딩교실"
                  width={100}
                  height={100}
                  onClick={() => router.push("/codingeducation")}
                />
              </div>
              <div className="flex-grow mt-6 md:pl-6 md:mt-0">
                <h2
                  className="mb-1 text-xl font-medium text-gray-900 cursor-pointer title-font"
                  onClick={() => router.push("/codingeducation")}
                >
                  신세계아이앤씨와 함께하는 리테일테크 코딩교실 6기 (23.09 ~
                  24.02)
                </h2>
                <p className="leading-relaxed">
                  IT 인재 육성을 위해 서울 덕수중, 예천군 가족센터에서 코딩
                  교육을 실시하였습니다. 파이썬 및 아두이노 PBL 실습과정과
                  자율주제로 교육을 진행하였으며, 활동 우수 멘토로
                  선정되었습니다.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`relative flex pb-20 mx-auto md:items-center md:w-2/3 `}
          >
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full left-4">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 mt-10 text-sm font-medium rounded-full h-14 w-14 md:mt-0 title-font"></div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 md:items-center md:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full">
                <Image
                  className="rounded-full cursor-pointer"
                  src={`${prefix}/umc.webp`}
                  alt="umc"
                  width={100}
                  height={100}
                  onClick={() => router.push("/umc4th")}
                />
              </div>
              <div className="flex-grow mt-6 md:pl-6 md:mt-0">
                <h2
                  className="mb-1 text-xl font-medium text-gray-900 cursor-pointer title-font"
                  onClick={() => router.push("/umc4th")}
                >
                  대학생 개발 연합 동아리 University MakeUs Challenge (23.03 ~
                  23.08)
                </h2>
                <p className="leading-relaxed">
                  처음 개발을 접하며 클론 코딩과 기획에 따른 개발을
                  진행하였습니다. 별도로 리액트 스터디에 참여해 기초를 쌓았으며,
                  기술 구현 시 파트 팀원과 논의하고 소통 후 개발하는 협업 방식을
                  이해하게 되었습니다.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`relative flex pt-10 pb-20 mx-auto md:items-center md:w-2/3 `}
          >
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full left-4">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 mt-10 text-sm font-medium text-white rounded-full h-14 w-14 bg-dark md:mt-0 title-font">
              2022
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 md:items-center md:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24rounded-full">
                <Image
                  className="rounded-full"
                  src={`${prefix}/unity.jpg`}
                  alt="unity"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-grow mt-6 md:pl-6 md:mt-0">
                <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                  게임 관련 경험 ( ~ 22)
                </h2>
                <p className="leading-relaxed">
                  게임 및 미디어 콘텐츠 제작 대회에서 모바일 게임 제작으로
                  우수상을 수상하였고, 아동 게임 개발 인턴으로 9개월간
                  활동하였습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
