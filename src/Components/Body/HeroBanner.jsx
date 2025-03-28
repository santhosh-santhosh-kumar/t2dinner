import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 

import banner1 from "../../assets/herobanner/01.jpg";
import banner2 from "../../assets/herobanner/02.jpg";
import banner3 from "../../assets/herobanner/03.jpg";

import { useSelector } from "react-redux";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const HeroBanner = () => {
      const bannerImgs = [banner1, banner2, banner3];

   

    return (
        <>
                <section className="w-full h-full relative overflow-hidden group">
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
                        {bannerImgs.map((value,index) => (
                            <SwiperSlide key={index} className="w-full h-full">
                                <img src={value} alt="Banner Image"  className="w-full h-full object-cover" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* <div className="w-full h-full front-pagination flex items-center justify-center gap-2 py-3"></div>
                    <div className="cursor-pointer h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 absolute z-10 right-5 top-1/2 front-next text-white text-3xl">
                        <RiArrowRightWideLine />
                    </div>
                    <div className="cursor-pointer h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 absolute z-10 left-5 top-1/2 front-prev text-white text-3xl">
                        <RiArrowLeftWideLine />
                    </div> */}
                </section>
            
        </>
    );
};

export default HeroBanner;
