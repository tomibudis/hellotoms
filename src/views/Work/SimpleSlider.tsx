import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const SLIDER_CONFIG = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
interface SimpleSliderProps {
  images: string[];
}
const SimpleSlider: React.FC<SimpleSliderProps> = ({ images }) => {
  return (
    <div className="slider-container w-[80%] d-flex justify-center">
      <Slider {...SLIDER_CONFIG}>
        {images?.map((imageLink, idx) => (
          <div key={idx}>
            <Image
              src={imageLink}
              alt={`${imageLink}-${idx}`}
              width={429}
              height={244}
              quality={100}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
