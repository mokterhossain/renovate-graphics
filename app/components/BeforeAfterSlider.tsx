"use client";

import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import { debounce } from "lodash";


interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImage, afterImage, title }) => {
  const [position, setPosition] = useState(0.5);
    const handlePositionChange = debounce((pos: number) => {
    setPosition(pos);
  }, 10); // Adjust for smoother drag

    return (
        <ReactCompareImage
      leftImage={beforeImage}
      rightImage={afterImage}
      sliderLineColor="#fff"
      sliderLineWidth={2}
      handleSize={40}
      hover={false} // Helps on mobile
    />
    
  );
};

export default BeforeAfterSlider;