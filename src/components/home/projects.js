import Image from "next/image";
import animation from "@/styles/animation.module.css";
import { useState } from "react";

export default function Project() {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://chae-dahee.github.io/"
      : "";

  const imgs = [
    `${prefix}/syncspot.png`,
    `${prefix}/syncspotClient.png`,
    `${prefix}/syncspotServer.png`,
  ];

  const mgpImgs = [`${prefix}/MyGoodPriceArc.png`, `${prefix}/MyGoodPrice.jpg`];

  const [scurImgs, setScurImgs] = useState(0);
  const [mcurImgs, setMcurImgs] = useState(0);

  const snextImage = () => {
    setScurImgs((prevIndex) => (prevIndex + 1) % imgs.length);
  };

  const sprevImage = () => {
    setScurImgs((prevIndex) => (prevIndex - 1 + imgs.length) % imgs.length);
  };

  const mnextImage = () => {
    setMcurImgs((prevIndex) => (prevIndex + 1) % mgpImgs.length);
  };

  const mprevImage = () => {
    setMcurImgs(
      (prevIndex) => (prevIndex - 1 + mgpImgs.length) % mgpImgs.length
    );
  };

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
                <div className="relative w-full mx-auto">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={sprevImage}
                      className={`absolute left-0 z-10 text-3xl font-bold px-3 ${
                        scurImgs === 0
                          ? "text-gray-300"
                          : "text-primary-500 hover:text-primary-600"
                      }`}
                      disabled={scurImgs === 0}
                    >
                      ‹
                    </button>
                    <div className="w-4/5 h-auto mx-auto overflow-hidden rounded-lg">
                      <div
                        className="flex transition-transform duration-500"
                        style={{
                          transform: `translateX(-${scurImgs * 100}%)`,
                        }}
                      >
                        {imgs.map((src, index) => (
                          <Image
                            key={index}
                            src={src}
                            alt={`image-${index}`}
                            height={400}
                            width={600}
                            className="object-contain w-full flex-shrink-0"
                          />
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={snextImage}
                      className={`absolute right-0 z-10 text-3xl font-bold px-3 ${
                        scurImgs === 2
                          ? "text-gray-300"
                          : "text-primary-500 hover:text-primary-600"
                      }`}
                      disabled={scurImgs === 2}
                    >
                      ›
                    </button>
                  </div>
                </div>
                <p className="mb-6 leading-relaxed">
                  <strong>프로잭트 개요</strong>
                  <br />
                  연합동아리 코테이토에서 팀원들과 오프라인 미팅을 가질때,
                  중간지점 찾기 기능이 실제로 필요하다는 점을 느껴 프로젝트를
                  진행하게 되었습니다. 사용자가 장소를 입력하면, 중간지점을
                  계산하고, 주변의 만남 장소(상권)을 추천합니다. 또한 장소와
                  시간에 대한 투표까지 한번에 할 수 있는 올인원 웹사이트입니다.
                  간편 로그인과 재투표 및 재입력 로직또한 구현되어 있습니다.
                  현재 동아리 내에서 스터디, 프로젝트, 정기세션 등에서 싱크스팟
                  version.1.0.0을 사용해 모임을 진행하고 있습니다. 9기 프로젝트
                  과정으로 완성하였으니, 10기의 모든 모임에서 싱크스팟을
                  적극적으로 사용하도록 하는게 목표입니다.
                  <br />
                  장소 입력은 daum-postcode, 지도는 kakao map api를
                  사용하였습니다. 주변의 상권 추천 및 필터링은
                  국토교통부_주요상권 공공데이터를 사용하였습니다. 중간지점 계산
                  알고리즘은 현재 무게중심 기반으로 중간좌표를 구하였고, 현재
                  다익스트라 알고리즘을 이용한 대중교통 이동시간을 고려한
                  구현방식으로 디벨롭을 진행하고 있습니다. 장소투표는 계산된
                  중간지점 5개를 투표할 수 있습니다. 시간 투표는 캘린더를 이용해
                  만날 수 있는 날짜를 지정합니다. 날짜와 시간을 투표하면,
                  그리드에 가능한 인원수가 표시됩니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  <strong>담당 역할, 세부 구현 기술</strong>
                  <br />
                  react-query와 Jotai를 활용해 간결하게 사용자의 로그인 상태를
                  관리했고, 이에 따른 UI를 분기하여 사용자 경험을
                  향상시켰습니다.
                  <br /> 사용자가 어떠한 링크에 접속으로 시작했는지 알기 위해
                  location.state.from을 통해 파악하고, navigate에 state값으로
                  전송하는 방식을 구현하였습니다. 예를들어, 시간투표 링크로
                  공유받아 접속하였을경우, 로그인 상태가 아니기에 로그인으로
                  이동합니다. 로그인이 완료되면 다른 페이지가 아닌 시간투표
                  링크로 재접속 할 수 있도록 사용자의 편의성을 고려하였습니다.
                  <br />
                  로그인 시 React Hook Form 으로 폼 입력값을 관리, 에러 및 제출
                  처리 하였고, Yup 라이브러리를 함께 사용해, 비밀번호 특수문자의
                  유효성을 검사하였습니다. react-calendar 라이브러리를 사용하여
                  디자인 하였습니다. 단순 라이브러리가 간편하다는 이유로 사용한
                  것이 아닌, 디자인과 기획의 의도에 맞게 스타일링하고 가공하기
                  위해 각 영역과 동작방식을 분석하고 목표한대로
                  스타일링하였습니다.
                  <br />
                  투표시 구현되어야하는 로직은 투표방 관련 조회, 생성, 재생성과
                  투표 관련 투표하기, 재투표하기, 투표여부검증, 투표 결과(항목)
                  조회가 있습니다.
                  <br /> <strong>1. 투표방 생성 페이지 </strong>
                  : 접속 시 로그인 여부를 판단하고, 로그인이 안되어있을 경우,
                  로그인 페이지로 이동한다.
                  <br />
                  1-1. 투표방 존재 여부를 확인하고 존재할 경우(모임의 다른사람이
                  이미 생성한 경우) 투표하기 페이지로 이동, 존재하지 않을 경우
                  투표방 생성 페이지로 이동한다.
                  <br />
                  1-2. 투표방 생성 페이지에서 장소목록, 시간투표 날짜를 선택하고
                  투표를 생성한다.
                  <br />
                  <strong>2. 투표하기 </strong>: url로 공유받는 사람이 있을 수
                  있으니, 동일하게 로그인 검증, 방생성 검증을 진행한다.
                  시간투표의 경우 아래 로직을 따른다.
                  <br /> 2-1. 좌측 캘린더에서 날짜를 클릭하면, 누가 몇시에
                  투표했는지 결과를 실시간으로 볼 수 있다.(새로고침해야함)
                  따라서 투표방 조회 checkVoteRoom에서 전달된 날짜를 필터링해서
                  캘린더에 보여주고, 날짜를 클릭하면 resultVoteRoom에서 각
                  날짜에 투표한 멤버와 시간대를 사용한다. 이부분은 백엔드와
                  데이터 통일성을 고려해 API 리팩토링할 계획.
                  <br />
                  2-2. 우측 시간투표에서 전달된 날짜에 따른 가능한 시간대를
                  체크하고 투표한다. 이때 형식은 가능한 시작일시, 마지막 일시의
                  yyyy-mm-dd hh:mm이다. 마지막 일시가 시작일시보다 빠르면 안되기
                  때문에 프론트에서 검증한다.
                  <br />
                  2-3. myVotesExistence로 투표한 경험이 있을 경우, 우측
                  시간투표의 해당 항목이 활성화 된다.
                  <br />
                  2-4. 2-3의 경우 투표하기가 아닌, 재투표하기로 표시되어야하고
                  PUT 재투표 API를 호출한다.
                  <br />
                  <strong>3. 투표결과 페이지 </strong>: 투표하기와 동일하게
                  로그인 검증, 방생성 검증을 진행한다.
                  <br /> 3-1. 장소 투표의 경우, 투표수가 많은 순으로 정렬된다.
                  <br />
                  3-2. 시간 투표의 경우, date,{" "}
                  {`timeVotes[memberName, dateTime{memberAvailableStartTime, memberAvailableEndTime}]`}
                  으로 구성된 json 데이터를 10분 단위 인덱스로 계산했다. 각 시간
                  그리드 72칸을 생성해서, hh * 6칸(60분) + mm/10 floor 으로
                  계산해 인덱스를 반환했다. 시간값을 순회하면서 인덱스로
                  변환하고, 해당하는 인덱스의 멤버수를 증가시킨다. 이를 통해,
                  투표인원에 따른 색상을 지정할 수 있다.
                </p>
                <p className="mb-6 leading-relaxed">
                  <strong>트러블 슈팅</strong>
                  <br />
                  위 투표 구현 로직 이외에도, <br />
                  A. 다른사람의 장소를 모두 알고있는 경우, 혼자 장소를 모두
                  입력해 중간장소를 찾는 로직 <br />
                  B. 링크 공유를 통해 각각 방에 접속해 자신의 장소를 입력하고
                  각각 장소가 업데이트 될때마다 중간장소를 찾는 로직.
                  <br />
                  C. 링크방 a를 생성하고, 링크방 b를 생성하는 경우, 로그인을
                  각각 방마다 진행하는 로직.
                  <br />
                  D. 전역으로 로그인한 후 각각 방 생성하는 로직(각각 투표 시
                  문제 발생으로 인해 C 로직 선택).
                  <br />
                  E. 400, 401, 402, 402, 404, 409, 422 등 많은 에러코드와 상태
                  관리의 어려움.
                  <br />등 위와같은 수많은 경우의 로직을 모두 고려함에 따라
                  복잡성이 증가하여 플로우의 명확한 정립이 필요했습니다. 기획과
                  플로우에 대해 깊이 논의하고, 백엔드와 적극적으로 의견을
                  공유하여 로직을 확립할 수 있었습니다. 이러한 협업 과정에서 각
                  파트에서 요청해야할 부분이 무엇인지 이해할 수 있었고, 프로젝트
                  설계에 큰 도움이 되었습니다. 또한 구현하기 이전에 로직과 흐름,
                  설계에 대해 명확히 적립하고 진행해야 한다는
                </p>
                <p className="mb-6 leading-relaxed">
                  <strong>프로젝트를 통해 배운 점</strong>
                  <br />
                  여러 백엔드와 협업해본 결과, 데이터 형식을 화면의 형식에 맞게
                  가공하여 전송하거나, 한번에 데이터를 넘겨주고 프론트엔드에서
                  가공해서 활용하는 두가지 방법을 모두 경험해 보았습니다.
                  어느것이 편하고 불편하다의 개념이 아닌, 팀만의 협업방식이
                  다르다는 것을 존중합니다. 나의 방법을 고집하지않고, 팀에
                  맞추어 개발할 자신이 생겼습니다.
                  <br /> <strong>유지보수</strong>
                  <br /> 다만, 기한을 고려하여 개발한다는 것에 시간적 여유와
                  경험의 부족함이 있어, version 1.0.0 에서 개선해야 할 부분이
                  많다는 것을 깨달았습니다. 이에 자체적으로 유지보수팀을
                  구성하였습니다. Jira를 통해 체계적인 일정관리와 함께
                  진행합니다. 설문을 통해 실제 사용자 경험을 조사하고,
                  기존코드를 리팩토링, 반응형 적용 중에 있습니다. 프로젝트의
                  개선할 점을 명확히 파악하고, 성능과 더불어 세부적인 기능을
                  사용자 친화적으로 반영하겠다는 점이 목표입니다.
                  <br />
                  <strong>리팩토링 계획</strong>
                  <br />
                  <strong>디자인 측면</strong>
                  <br />- 🔥 프로젝트 전반적인 디자인 시스템 구축 (스토리 북,
                  중복되는 스타일 처리. 예를들어 모달)
                  <br />- 모바일 반응형 구현 → (모바일 UI가 만들어진 이후에
                  가능한 작업)
                  <br />- 추천 장소의 이름을 보여주는 부분이 길어지면 CSS가
                  깨지는 문제 ( → 말줄임표로 해결)
                  <br />
                  <strong>개발</strong>
                  <br />- 비즈니스 요구사항에 따른 리팩토링 → 변경이 일어나는
                  부분을 집중적으로 확인하자!
                  <br />- 🔥 중복되는 코드 컴포넌트화 (UI 로직에서 재사용 가능한
                  부분을 분리)
                  <br />- hooks (커스텀 훅 사용), API 코드로 분리
                  <br />- 스켈레톤 코드 (loading UI) → 로딩창이 길어보인다는
                  피드백
                  <br />- 🔥 에러 상태 (백엔드와 협업 필요, 에러 상태에 대한
                  공통 처리)
                  <br />- 데이터 통신 API 코드 직렬 vs 병렬 처리 (Promise.all)
                  <br />
                  <strong>에러 - 🔥 Hotfix</strong>
                  <br />- 투표 다시하기 에러 (422 관련)
                  <br />- x-cache: Error from cloudfront 에러
                  <br />- 결과 링크로 들어왔고, 투표하지 않았는데 재투표하기가
                  보이는 문제
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
                <div className="relative w-full mx-auto">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={mprevImage}
                      className={`absolute left-0 z-10 text-3xl font-bold px-3 ${
                        mcurImgs === 0
                          ? "text-gray-300"
                          : "text-primary-500 hover:text-primary-600"
                      }`}
                      disabled={mcurImgs === 0}
                    >
                      ‹
                    </button>
                    <div className="w-4/5 h-auto mx-auto overflow-hidden rounded-lg">
                      <div
                        className="flex transition-transform duration-500"
                        style={{
                          transform: `translateX(-${mcurImgs * 100}%)`,
                        }}
                      >
                        {mgpImgs.map((src, index) => (
                          <Image
                            key={index}
                            src={src}
                            alt={`image-${index}`}
                            height={400}
                            width={600}
                            className="object-contain w-full flex-shrink-0"
                          />
                        ))}
                      </div>
                    </div>
                    <button
                      onClick={mnextImage}
                      className={`absolute right-0 z-10 text-3xl font-bold px-3 ${
                        mcurImgs === 1
                          ? "text-gray-300"
                          : "text-primary-500 hover:text-primary-600"
                      }`}
                      disabled={mcurImgs === 1}
                    >
                      ›
                    </button>
                  </div>
                </div>
                <p className="mb-6 leading-relaxed">
                  <strong>프로젝트 개요</strong>
                  <br />
                  사용자의 경험을 깊이 고민하며, 과거에 유행했던 {`'거지방'`}을
                  떠올렸습니다. 사용자 소비 습관을 확인할 수 있는 기능이 있으면
                  좋겠다는 생각에서 시작하였습니다.
                  <br />
                  위치 기반으로 주변 착한 가게를 검색하고, 사용자 관점에서
                  나만의 소비 패턴을 분석하는 기능을 구현했습니다. 착한 가게에
                  대한 정보는 필터링과 Pagination이 가능하며, 가격대는
                  react-range 라이브러리를 활용하여 유저 친화적인 UI를
                  제공합니다. 카카오맵을 통해 1km, 3km, 5km 범위 내의 착한
                  가게를 보여줍니다. 가게 상세 페이지에서는 리뷰와 댓글,
                  좋아요를 표시할 수 있습니다. 마이페이지에서는 daum-postcode를
                  이용해 주소를 설정하고 좋아요 리스트를 확인할 수 있습니다.
                  소비 패턴 분석 페이지에서는 사용자가 좋아요를 누른 카테고리와
                  금액대를 분석하여 시각적으로 차트를 제공합니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  <strong>담당 역할, 세부 구현 기술</strong>
                  <br />
                  Sync Spot 프로젝트에서 지도 이외의 부분을 담당하였기 때문에,
                  본 프로젝트를 통해 지도와 주소 검색 기능을 프로젝트에 적용하고
                  싶었습니다.
                  <br /> Kakao 지도 API를 기반으로 현재 위치 정보와, 거리에 따른
                  가게 데이터를 표시하며, z-index 위에 데이터 슬라이드를
                  구성했습니다.
                  <br />
                  지도 접속 시 위치동의, 마이페이지에서의 주소 검색 두 가지
                  방법으로 위치 정보를 수집하였고, Zustand를 사용해 전역적으로
                  데이터를 관리했습니다. 하나의 방법으로 위치 정보를 저장하면,
                  다른 방법을 통해 접근할 때 저장된 위치정보를 사용하도록
                  설정했습니다.
                  <br />
                  위치 동의는 위도와 경도를 기반으로 저장하고, 주소 검색은
                  정확한 위치를 문자로 알려주어야 하기 때문에 시, 도, 구,
                  도로명, 위도, 경도 의 정보를 받아 사용하였습니다. 두 정보의
                  데이터 형식이 다르기 때문에 타입, UI 에서 문제가
                  발생하였습니다. 현재는 위도와 경도를 공통으로 활용하고 있으며,
                  추후 위치동의에{" "}
                  {`'kakao developers의 좌표로 주소 변환하기 RESTful API'`}
                  를 활용해 행정동 위치를 표시할 수 있도록 개발할 계획입니다.
                  <br />
                  사용자의 소비 패턴을 차트로 시각화하면서 사용자 친화적인 UI에
                  대해 고민하게 되었습니다.
                </p>

                <p className="mb-6 leading-relaxed">
                  <strong>트러블 슈팅</strong>
                  <br />
                  Auth 로그인 구현 시, 프론트와 백의 역할 분담 및 소통 부족으로
                  문제가 발생했습니다. 서로의 이해가 달라 구글과 카카오 소셜
                  로그인을 모두 개발했으며, 관리 범위에 대한 소통이
                  부족했습니다. 현재는 클라이언트 레벨에서 처리하도록
                  수정하였고, 백엔드에서 개선 중입니다. 이 경험을 통해 팀원 간의
                  실시간 소통의 중요성을 느꼈습니다. 각자의 개발 과정과 설계에
                  대한 이해도를 높여야 한다는 점도 깨달았습니다. 코드 리뷰를
                  통해 진행 상황을 확인하고, 백엔드 코드 체크의 필요성 또한
                  느끼며 이를 추후 프로젝트 진행에 적용하고 있습니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  <strong>프로젝트를 통해 배운 점</strong>
                  <br />
                  이외에도 cloudtype이라는 새로운 배포툴을 경험하였습니다.
                  프로젝트마다 새로운 기술을 적용함에 있어서 기본부터 고도화까지
                  직접 진행하여 자신감을 가지고 더욱 신중하게 개발하게
                  되었습니다.
                </p>
                <div className="mb-5 border-t-2"></div>
                <div className="flex flex-col items-center justify-around w-full mb-5 text-lg md:flex-row">
                  <p>
                    |
                    <span className="font-bold">
                      {" "}
                      URL : 현재 서버 만료된 상태입니다.
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
                  <strong>프로젝트 개요</strong>
                  <br />
                  기존의 공공 API 서울시 문화행사 정보를 활용해 최대한
                  효율적으로 접근하는 방법에 대해 고민했습니다. 공식 사이트 검토
                  결과, 공연 정보는 제공되지만 좋아요와 알림 서비스 기능이
                  없음을 확인했습니다.
                  <br />
                  따라서 저희 프로젝트는 다음 세가지 기능에 집중했습니다: <br />
                  1. 서울시 문화공연 데이터를 전반적으로 보여주고, 카테고리별로
                  필터링 및 검색할 수 있는 기능. <br />
                  2. 유저가 좋아요를 누른 공연을 마이페이지에서 모아 확인하는
                  기능.
                  <br />
                  3. 좋아요를 누른 공연의 시작일 3일 전과 7일 전에 로그인한 구글
                  이메일로 알림을 보내는 기능.
                </p>
                <p className="mb-6 leading-relaxed">
                  <strong>담당 역할, 세부 구현 기술</strong>
                  <br />
                  프론트엔드를 전체적으로 구성 및 구현하고, Firebase의 구글 소셜
                  로그인을 연동하였습니다. 프로젝트를 Vercel에 배포하고 CI/CD를
                  적용하였습니다.
                  <br />
                  API와 hooks를 분리하여 Axios와 React Query를 사용해 백엔드와
                  통신했습니다. 간결한 코드를 유지하기 위해 React Query를
                  사용하기로 결정하였습니다. Swagger와 kubb cil을 이용한 프론트
                  자동화 코드를 목표하였습니다. 프로젝트에 적용하는 것은
                  처음이었고, 이를 통해 새로운 기술에 대한 두려움을 이겨낼 수
                  있었습니다.
                  <br />
                  React Query를 활용하여 데이터 상태, 로딩 상태, 에러 상태를
                  자동으로 관리했습니다. Pagination을 위한 더보기 클릭시에
                  keepPreviousData 옵션을 사용하여 이전 데이터를 유지하여 사용자
                  경험을 개선했습니다. isLoading 상태를 활영하여 로딩 UI
                  정의했습니다. 홈에 재접속할때 호출되는 전체 공연 정보 API의
                  경우 캐시에서 데이터를 가져와 성능을 향상시켰습니다. 필터링
                  또는 검색으로 쿼리 키가 변경될 때, 자동으로 React Query 훅에서
                  공연 데이터를 가져오도록 해 데이터 최신화를 보장했습니다.
                  <br />
                </p>
                <p className="mb-6 leading-relaxed">
                  <strong>트러블 슈팅</strong>
                  <br />
                  제공되는 공공 데이터에서 각 데이터의 유니크성을 검증하는
                  기본키가 존재하지 않아 어려움을 겪었습니다. 이를 해결하기 위해
                  카테고리, 공연 제목, 날짜 이 세가지를 조합하여 유니크함을
                  검증하고 키로 사용했습니다.
                  <br />
                  이 과정에서 서버 구조와, API에 대한 깊은 이해를 얻게
                  되었습니다. 특히, 데브코스 강의에서 학습한 RESTful API를
                  프로젝트에 직접 적용하고, 코드 리뷰를 통해 개선해 나아가는
                  과정에서 큰 즐거움을 느꼈습니다. <br />
                  프론트와 백엔드의 Vercel로 배포를 담당하게 되면서 마주친
                  라이브러리, 문법, 규칙 관련 문제를 백엔드의 코드를 분석하고,
                  공식문서를 참조하여 해결했습니다. 실제 운영환경의 어려움을
                  체감하였고, 문제 해결 방안을 빠르게 모색하는 방법을
                  익혔습니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  <strong>프로젝트를 통해 배운 점</strong>
                  <br />
                  프로젝트를 전반적으로 관리하면서 github actions로 관리하는
                  CronJob과 같은 기술도 습득하였고, 일정 관리, 소통 문제, 에러
                  처리 능력이 한층 성장했습니다. 프론트와 백엔드의 역할을 명확히
                  이해하고, 각 코드 분석을 통해 파트별 필요한 요청을 파악하는
                  방법을 학습했습니다. 이를 통해 프로젝트를 보다 넓은 시각에서
                  바라볼 수 있게 되었습니다.
                  <br />
                  또한 구현 기술을 선택할때 왜 사용하고, 어떻게 최대한의 효율로
                  활용할 것인지 이해하는 것의 중요성을 깨달았습니다. 개발 시간
                  단축 뿐만 아니라 코드의 가독성을 챙기기 위해 깊게 사고하는
                  방법을 배웠습니다.
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
                  <strong>프로젝트 개요</strong>
                  <br />
                  도서 API를 활용해 다양한 서비스를 개발하고 싶어서
                  진행하였습니다. 알라딘 도서 API를 사용했고, ISBN을 기본키로
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
                  <strong>담당 역할, 세부 구현 기술</strong>
                  <br />
                  백엔드의 swagger를 분석하고 질문 및 소통을 담당했습니다.
                  기획팀의 경우 개발과 협업한 경험이 부족해 제가 리드하였습니다.
                  필요기능에 대해 구현방향을 논의하고, 로직을 파악하고 소통을
                  담당했습니다.
                  <br /> accessToken 을 이용한 로그인 처리를 구현하였습니다.
                  이외에도 프로젝트의 큰 틀의 구성을 담당하였으며 프로젝트의
                  전체적인 데이터를 관리하였습니다.
                  <br />
                  어려웠던 부분은 글쓰기 로직에서 분기 처리가 많았습니다. 이를
                  컴포넌트화 하여 상태관리를 함께 진행해 구현하였으면 좋았을 것
                  같지만, 시간과 실력부족으로 인해 다소 파악하기 복잡한 코드가
                  되었습니다. 첫 협업 장기 프로젝트인만큼 부족한 점과 개선할
                  점에 대해 많이 깨달았습니다. 추후의 성장한 모습을 보일 수
                  있었던, 기반이 되었던 프로젝트 라고 느꼈습니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  <strong>트러블 슈팅</strong>
                  <br />
                  디자인 시스템과 플로우에 따른 설계의 부족함이 있어서 프로젝트
                  진행에 어려움이 발생하였습니다. 이를 통해 MVP 핵심기능을
                  초기에 명확히 설정하고 진행해야 한다는 것을 배우게 되었습니다.
                  <br />
                  또한 새로운 기술 및 라이브러리를 활용하여 적용하려고 할 때
                  기술과 라이브러리의 숙련도가 부족하다는 것을 느꼈습니다.
                  <br />
                  기능을 적용할때 구성과 동작원리를 뜯어보고 작성해야 한다는
                  것을 깨달았습니다. 이러한 문제점을 근본적으로 해결하기
                  위해서는 라이브러리에 대한 의존도를 줄이고 싶다는 생각이
                  들었습니다. 따라서 Carousel 컴포넌트를 라이브러리 없이 직접
                  구현하는 연습을 하였고, 이 과정을 통해 꼭 필요한 라이브러리가
                  아니라면, 한번 더 생각해보는 계기가 되었습니다.
                </p>
                <p className="mb-6 leading-relaxed">
                  <strong>프로젝트를 통해 배운 점</strong>
                  <br />
                  AWS EC2 인스턴스를 통해서 배포하면서 마주친 에러들을 해결하기
                  위해 우분투, 공식문서를 참고하였습니다. 이전에는 공식문서를
                  읽는 것에 두려움과 어려움이 있었는데, 공식문서에 문제상황을
                  해결할 방안이 적혀 있고, 적극활용해야 한다는 것을
                  이해하였습니다.
                  <br /> 팀원들과 처음부터 부딪히며 성장하는 느낌으로 진행하여서
                  도전에 대한 두려움을 이겨낼 수 있었습니다. 프로젝트 초기
                  세팅과 배포를 담당하면서 프로젝트의 구조와 아키텍처,
                  배포규칙에 대해 이해할 수 있었습니다.
                </p>
                <div className="mb-5 border-t-2"></div>
                <div className="flex flex-col items-center justify-around w-full mb-5 text-lg md:flex-row">
                  <p>
                    |
                    <span className="font-bold">
                      {" "}
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
                    |<span className="font-bold"> FrontEnd</span> : React, axios
                    1.6.5, JWT, Redux, Swiper, styled-components prettier
                    <br />|<span className="font-bold"> BackEnd</span> : Java,
                    Gradle, SpringBoot, MySQL, H2 Database, Lombok, Swagger
                    <br />|<span className="font-bold"> Deploy </span>:
                    cloudtype, Github-Actions, VScode, Git, Notion, Slack, Figma
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
          </div>
        </div>
      </section>
    </div>
  );
}
