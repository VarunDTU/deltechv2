"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const HeroSection = () => {
  const slides = [
    {
      url: "/img/heroCrousel/hero.png",
      title: " DELTECH MUN'24",
    },
    {
      url: "/img/heroCrousel/polaroid.jpg",
      title: "Model United nations conference",
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
  setTimeout(() => {
    nextSlide();
  }, 20000);
  return (
    <div className="w-[100%] h-[60vh] md:h-screen relative group">
      <Image
        src={slides[currentIndex].url}
        alt="hero"
        fill
        className="w-full absolute h-full bg-center bg-cover duration-500"
      />
      <div className="w-full h-full backdrop-blur-[1px] bg-blue-800/20 flex items-center justify-center font-semibold md:text-7xl sm:text-6xl text-5xl text-white uppercase text-center">
        <div className="w-4/5 font-serif">{slides[currentIndex].title}</div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] md:left-8 left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] md:right-8 right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
