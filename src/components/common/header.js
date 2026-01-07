import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import DarkModeToggle from "./dark-mode-toggle";

export default function Header() {
  const router = useRouter();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", id: "about-me", href: "/" },
    { name: "Stack", id: "stack", href: "/" },
    { name: "Activity", id: "activity", href: "/" },
    { name: "Projects", id: "projects", href: "/" },
  ];

  const isHome = router.pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary-400 group-hover:ring-primary-500 transition-all duration-300">
              <Image
                src="/chae-dahee.png"
                alt="chae-dahee"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold text-primary-500">
              Chae Dahee
            </span>
          </Link>

          {/* 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (isHome && item.id) {
                    handleScroll(item.id);
                  } else {
                    router.push(item.href);
                  }
                }}
                className="relative text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Link
              href="/blog"
              className="relative text-neutral-700 dark:text-neutral-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors duration-200 group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* 다크모드 토글 */}
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}
