"use client";

import { useEffect, useRef, useState } from "react";
import BackgroundImage from "./BackgroundImage";
import { images } from "@/lib/assets";

/**
 * The "From a mountain top to your studio" picture. It starts on the mountain
 * and cross-fades to the studio photo when its midpoint reaches the middle of
 * the viewport.
 * (The fade itself is styled in globals.css via `data-revealed`.)
 */
export default function MountainToStudioScene() {
  const ref = useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="framer-bkvrnn"
      data-framer-name="Mountain to Studio Scene"
      data-scroll-reveal
    >
      <BackgroundImage image={images.mountain} lazy />
      <div className="framer-1x2vofi" data-framer-name="Studio Background" data-revealed={revealed}>
        <BackgroundImage image={images.studio} lazy />
      </div>
      <div className="framer-eono7b" data-framer-name="Scene Shade" />
      <div className="framer-1uasw80" data-framer-name="Board Preview">
        <div className="framer-1uqnxu0" data-framer-name="Scene Login Phone">
          <BackgroundImage image={images.loginPhone} />
        </div>
      </div>
      <span
        ref={ref}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 1,
          height: 1,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
