import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import foodIcon from "../../assets/bestfood/titleIcon.svg";
import image1 from "../../assets/bestselling/dish1.jpeg";
import image2 from "../../assets/bestselling/dish2.jpeg";
import image3 from "../../assets/bestselling/dish3.jpeg";
import image4 from "../../assets/bestselling/dish4.jpeg";
import image5 from "../../assets/bestselling/dish5.jpeg";
import image6 from "../../assets/bestselling/dish6.jpeg";
import image7 from "../../assets/bestselling/dish7.jpeg";
import image8 from "../../assets/bestselling/dish8.jpeg";
import image9 from "../../assets/bestselling/dish9.jpeg";
import image10 from "../../assets/bestselling/dish10.jpeg";
import image11 from "../../assets/bestselling/dish11.jpeg";
import image12 from "../../assets/bestselling/dish12.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const BestSelling = () => {
  const sellingImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];
  return (
    <div className="px-10 lg:py-0 py-4">
      <div className="flex justify-center items-center gap-2 w-full text-[#e4812c] font-bold lg:text-xl  font-mainFont">
        <img src={foodIcon} alt="" />
        <p className="font-bold">POPULAR DISHES</p>
        <img src={foodIcon} alt="" />
      </div>
      <div className="flex justify-center items-center w-full lg:text-4xl font-extrabold font-mainFont py-4">
        <p>Best selling Dishes</p>
      </div>
      <div>
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
            },

            1024: {
              slidesPerView: 3,
            },

            1280: {
              slidesPerView: 4,
              spaceBetween: -100,
            },
          }}
        >
          {sellingImages.map((value,index) => (
            <SwiperSlide key={index}
              className="flex gap-6 w-[400px] h-[400px]"
            >
              <div className="lg:px-10 w-[400px] lg:w-[400px] h-[300px] lg:h-[400px] mx-auto ">
                <img
                  src={value}
                  className="w-full h-full  hover:rounded-[100px] transform duration-1000"
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSelling;
