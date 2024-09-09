import Image from "next/image";

export default function Activity() {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://chae-dahee.github.io/"
      : "";

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center ">👀 Activity</h1>
      <section className="text-gray-600 body-font">
        <div className="flex flex-wrap px-5 py-24 mx-auto">
          <div className="relative flex pt-10 pb-20 mx-auto md:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full left-4">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 mt-10 text-sm font-medium text-white rounded-full h-14 w-14 bg-dark md:mt-0 title-font">
              2024
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 md:items-center md:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24rounded-full">
                <Image
                  className="rounded-full"
                  src={`${prefix}/cotatoLogo.png`}
                  alt="cotatoLogo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-grow mt-6 md:pl-6 md:mt-0">
                <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                  대학생 IT 연합 동아리 코테이토 8기~ (2023.09 - ing)
                </h2>
                <p className="leading-relaxed">
                  프로젝트, 스터디, 해커톤, 협업, CS 교육자, 새로운 IT기술 공유
                  의 다양한 활동에 적극참여했습니다. 타분야와 협업하는 방식과
                  프론트엔드 구현 기술을 코드리뷰하며 학습했습니다. 프로젝트를
                  통해 실전에서 적용하려 노력하였습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex pb-20 mx-auto md:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full left-4">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 mt-10 text-sm font-medium rounded-full h-14 w-14 md:mt-0 title-font"></div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 md:items-center md:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 rounded-full">
                <Image
                  className="rounded-full"
                  src={`${prefix}/programmers.jpg`}
                  alt="programmers"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex-grow mt-6 md:pl-6 md:mt-0">
                <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                  Programmers DevCource 타입스크립트로 함께하는 웹 풀 사이클
                  개발(React, Node.js)
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex pb-20 mx-auto md:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full left-4">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 mt-10 text-sm font-medium text-white rounded-full h-14 w-14 bg-dark md:mt-0 title-font">
              2023
            </div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 md:items-center md:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-purple-500 bg-purple-100 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow mt-6 md:pl-6 md:mt-0">
                <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                  The 400 Blows
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex pb-10 mx-auto md:items-center md:w-2/3">
            <div className="absolute inset-0 flex items-center justify-center w-6 h-full left-4">
              <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 mt-10 text-sm font-medium rounded-full h-14 w-14 md:mt-0 title-font"></div>
            <div className="flex flex-col items-start flex-grow pl-6 md:pl-8 md:items-center md:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-purple-500 bg-purple-100 rounded-full">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow mt-6 md:pl-6 md:mt-0">
                <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
                  The Catalyzer
                </h2>
                <p className="leading-relaxed">
                  VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                  bespoke try-hard cliche palo santo offal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
