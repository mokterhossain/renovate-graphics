"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const BeforeAfterImageSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // Start at 50% to place handle in the middle
  const containerRef = useRef<HTMLDivElement>(null);
  const [imageAspectRatio, setImageAspectRatio] = useState(16 / 9); // Default aspect ratio

  // Calculate image aspect ratio to set container height dynamically
  useEffect(() => {
    const img = new window.Image();
    img.src = beforeImage;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      setImageAspectRatio(aspectRatio);
    };
  }, [beforeImage]);

  // Handle mouse and touch events for dragging
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDragging = false;

    const updatePosition = (clientX: number) => {
      const rect = container.getBoundingClientRect();
      const offsetX = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
      setSliderPosition(percentage);
    };

    const handleStart = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updatePosition(clientX);
    };

    const handleEnd = () => {
      isDragging = false;
    };

    container.addEventListener("mousedown", handleStart);
    container.addEventListener("touchstart", handleStart);
    container.addEventListener("mousemove", handleMove);
    container.addEventListener("touchmove", handleMove);
    container.addEventListener("mouseup", handleEnd);
    container.addEventListener("touchend", handleEnd);
    container.addEventListener("mouseleave", handleEnd);

    return () => {
      container.removeEventListener("mousedown", handleStart);
      container.removeEventListener("touchstart", handleStart);
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("touchmove", handleMove);
      container.removeEventListener("mouseup", handleEnd);
      container.removeEventListener("touchend", handleEnd);
      container.removeEventListener("mouseleave", handleEnd);
    };
  }, []);

  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-sm">
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ aspectRatio: imageAspectRatio, maxHeight: "80vh" }}
      >
        {/* Before Image (visible on the left) */}
        <Image
          src={beforeImage}
          alt={`${title}`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 50vw"
          priority
        />
        {/* After Image (clipped to reveal from the left) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          <Image
            src={afterImage}
            alt={`${title}`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 50vw"
            priority
          />
        </div>
        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-indigo-900"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-2 border-indigo-900 flex items-center justify-center cursor-grab touch-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <svg
              className="w-4 h-4 text-indigo-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        {/* Range Input (hidden but used for accessibility) */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
          aria-label={`Adjust before/after slider for ${title}`}
        />
      </div>
    </div>
  );
};

export default BeforeAfterImageSlider;