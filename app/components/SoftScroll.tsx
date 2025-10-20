"use client";

import { useEffect } from "react";

export default function SoftScroll() {
  useEffect(() => {
    let currentPos = window.scrollY;
    let targetPos = 0;
    let ticking = false;

    const smoothScroll = () => {
      targetPos = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = targetPos - currentPos;
          currentPos += delta * 0.8; // adjust speed (0.1 = smooth)
          window.scrollTo(0, currentPos);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", smoothScroll);
    return () => window.removeEventListener("scroll", smoothScroll);
  }, []);

  return null;
}
