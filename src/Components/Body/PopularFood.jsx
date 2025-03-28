import React from "react";
import { useSelector } from "react-redux";
import { popularFoodData } from "../../Slices/PopularFoodSlice";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PopularFood = () => {
  const popularFoodList = useSelector(popularFoodData);

  return (
    <div className="flex items-center justify-center py-10">
      <div className="font-mainFont relative w-full ">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          speed={1000}
          navigation={{
            nextEl: ".custom-gurus-next",
            prevEl: ".custom-gurus-prev",
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {popularFoodList.map((value, index) => (
            <SwiperSlide key={index} className="flex  rounded-xl justify-center items-center ">
              <div className="flex justify-center  rounded-full  animate-rotate-border">
                <img
                  src={value.img}
                  alt={value.label}
                  className=" object-cover rounded-full"
                />
              </div>
              <div className="text-center mt-4 bg-white py-10 ">
                <p className="font-bold text-xl leading-[2rem]">{value.label}</p>
                <p className="text-lg text-slate-500 leading-[2rem]">{value.price}</p>
                <p className="flex items-center justify-center text-[#dd032e] font-bold text-lg">
                  <MdOutlineCurrencyRupee />
                  <p>{value.fee}</p>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       
      </div>
    </div>
  );
};

export default PopularFood;
