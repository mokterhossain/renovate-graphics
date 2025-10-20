"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // animate only once
      easing: "ease-in-out", // smooth easing
      offset: 100, // trigger offset
    });
  }, []);

  return <>{children}</>;
}
