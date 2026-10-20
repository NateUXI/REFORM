"use client";

import { useEffect, useRef, useState } from "react";
import { slides } from "@/lib/assets";
import styles from "./DesktopCarousel.module.css";

const AUTOPLAY_MS = 4500;
const SWIPE_PX = 40;

const mod = (n: number, m: number) => ((n % m) + m) % m;

/**
 * Looping slide carousel: the active slide is centred, its neighbours peek in
 * dimmed and blurred. Advances on its own (paused on hover/focus and when the
 * visitor prefers reduced motion) and responds to arrow keys, clicks on a
 * neighbouring slide, and swipes.
 *
 * Sizes use container-query units (cqw), so the layout is correct on first
 * paint without measuring anything in JavaScript.
 */
export default function DesktopCarousel() {
  const count = slides.length;
  const half = Math.floor(count / 2);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const previous = useRef(0);
  const swipeStartX = useRef<number | null>(null);
  const justSwiped = useRef(false);

  // Remembers the slide that was active before the latest change, so a slide
  // wrapping around the loop can jump to its new spot instead of sliding
  // across the stage in front of the others.
  useEffect(() => {
    previous.current = active;
  }, [active]);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => mod(i + 1, count)), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, active, count]);

  const go = (to: number) => setActive(mod(to, count));

  return (
    <div
      className="framer-nld6ba-container"
      data-framer-name="Responsive Desktop Presentation"
      data-scroll-reveal
    >
      <div
        className={styles.carousel}
        role="group"
        aria-roledescription="carousel"
        aria-label="Responsive presentation carousel"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(active + 1);
          if (event.key === "ArrowLeft") go(active - 1);
        }}
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onPointerDown={(event) => {
          swipeStartX.current = event.clientX;
        }}
        onPointerUp={(event) => {
          const start = swipeStartX.current;
          swipeStartX.current = null;
          if (start === null) return;
          const dx = event.clientX - start;
          if (Math.abs(dx) >= SWIPE_PX) {
            justSwiped.current = true;
            go(active + (dx < 0 ? 1 : -1));
          }
        }}
        onPointerCancel={() => {
          swipeStartX.current = null;
        }}
      >
        <div className={styles.stage}>
          {slides.map((slide, index) => {
            const offset = mod(index - active + half, count) - half;
            const previousOffset = mod(index - previous.current + half, count) - half;
            const wrapped = Math.abs(offset - previousOffset) > 1;

            return (
              <div
                key={slide.src}
                className={`${styles.slide} ${offset === 0 ? styles.active : ""}`}
                style={{ "--offset": offset, transition: wrapped ? "none" : undefined }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                aria-hidden={offset !== 0}
                onClick={() => {
                  if (justSwiped.current) {
                    justSwiped.current = false;
                    return;
                  }
                  if (offset !== 0) go(index);
                }}
              >
                <img src={slide.src} alt={slide.alt} draggable={false} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
