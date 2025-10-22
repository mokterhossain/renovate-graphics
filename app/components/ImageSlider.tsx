"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Define the shape of a slide object for TypeScript (optional but recommended)
interface Slide {
  id: number;
  image: string;
  mobileImage?: string; // Optional, in case some slides don't have a mobile image
}

// Define the props for the HeroSlider component
interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust threshold as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]); // Add slides.length as dependency to handle dynamic slide arrays

  return (
    <section className="relative w-full overflow-hidden px-2 sm:px-4 lg:px-3 xl:px-5">
      <div className="relative w-full aspect-[7/2] min-h-[200px] max-h-[450px] mx-auto mt-20 sm:mt-20 md:mt-20 lg:mt-20 rounded-lg shadow-md overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={isMobile && slide.mobileImage ? slide.mobileImage : slide.image}
              alt={`Slide ${slide.id}`}
              fill
              priority={i === 0}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1340px"
              className="object-cover object-center"
            />
          </div>
        ))}
        {/* Pagination Dots */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#00A0E3] scale-125" : "bg-white/70 hover:bg-white/90"
              } touch-area`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}