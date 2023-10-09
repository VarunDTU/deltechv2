// "use client";
// import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/effect-coverflow";

// const cards = [
//   "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
// ];

// const Slider = () => {
//   return (
//     <section className="p-10">
//       <div className="xl:mx-auto max-w-6xl mx-[1.5rem]">
//         <Swiper
//           modules={[EffectCoverflow, Pagination, Autoplay]}
//           effect={"coverflow"}
//           loop={true}
//           pagination={{ clickable: true }}
//           grabCursor={true}
//           coverflowEffect={{
//             rotate: 0,
//             slideShadows: false,
//           }}
//           autoplay={{
//             delay: 2000,
//           }}
//           breakpoints={{
//             0: {
//               spaceBetween: 10,
//               slidesPerView: 1,
//             },
//             468: {
//               spaceBetween: 10,
//               slidesPerView: 2,
//             },
//             768: {
//               spaceBetween: 15,
//               slidesPerView: 3,
//             },
//             1024: {
//               spaceBetween: 15,
//               slidesPerView: 4,
//             },
//             1280: {
//               spaceBetween: 30,
//               slidesPerView: 5,
//             },
//           }}
//           className="!pb-12"
//         >
//           {cards.map((p, index) => {
//             return (
//               <SwiperSlide key={index}>
//                 <div className="p-5 border-5">
//                   <img className="" src={p} alt="" />
//                   Hello
//                 </div>
//                 <div>Hello</div>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Slider;

"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

const cards = [
  "https://images.pexels.com/photos/3533228/pexels-photo-3533228.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZ10XcbvoRT-Ly0Xbnr8PyotgAutcgo4SLezA1qjT2LfxQx3WKEViilAw52bFazny_pc&usqp=CAU",
  "https://st2.depositphotos.com/2001755/5408/i/450/depositphotos_54081723-stock-photo-beautiful-nature-landscape.jpg",
];

const Slider = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col h-[600px] bg-coral">
        <div className="max-w-[100%] lg:max-w-[90%] relative">
          {/* Swiper container */}
          <Swiper
            breakpoints={{
              0: {
                spaceBetween: 5,
                slidesPerView: 1,
              },
              670: {
                spaceBetween: 5,
                slidesPerView: 2,
              },
              1022: {
                spaceBetween: 5,
                slidesPerView: 3,
              },
              1280: {
                spaceBetween: 5,
                slidesPerView: 3,
              },
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[FreeMode, Navigation, Pagination]}
          >
            {cards.map((p, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center h-full group">
                    <div
                      className="flex flex-col gap-4 group my-20 relative shadow-lg text-white bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-150 border border-[#C5C5C5] shadow-md 
    hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] px-5 py-8 h-[250px] w-[250px] lg:h-[350px] lg:w-[350px] overflow-hidden cursor-pointer"
                    >
                      <img className="inset-0 h-48 w-40" src={p} />

                      <div className="relative flex flex-col gap-3">
                        <h1 className="text-xl text-center font-serif lg:text-5xl text-black pt-8">
                          Hello
                        </h1>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
      {/* <div className="swiper-pagination pt-20"></div> */}
    </div>
  );
};

export default Slider;
