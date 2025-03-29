import React from 'react'
import foodIcon from "../../assets/bestfood/titleIcon.svg"
import chef01 from "../../assets/chef/chef01.png"
import chef02 from "../../assets/chef/chef02.png"
import chef03 from "../../assets/chef/chef03.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

const MobileMeetChef = () => {
      const chef=[
            {id:1,name:"Vignesh kumar",job:"Chef Lead",img:chef01},
            {id:2,name:"Vignesh kumar",job:"Chef Assistant",img:chef02},
            {id:3,name:"Vignesh kumar",job:"Chef Assistant",img:chef03},
      ]
  return (
    <div className='bg-[#f4f1ea] font-mainFont  py-20 '>
          <div className='flex justify-center items-center gap-2 w-full text-[#e4812c] font-bold text-xl  font-mainFont'>
                   <img src={foodIcon} alt="" />
                   <p>OUR CHEFE</p>
                   <img src={foodIcon} alt="" />
             </div>
             <div className='flex justify-center items-center w-full text-4xl font-extrabold font-mainFont py-4'>
                   <p>Meet Our Expert Chefe</p>
             </div>
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
           
                  {chef.map((value,index)=>{
                        return <>
                        <SwiperSlide key={index} className="w-full h-full mt-8">
                        <div className='relative '>
                        <div className='absolute top-0 w-full flex justify-center'>
                              <div className='flex justify-center w-40 h-40'>
                                    <img src={value.img} alt="" />
                                    </div>
                              </div>
                              <div className=''>
                              <div className='  p-4 w-full flex justify-center font-mainFont text-center  rounded-lg'>
                                    <div className='mt-20 bg-white px-20 pt-24 pb-4 rounded-t-[20px]'>
                                    <p className='text-xl '>{value.name}</p>
                                    <p className='text-md text-slate-700 '>{value.job}</p>
                                    </div>
                              </div>
                              </div>
                        </div>
                        </SwiperSlide>
                        </>
                  })}
          </Swiper>
    </div>
  )
}


export default MobileMeetChef