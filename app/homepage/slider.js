"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
const cards = [
  {
    img: "/img/heroCrousel/Conference.jpg",
    title: "DELTECH MUN 2024",
  },
  {
    img: "/img/heroCrousel/polaroid.jpg",
    title: "Model United nations conference",
  },
];

const Slider = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center flex-col mb-16">
        <div className="max-w-[100%] relative !mx-10">
          {/* Swiper container */}
          <Swiper
            modules={[FreeMode, Navigation, Pagination, Autoplay]}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 50000,
              stopOnLastSlide: false,
              disableOnInteraction: false,
            }}
            freeMode={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {cards.map((card, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center  ">
                    <div
                      className="flex flex-col justify-center items-center  relative text-white bg-white transform transition-all duration-150
    hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] h-screen w-full overflow-hidden cursor-pointer"
                    >
                      <Image
                        className="blur-sm bg-black fixed "
                        fill={true}
                        priority={true}
                        src={card.img}
                        alt="sponsor"
                      />

                      <div className="relative flex flex-col gap-3 w-full h-full bg-blue-800/40 items-center justify-center">
                        <h1 className=" text-center font-serif  text-white md:text-8xl text-6xl font-bold uppercase pt-8">
                          {card?.title}
                        </h1>
                        {card?.title == "DELTECH MUN 2024" ? (
                          <Link
                            href="https://app.deltechmun.in/"
                            className="pt-10"
                          >
                            <div class="relative group overflow-hidden px-6 h-12 border border-blue-500  rounded-lg flex space-x-2 items-center bg-gradient-to-r from-blue-500/20 to-blue-400 hover:to-blue-200/20">
                              <span class="relative text-3xl font-serif uppercase  text-white">
                                Register
                              </span>
                              <div class="flex items-center -space-x-3 translate-x-3">
                                <div class="w-5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </div>
                            </div>
                          </Link>
                        ) : (
                          <div></div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-button-next m-5  p-8 rounded-full "></div>
          <div className="swiper-button-prev m-5  p-8 rounded-full"></div>
        </div>
      </div>
      {/* <div className="swiper-pagination pt-20"></div> */}
    </div>
  );
};

export default Slider;
