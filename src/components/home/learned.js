import Image from "next/image";
import { useState } from "react";

export default function Learned() {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://chae-dahee.github.io/"
      : "";

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">
        💪 lesson learned - 섬세하고 적극적인 서포터
      </h1>
      <p className="mb-6 leading-relaxed">
        <br />
        이전에는 문제 해결에만 집착하는 사람이었다면, 여러 경험을 통해 근본적인
        부분부터 고민을 시작하는 방법을 배웠습니다.
        <br />
        단순하게가 아닌, 깊이있게 생각해 설계와 로직을 먼저 고려하는 개발자가
        되었습니다. <br />
        협업 과정에서도 넓게 이해할 수 있게 되었습니다.
        <br /> 각 담당자에게 무엇을 요청하고, 어떤 코드를 중점적으로 피드백해야
        할지 이해하게 되었습니다.
        <br /> 어느 곳에서나 적응하고 섬세하게 소통하여 프로젝트의 효율을 이루어
        내었습니다.
        <br /> 환경을 리드하는 사람으로 주도적으로 협업하겠습니다.
      </p>
    </div>
  );
}
