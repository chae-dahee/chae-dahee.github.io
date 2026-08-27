"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const SPINNER_DELAY_MS = 200;

export default function PostLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [pending, setPending] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const pathname = usePathname();

  useEffect(() => {
    clearTimeout(timerRef.current);
    setPending(false);
  }, [pathname]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <>
      <Link
        href={href}
        className={className}
        onClick={(e) => {
          // 수식 키 조합은 새 탭·새 창으로 열려 현재 화면이 그대로 남는다.
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

          clearTimeout(timerRef.current);
          setPending(false);

          if (href === pathname) return;

          timerRef.current = setTimeout(() => setPending(true), SPINNER_DELAY_MS);
        }}
      >
        {children}
      </Link>

      {pending && (
        <div
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]/70 backdrop-blur-sm"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-[var(--color-surface)] border border-[var(--color-muted)]">
            <span className="terminal-spinner text-2xl" aria-hidden="true" />
            <span className="sr-only">페이지를 불러오는 중입니다</span>
          </div>
        </div>
      )}
    </>
  );
}
