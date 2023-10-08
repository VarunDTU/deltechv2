"use client";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

const cards = [
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const Slider = () => {
  return (
    <section className="p-10">
      <div className="xl:mx-auto max-w-6xl mx-[1.5rem]">
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect={"coverflow"}
          loop={true}
          pagination={{ clickable: true }}
          grabCursor={true}
          coverflowEffect={{
            rotate: 0,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            0: {
              spaceBetween: 10,
              slidesPerView: 1,
            },
            468: {
              spaceBetween: 10,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 15,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 15,
              slidesPerView: 4,
            },
            1280: {
              spaceBetween: 30,
              slidesPerView: 5,
            },
          }}
          className="!pb-12"
        >
          {cards.map((p, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="p-5 border-2">
                  <img className="" src={p} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
