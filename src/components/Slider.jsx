import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Frame10 from "../images/Frame10.png";
import Frame11 from "../images/Frame11.png";
import Frame12 from "../images/Frame12.png";
import Frame13 from "../images/Frame13.png";
import Frame14 from "../images/Frame14.png";
import Frame15 from "../images/Frame15.png";
import Frame16 from "../images/Frame16.png";

function Slider() {
  const slides = [
    {
      url: Frame10,
      title: "Dry cleaning",
    },
    {
      url: Frame11,
      title: "Wash and fold",
    },
    {
      url: Frame12,
      title: "Ironing",
    },

    {
      url: Frame13,
      title: "Stain removal/treatment",
    },
    {
      url: Frame14,
      title: "Office cleaning",
    },
    {
      url: Frame15,
      title: "After party clean-up",
    },
    {
      url: Frame16,
      title: "Suit laundry and treatment",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="mx-4 relative group mb-8">
      <div
        className="p-4 bg-white rounded-lg border border-gray2"
        style={{ width: "350px", height: "330px" }}
      >
        <img src={slides[currentIndex].url} alt="" />
        <p className="text-base py-2 text-gray-800 font-nexa">
          {slides[currentIndex].title}
        </p>
      </div>
      {/* Left Arrow */}
      {/* <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-14 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow 
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-60 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div> */}
      <div className="flex top-4 justify-start py-2 px-8">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled color="#6838FE" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
