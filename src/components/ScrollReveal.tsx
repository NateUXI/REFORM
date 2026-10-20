"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ScrollReveal({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.scrollRevealed = "true";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    root.dataset.scrollRevealActive = "true";
    root.querySelectorAll<HTMLElement>("[data-scroll-reveal]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} style={{ display: "contents" }}>
      {children}
    </div>
  );
}
