import React, { useEffect } from "react";
import bannerImage from "../../assets/bodybanner/banner.jpg";
import foodIcon from "../../assets/bestfood/titleIcon.svg";
import add01 from "../../assets/bodybanner/add02.png";
import add02 from "../../assets/bodybanner/add03.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useDispatch } from "react-redux";
import { sendMessage } from "../../Slices/Whatsapp";

const BodyBanner = () => {
  const dispatch=useDispatch()
  useEffect(() => {
          AOS.init({
            duration: 5000, 
            once: false,
            offset: 200,
          });
          AOS.refresh();
        }, []);
  return (
    <div>
      <div className="relative font-mainFont">
        <img src={bannerImage} alt="" />
        <div className="absolute inset-0 lg:top-16 top-0 px-8">
          <div className="flex justify-around items-center">
            <div className="w-72 h-72 lg:block hidden animate-rotate-border" >
              <img
                src={add01}
                alt=""
                className="w-full h-full object-contain"
                data-aos="fade-right"
              />
            </div>
            <div className="text-center lg:w-[700px]">
              <div className="flex justify-center items-center gap-2 w-full text-[#e4812c] font-bold lg:text-xl  font-mainFont">
                <img src={foodIcon} alt="" />
                <p className="font-bold">ABOUT US</p>
                <img src={foodIcon} alt="" />
              </div>
              <p className="lg:text-[50px] font-bold text-center leading-none mt-4 lg:px-0 px-20">
                Variety of flavours from Indian cuisine
              </p>
              <p className="text-slate-700 mt-4 text-lg lg:block hidden">
                It is a long established fact that a reader will be distracted
                the readable content of a page when looking at layout the point
                established fact that
              </p>
              <div className="lg:flex hidden justify-center mt-10 items-center ">
                <div className="cursor-pointer flex items-center gap-4  px-4 lg:py-4 py-3 bg-[#eb0029] hover:bg-[#fc7919] transform duration-700" onClick={()=>dispatch(sendMessage())}>
                  <button>ORDER NOW </button>
                  <p className="text-xl bg-white text-slate-500">
                    <IoIosArrowRoundForward size={25} />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-72 h-72 lg:block hidden animate-rotate-border">
              <img
                src={add02}
                alt=""
                className="w-full h-full object-contain"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyBanner;
