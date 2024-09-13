import Image from "next/image";
import animation from "@/styles/animation.module.css";

export default function Project() {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://chae-dahee.github.io/"
      : "";

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center ">❤️‍🔥 Projects</h1>
      <section className="text-gray-800 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col flex-wrap -m-4">
            <div className="w-full p-4 md:w-full">
              <div className="h-full p-8 bg-gray-100 rounded-xl">
                <h1 className="mb-5 text-2xl font-bold text-center">
                  📌 Sync Spot 중간지점 찾기
                </h1>
                <p className="-mt-5 text-right">24.03 ~ 현재</p>
                <Image
                  src={`${prefix}/syncspot.png`}
                  alt="syncsopt"
                  height={100}
                  width={100}
                  className="w-full h-auto mx-auto my-5 "
                />
                <p className="mb-6 leading-relaxed">
                  팀원들과의 논의 중, 중간지점 찾기 기능이 실제로 필요하다는
                  점을 느껴 프로젝트를 진행하게 되었습니다. 사용자가 장소를
                  입력하면, 중간지점을 계산하고, 주변의 만남 장소를 추천하며,
                  장소와 시간에 대한 투표를 한번에 할 수 있는 올인원
                  웹사이트입니다. 현재 동아리 내에서 스터디, 프로젝트, 정기세션
                  등 실제 만남 시 실제로 사용되고 있습니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  다른사람의 장소를 모두 알고있는 경우, 혼자 장소를 모두 입력해
                  중간장소를 찾는 로직 A. <br />
                  링크 공유를 통해 각각 방에 접속해 자신의 장소를 입력하고 각각
                  장소가 업데이트 될때마다 중간장소를 찾는 로직 B.
                  <br /> 링크방 a를 생성하고, 링크방 b를 생성하는 경우, 로그인을
                  각각 방마다 진행하는 로직 C. 전역으로 로그인한 후 각각 방
                  생성하는 로직 D(각각 투표 시 문제 발생으로 인해 C 로직 선택).
                  <br /> 400, 401, 402, 402, 404, 422 등 많은 에러코드와 상태
                  관리의 어려움.
                  <br />
                  등 위와같은 수많은 경우의 로직을 모두 고려함에 따라 복잡성이
                  증가하여 플로우의 명확한 정립이 필요했습니다. 기획과 플로우에
                  대해 깊이 논의하고, 백엔드와 적극적으로 의견을 공유하여 로직을
                  확립할 수 있었습니다. 이러한 과정에서 기획과 백엔드에게
                  요청해야할 부분이 무엇인지 이해할 수 있었고, 프로젝트 설계에
                  큰 도움이 되었습니다. <br />
                  이외에도 react-query를 활용해 유저 상태를 관리했고, 이에 따른
                  UI를 분기하여 사용자 경험을 향상시켰습니다 사용자가 어떠한
                  링크에 접속으로 시작했는지 알기 위해 navigate에 state값을
                  전송하는 방식을 구현하였습니다. 시간투표 링크로 공유받아
                  접속하였을경우, 로그인 상태가 아니기에 로그인으로 이동합니다.
                  로그인이 완료되면 장소입력, 장소투표가 아닌 시간투표 링크로
                  재접속 할 수 있도록 사용자의 편의성을 고려하였습니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  다만, 기한과 계획을 고려하는데 부족합이 있어, version 1.0.0
                  에서 개선해야 할 점이 많다는 것을 깨달았습니다. 이에
                  자체적으로 유지보수팀을 구성하였습니다. 현재 Jira를 통해
                  체계적인 일정관리를 진행하고 있습니다. 설문을 통해 사용자
                  경험을 조사하고, 그 과정동안 기존코드를 리팩토링, 반응형 적용
                  중에 있습니다. 프로젝트의 개선할 점을 명확히 파악하고, 성능과
                  더불어 세부적인 기능을 사용자 친화적으로 반영하겠다는 점이
                  목표입니다.
                </p>
                <div className="mb-5 border-t-2"></div>
                <div className="flex flex-col items-center justify-around w-full mb-5 text-lg md:flex-row">
                  <p>
                    |<span className="font-bold"> URL</span> :{" "}
                    <a
                      href="https://cotato-midpoint.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 cursor-pointer"
                    >
                      https://cotato-midpoint.site/
                    </a>
                    <br />|<span className="font-bold"> GITHUB </span>:{" "}
                    <a
                      href="https://github.com/IT-Cotato/9th-Midpoint-FE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 cursor-pointer"
                    >
                      https://github.com/IT-Cotato/9th-Midpoint-FE
                    </a>
                    <br />|<span className="font-bold"> ROLE</span> : 기획 2,
                    디자인 1, FE 2, BE 2 / FE 40% 담당
                  </p>
                  <p>
                    |<span className="font-bold"> FrontEnd</span> : React,
                    TypeScript, Vite, tailwind, react-query, jotai, zustand,
                    jest, kakao.map <br />|
                    <span className="font-bold"> BackEnd</span> : Java, gradle,
                    spring, ubuntu, nginx, mysql, redis, JWT <br />|
                    <span className="font-bold"> Deploy </span>: AWS S3,
                    Github-Actions, VScode, Git, Notion, Discord, Figma
                  </p>
                </div>
                <a className="inline-flex items-center">
                  <Image
                    alt="cotato"
                    src={`${prefix}/cotato.png`}
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                    height={100}
                    width={100}
                  />
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium text-gray-900 title-font">
                      COTATO 9th
                    </span>
                    <span className="text-sm text-gray-500">FRONTEND</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full p-4 md:w-full">
              <div className="h-full p-8 bg-gray-100 rounded-xl">
                <h1 className="mb-5 text-2xl font-bold text-center">
                  💡 MyGoopPrice 주변 착한가게 관리, 나만의 소비패턴 분석
                </h1>
                <p className="-mt-5 text-right">24.07 ~ 24.08</p>
                <div className={`${animation.videoContainer} my-5`}>
                  <iframe
                    src="https://www.youtube.com/embed/SeMMvSOGoBg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="mb-6 leading-relaxed">
                  사용자의 경험을 깊이 고민하며, 과거에 유행했던 ${`'거지방'`}을
                  떠올렸습니다. 사용자 소비 습관을 확인할 수 있는 기능이
                  필요하다는 생각에서 시작하였습니다.
                  <br />
                  위치 기반으로 주변 착한 가게를 검색하고, 사용자 관점에서
                  나만의 소비 패턴을 분석하는 기능을 구현했습니다. 착한 가게에
                  대한 정보는 필터링과 페이지네이션이 가능하며, 가격대는
                  react-range 라이브러리를 활용하여 유저 친화적인 UI를
                  제공합니다. 사용자의 위치 동의를 받은 후, 카카오맵을 통해 1km,
                  3km, 5km 범위 내의 착한 가게를 보여줍니다. 가게 상세
                  페이지에서는 리뷰와 댓글을 남기고 좋아요를 표시할 수 있습니다.
                  마이페이지에서는 doum-postcode를 이용해 원하는 주소를 설정하고
                  좋아요 리스트를 확인할 수 있습니다. 소비 패턴 분석
                  페이지에서는 사용자가 좋아요를 누른 카테고리와 금액대를
                  분석하여 차트로 시각적으로 제공합니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  Sync Spot 프로젝트에서 시간 투표 부분을 담당한 경험을
                  바탕으로, 이번 프로젝트에서는 지도와 주소 검색 기능을
                  구현했습니다. 현재 위치 정보뿐만 아니라 거리에 따른 데이터를
                  지도에 표시하며, z-index 위에 데이터 슬라이드를 구성했습니다.
                  <br />
                  위치 정보는 위치 동의와 마이페이지에서의 주소 검색 두 가지
                  방법으로 수집하였고, zustand를 사용해 전역적으로 데이터를
                  관리했습니다. 하나의 방법으로 위치 정보를 저장하면, 다른
                  방법을 통해 접근할 때 저장된 정보를 사용하도록 설정했습니다.
                  위치 동의는 위도와 경도를 기반으로 저장하고, 주소 검색은 시,
                  도, 구, 도로명, 위도, 경도 데이터를 받아 사용할 수 있도록
                  고민했습니다. 현재는 위도와 경도를 활용하고 있으며, 추후
                  행정동 코드도 표시할 수 있도록 개발할 계획입니다.
                  <br />
                </p>

                <p className="mb-6 leading-relaxed">
                  사용자의 소비 패턴을 차트로 시각화하면서 사용자 친화적인 UI에
                  대해 고민하게 되었습니다.
                  <br />
                  Auth 로그인 구현 시, 프론트와 백의 역할 분담 및 소통 부족으로
                  문제가 발생했습니다. 서로의 이해가 달라 구글과 카카오 소셜
                  로그인을 모두 개발했으며, 관리 범위에 대한 소통이
                  부족했습니다. 현재는 클라이언트 레벨에서 처리하도록
                  수정하였고, 백엔드에서 개선 중입니다. 이 경험을 통해 팀원 간의
                  실시간 소통의 중요성을 느꼈습니다. 각자의 개발 과정과 설계에
                  대한 이해도를 높여야 한다는 점도 깨달았습니다. 코드 리뷰를
                  통해 진행 상황을 확인하고, 백엔드 코드 체크의 필요성 또한
                  느끼며 이를 적용하고 있습니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  이외에도 cloudtype이라는 새로운 배포툴을 경험하였습니다.
                  프로젝트마다 새로운 기술을 적용함에 있어서 기본부터 고도화까지
                  직접 진행하여 자신감을 가지고 더욱 신중하게 개발하게
                  되었습니다.
                </p>
                <div className="mb-5 border-t-2"></div>
                <div className="flex flex-col items-center justify-around w-full mb-5 text-lg md:flex-row">
                  <p>
                    |<span className="font-bold"> URL</span> :{" "}
                    <span
                      className="cursor-pointer"
                      onClick={() => alert("현재 서버 만료된 상태입니다")}
                    >
                      https://web-mygoodprice-fe-m088eloe749cb52d.sel4.cloudtype.app/
                    </span>
                    <br />|<span className="font-bold"> GITHUB </span>:{" "}
                    <a
                      href="https://github.com/programmers-team-3/MyGoodPrice-FE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      https://github.com/programmers-team-3/MyGoodPrice-FE
                    </a>
                    <br />|<span className="font-bold"> ROLE</span> : FE 2, BE 2
                    / FE 60% 담당
                  </p>
                  <p>
                    |<span className="font-bold"> FrontEnd</span> : React,
                    TypeScript, Vite, tailwind, zustand, redux, JWT, kakao.map,
                    daum-post <br />|<span className="font-bold"> BackEnd</span>{" "}
                    : Nest.js, Python, Express, MongoDB, Firebase <br />|
                    <span className="font-bold"> Deploy </span>: cloudtype,
                    Github-Actions, VScode, Git, Notion, Slack, Figma
                  </p>
                </div>
                <a className="inline-flex items-center">
                  <Image
                    alt="programmer"
                    src={`${prefix}/programmers.jpg`}
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                    height={100}
                    width={100}
                  />
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium text-gray-900 title-font">
                      Programmers Devcource FullCycle 3th
                    </span>
                    <span className="text-sm text-gray-500">FRONTEND</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full p-4 md:w-full">
              <div className="h-full p-8 bg-gray-100 rounded-xl">
                <h1 className="mb-5 text-2xl font-bold text-center">
                  💌 Show Mailer 서울시 문화공연 알림 서비스
                </h1>
                <p className="-mt-5 text-right">24.06 ~ 24.07</p>
                <Image
                  src={`${prefix}/showMailer.jpg`}
                  alt="ShowMailer"
                  height={100}
                  width={100}
                  className="w-full h-auto mx-auto my-5"
                />
                <p className="mb-6 leading-relaxed">
                  짧은 프로젝트 기간과 적은 인원으로 인해 최대한 효율적으로
                  접근하는 방법에 대해 고민했습니다. 기존의 공공 API 서울시
                  문화행사 정보를 활용해 다양한 기능을 제공하고자 했습니다. 공식
                  사이트 검토 결과, 공연 정보는 제공되지만 좋아요와 알림 서비스
                  기능이 없음을 확인했습니다.
                  <br />
                  따라서 저희 프로젝트는 다음 세가지 기능에 집중했습니다. <br />
                  1. 서울시 문화공연 데이터를 전반적으로 보여주고, 카테고리별로
                  필터링 및 검색할 수 있는 기능을 구현하였습니다. <br />
                  2. 유저가 좋아요를 누른 공연을 마이페이지에서 모아 확인하는
                  기능입니다.
                  <br />
                  3. 좋아요를 누른 공연의 시작일 3일 전과 7일 전에 로그인한 구글
                  이메일로 알림을 보내는 이메일 알림 기능을 구현하였습니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  프론트엔드를 전체적으로 구성 및 구현하고, Firebase의 구글 소셜
                  로그인을 연동하였습니다. 프로젝트 전체를 Vercel에 배포하고
                  CI/CD를 적용하였습니다. API와 hooks를 분리하여 Axios와 React
                  Query를 사용해 백엔드와 통신했습니다. 개인적으로 React Query를
                  프로젝트에 적용하는 것은 처음이었는데, 이를 통해 새로운 기술에
                  대한 두려움을 이겨낼 수 있었습니다.
                  <br />
                </p>
                <p className="mb-6 leading-relaxed">
                  프론트 뿐만 아니라 백엔드의 배포를 담당하게 되면서, 백엔드의
                  코드와 폴더구조를 분석하였습니다. 이 과정에서 서버의 구조와,
                  api 에 대해 깊게 이해하게 되었습니다. 특히 강의에서 실습했던
                  RESTful API 를 프로젝트에 직접 적용해보고, 코드리뷰를 통해
                  수정해 나아가는 과정이 재미있었습니다. 배포 시에 문제가 되는
                  라이브러리, 문법, 규칙을 공식문서를 참조하여 해결하였고, 이를
                  통해 실제 운영환경의 어려움을 체감하였습니다. 또한, 해결방안을
                  빠르게 모색하는 방법을 이해했습니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  Pagination 및 카테고리 정렬 시 백엔드 데이터를 기반으로
                  프론트엔드 로직을 설계하고 구현하면서 설계와 이해의 중요성을
                  깨달았습니다. 또한, 프론트와 백의 역할을 명확히 이해하고, 각
                  코드 분석을 통해 필요한 요청을 파악하는 방법을 학습했습니다.
                  프로젝트를 전반적으로 관리하면서 CronJob과 같은 기술도
                  습득하게 되었고, 일정 관리, 소통 문제, 에러 처리 능력이 한층
                  성장했습니다. 이를 통해 프로젝트를 보다 넓은 시각에서 바라볼
                  수 있게 되었습니다.
                </p>
                <div className={`${animation.videoContainer} mb-5`}>
                  <iframe
                    src="https://www.youtube.com/embed/963pInp-7gs"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mb-5 border-t-2"></div>
                <div className="flex flex-col items-center justify-around w-full mb-5 text-lg md:flex-row">
                  <p>
                    |<span className="font-bold"> URL</span> :{" "}
                    <a
                      href="https://dev-alarm-fe.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      https://dev-alarm-fe.vercel.app/
                    </a>
                    <br />|<span className="font-bold"> GITHUB </span>:{" "}
                    <a
                      href="https://github.com/programmers-project-july/ShowMailer-FE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      https://github.com/programmers-project-july/ShowMailer-FE
                    </a>
                    <br />|<span className="font-bold"> ROLE</span> : FE 1, BE 2
                    / FE 100% 담당
                  </p>
                  <p>
                    |<span className="font-bold"> FrontEnd</span> : React,
                    TypeScript, Vite, tailwind, react-query, JWT <br />|
                    <span className="font-bold"> BackEnd</span> : Node.js,
                    Express, Swagger, FireStore, Nodemailer, Function <br />|
                    <span className="font-bold"> Deploy </span>: Vercel,
                    Github-Actions, VScode, Git, Firebase, Notion, Slack, Figma
                  </p>
                </div>
                <a className="inline-flex items-center">
                  <Image
                    alt="programmer"
                    src={`${prefix}/programmers.jpg`}
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                    height={100}
                    width={100}
                  />
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium text-gray-900 title-font">
                      Programmers Devcource FullCycle 3th
                    </span>
                    <span className="text-sm text-gray-500">FRONTEND</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full p-4 md:w-full">
              <div className="h-full p-8 bg-gray-100 rounded-xl">
                <h1 className="mb-5 text-2xl font-bold text-center">
                  북킷리스트
                </h1>
                <p className="-mt-5 text-right">23.09 ~ 24.02</p>
                <Image
                  src={`${prefix}/BookitList.jpeg`}
                  alt="syncsopt"
                  height={100}
                  width={100}
                  className="w-full h-auto mx-auto my-5 "
                />
                <p className="mb-6 leading-relaxed">
                  도서 api를 활용해 다양한 서비스를 개발하고 싶어서
                  진행하였습니다. 알라딘 도서 api를 사용했고, ISBN을 기본키로
                  검색, 상세정보 등 데이터를 가져왔습니다. 읽은 책에 대한 생각을
                  기록하고, 공유하는 글쓰는 사이트 입니다.
                  <br />
                  Carousel을 적극 사용하여 사용자가 등록한 도서의 한줄요약,
                  포스트 글을 보여줍니다. 인기순, 최신순 정렬을 구현하였습니다.
                  검색과 도서 상세페이지에서 도서정보를 확인할 수 있으며, 책에
                  해당하는 한줄요약, 포스트를 보여줍니다. 기록하기에서 임시저장
                  기능과 한줄요약, 포스트 기능의 분기, 기본글쓰기와 템플릿
                  제공의 동작을 합니다. 카카오, 네이버 소셜 로그인을 통해 프로필
                  공개/비공개, 내가쓴 글, 좋아요 한 글이 표시됩니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  백엔드의 swagger를 분석하고 질문 및 소통을 담당했습니다.
                  기획팀의 경우 개발과 협업한 경험이 부족해 제가 리드하였습니다.
                  필요기능에 대해 구현방향을 논의하고, 로직을 파악하고 소통을
                  담당했습니다. 첫 협업 장기 프로젝트인만큼 부족한 점과 개선할
                  점에 대해 많이 깨달았습니다. 추후의 성장한 모습을 보일 수
                  있었던, 기반이 되었던 프로젝트 라고 느꼈습니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  디자인 시스템과 플로우에 따른 설계의 부족함에 있어서 문제가
                  발생함. 초기에 MVP 핵심기능을 정하고 진행해야 한다는 것을
                  배움. 새로운 기술 및 라이브러리를 적용하려고 할때 숙련도
                  부족의 문제가 발생하였음. 라이브러리에 의존도를 낮추고 싶다는
                  생각을 하였음. 따라서 Carousel을 라이브러리 없이 직접 구현하는
                  방안 연습하였음. 이외에도 꼭 필요한 라이브러리가 아니라면,
                  한번더 생각해보는 계기가 되었음.
                  <br />
                  AWS EC2 인스턴스를 통해서 배포하면서 마주친 에러들을 해결하기
                  위해 우분투, 공식문서를 많이 참고하였다. 팀원들과 으쌰으쌰하며
                  처음부터 부딪힌 느낌으로 진행하여서 두려움을 이겨냈다.
                  프로젝트 초기 세팅과 배포를 담당하면서 구조와 아키텍처,
                  배포규칙에 대해 이해할 수 있었다.
                </p>
                <div className="mb-5 border-t-2"></div>
                <div className="flex flex-col items-center justify-around w-full mb-5 text-lg md:flex-row">
                  <p>
                    |
                    <span className="font-bold">
                      URL : 현재 서버 만료된 상태입니다
                    </span>
                    <br />|<span className="font-bold"> GITHUB </span>:{" "}
                    <a
                      href="https://github.com/BookitList/BookitList_frontend"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      https://github.com/BookitList/BookitList_frontend
                    </a>
                    <br />|<span className="font-bold"> ROLE</span> : FE 2, BE 2
                    / FE 60% 담당
                  </p>
                  <p>
                    |<span className="font-bold"> FrontEnd</span> : React,
                    TypeScript, Vite, tailwind, zustand, redux, JWT, kakao.map,
                    daum-post <br />|<span className="font-bold"> BackEnd</span>{" "}
                    : Nest.js, Python, Express, MongoDB, Firebase <br />|
                    <span className="font-bold"> Deploy </span>: cloudtype,
                    Github-Actions, VScode, Git, Notion, Slack, Figma
                  </p>
                </div>
                <a className="inline-flex items-center">
                  <Image
                    alt="cotato"
                    src={`${prefix}/cotato.png`}
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                    height={100}
                    width={100}
                  />
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium text-gray-900 title-font">
                      COTATO 8th
                    </span>
                    <span className="text-sm text-gray-500">FRONTEND</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full p-4 md:w-full">
              <div className="h-full p-8 bg-gray-100 rounded-xl">
                <h1 className="mb-5 text-2xl font-bold text-center">
                  nodejs, typescript - bookshop
                </h1>
                <p className="mb-6 leading-relaxed">
                  MSW 서버, Docker 시스템에 대한 이해, 풀스택 경험
                </p>
                <a className="inline-flex items-center">
                  <Image
                    alt="cotato"
                    src={`${prefix}/cotato.png`}
                    className="flex-shrink-0 object-cover object-center w-12 h-12 rounded-full"
                    height={100}
                    width={100}
                  />
                  <span className="flex flex-col flex-grow pl-4">
                    <span className="font-medium text-gray-900 title-font">
                      Alper Kamu
                    </span>
                    <span className="text-sm text-gray-500">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
