import React, { useEffect } from "react";
import bannerbg from "../../assets/sliderbanner/bannerBG.jpg";
import banner01 from "../../assets/sliderbanner/banner01.png";
import banner02 from "../../assets/sliderbanner/banner02.png";
import banner03 from "../../assets/sliderbanner/banner06.png";
import banner04 from "../../assets/sliderbanner/banner04.png";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../Slices/Whatsapp";


const SlideBanner = () => {
  const sliderObjects = [
    { id: 1, label: "First Meal of the Day", img: banner01 },
    { id: 2, label: "SPICY FRIED CHICKEN", img: banner02 },
    { id: 3, label: "Evening Meal Supper Time", img: banner03 },
    { id: 4, label: "End-of-Day Dish Supper Time", img: banner04 },
  ];
  const dispatch=useDispatch()
  useEffect(() => {
      AOS.init({
        duration: 2000, 
        once: true, 
      });
    }, []);

    const handleClick = ()=>{
      dispatch(sendMessage())
    }
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
            <div className="lg:flex text-white items-center font-mainFont lg:pt-10 pt-10">
              <div >
                <p className="text-[#ff7b19] lg:text-2xl text-xl font-extrabold" data-aos-delay="3000">
                  WELCOME T2DINNER
                </p>
                <p className="leading-none text-[50px] lg:text-[100px] py-2 font-bold" data-aos-delay="1000" style={{ animation: 'bounce 3s infinite' }}>{value.label}</p>
                <div className="flex items-center mt-10">
                  <div className="cursor-pointer flex items-center gap-4  px-4 lg:py-4 py-3 bg-[#eb0029] hover:bg-[#fc7919] transform duration-700">
                  <button onClick={handleClick} >ORDER NOW </button>
                  <p className="text-xl bg-white text-slate-500"><IoIosArrowRoundForward  size={25}/></p>
                  </div>
                </div>
              </div>
              <div >
                <img src={value.img} alt="" style={{ animation: 'bounce 3s infinite' }}/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideBanner;
