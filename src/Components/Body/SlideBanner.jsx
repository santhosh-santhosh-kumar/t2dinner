import React, { useEffect } from "react";
import bannerbg from "../../assets/sliderbanner/bannerBG.jpg";
import banner01 from "../../assets/sliderbanner/banner01.png";
import banner02 from "../../assets/sliderbanner/banner02.png";
import banner03 from "../../assets/sliderbanner/banner03.png";
import banner04 from "../../assets/sliderbanner/banner04.png";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const SlideBanner = () => {
  const sliderObjects = [
    { id: 1, label: "Morning Delights First Meal of the Day", img: banner01 },
    { id: 2, label: "SPICY FRIED CHICKEN", img: banner02 },
    { id: 3, label: "Evening Meal Evening Spread", img: banner03 },
    { id: 4, label: "End-of-Day Dish Supper Time", img: banner04 },
  ];


  return (
    <div
      className="px-4 w-full lg:h-[600px] bg-cover bg-center object-cover"
      style={{ backgroundImage: `url(${bannerbg})`,backgroundSize: 'cover',backgroundPosition: 'center' }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
        slidesPerView={1}
        loop={true}
        speed={1500}
        autoplay={{
          delay: 3000,
        }}
        navigation={{
          nextEl: ".front-next",
          prevEl: ".front-prev",
        }}
        pagination={{
          clickable: true,
          el: ".front-pagination",
          bulletClass: "front-bullets",
          bulletActiveClass: "front-active-bullets",
        }}
      >
        {sliderObjects.map((value, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="lg:flex text-white items-center font-mainFont lg:pt-32 pt-10">
              <div >
                <p className="text-[#ff7b19] lg:text-2xl text-xl font-extrabold" data-aos-delay="3000">
                  WELCOME T2DINNER
                </p>
                <p className="lg:text-[100px] text-4xl font-bold" data-aos-delay="1000">{value.label}</p>
              </div>
              <div >
                <img src={value.img} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideBanner;
