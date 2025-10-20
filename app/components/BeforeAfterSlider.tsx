"use client";

import ReactCompareImage from "react-compare-image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, title }) => {
  return (
    <div className="relative w-full rounded-lg overflow-hidden shadow-sm">
      <ReactCompareImage
        leftImage={beforeImage}
        rightImage={afterImage}
        leftImageAlt={`Before ${title}`}
        rightImageAlt={`After ${title}`}
        sliderLineWidth={2}
        sliderLineColor="#1e3a8a" // Deep blue for elegance
        handleSize={40}
        aspectRatio="wider"
      />
    </div>
  );
};

export default BeforeAfterSlider;