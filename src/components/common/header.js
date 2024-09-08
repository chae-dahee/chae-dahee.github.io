import Image from "next/image";
export default function Header() {
  return (
    <>
      <header className="text-gray-800 body-font bg-[#B0AFA6]">
        <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <Image
              src="/chae-dahee.png"
              alt="chae-dahee"
              width={50}
              height={50}
            />
            <span className="ml-3 text-xl">Chae Dahee</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">Projects</a>
            <a className="mr-5 hover:text-gray-900">Contact</a>
          </nav>
          <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
