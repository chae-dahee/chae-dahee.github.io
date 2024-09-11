import Image from "next/image";

export default function Project() {
  const prefix =
    process.env.NODE_ENV === "production"
      ? "https://chae-dahee.github.io/"
      : "";

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center ">👀 Activity</h1>
      <section className="text-gray-800 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col flex-wrap -m-4">
            <div className="w-full p-4 md:w-full">
              <div className="h-full p-8 bg-gray-100 rounded-xl">
                <h1 className="mb-5 text-2xl font-bold text-center">
                  Sync Spot 중간지점 찾기 프로젝트
                </h1>
                <p className="mb-6 leading-relaxed">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie s microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
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
                  Show Mailer 문화알림
                </h1>
                <p className="mb-6 leading-relaxed">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie s microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
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
            <div className="w-full p-4 md:w-full">
              <div className="h-full p-8 bg-gray-100 rounded-xl">
                <h1 className="mb-5 text-2xl font-bold text-center">
                MyGoopPrice 위치 기반 주면의 착한 가게를 검색하고, 소비자
                관점에서 나만의 소비 패턴을 분석하는 기능을 구현하였음.
                </h1>
                <p className="mb-6 leading-relaxed">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie s microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
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
            <div className="w-full p-4 md:w-full">
              <div className="h-full p-8 bg-gray-100 rounded-xl">
                <h1 className="mb-5 text-2xl font-bold text-center">
                 북킷리스트
                </h1>
                <p className="mb-6 leading-relaxed">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie s microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
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
            <div className="w-full p-4 md:w-full">
              <div className="h-full p-8 bg-gray-100 rounded-xl">
                <h1 className="mb-5 text-2xl font-bold text-center">
                  어푸 우수상
                </h1>
                <p className="mb-6 leading-relaxed">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie s microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
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
            <div className="w-full p-4 md:w-full">
              <div className="h-full p-8 bg-gray-100 rounded-xl">
                <h1 className="mb-5 text-2xl font-bold text-center">
                  nodejs, typescript - bookshop
                </h1>
                <p className="mb-6 leading-relaxed">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie s microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
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
