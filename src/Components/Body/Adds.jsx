import React, { useEffect } from "react";
import bgImg from "../../assets/adds/add01.jpg";
import add01 from "../../assets/adds/add2.png";
import add02 from "../../assets/adds/add3.png";
import add03 from "../../assets/adds/add4.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useDispatch } from "react-redux";
import { sendMessage } from "../../Slices/Whatsapp";

const Adds = () => {
  const addsList = [
    {
      id: 1,
      label: "ON THIS MORNING",
      food: "Healthy Breakfast ",
      img: add01,
      bgImage: bgImg,
    },
    {
      id: 2,
      label: "ON THIS AFTERNOOD",
      food: "Vegetarian Burrito Bowl",
      img: add02,
      bgImage: bgImg,
    },
    {
      id: 3,
      label: "ON THIS EVENING",
      food: "Fish and Chips",
      img: add03,
      bgImage: bgImg,
    },
  ];
  const dispatch=useDispatch()
useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false,
          offset: 200,
        });
        AOS.refresh();
      }, []);
  
  return (
    <div className="lg:flex justify-center items-center gap-6  lg:px-20">
      {addsList.map((value) => {
        return (
          <>
            <div
              className="lg:flex-row flex flex-col-reverse lg:items-center  lg:justify-between w-full lg:h-[250px] h-[500px] bg-cover bg-center object-cover px-6 py-4 lg:mt-0 mt-6"
              style={{
                backgroundImage: `url(${value.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="font-mainFont ">
                <p className="mt-1 font-bold text-[#eb0029] text-sm">{value.label}</p>
                <p className="mt-1 font-bold text-white text-2xl">{value.food}</p>
                <p className="mt-1 text-themeYellow font-bold">limits Time Offer</p>
                <div className="flex items-center">
                <div className="cursor-pointer mt-3 flex items-center gap-4  px-4 lg:py-4 py-2 bg-[#eb0029] hover:bg-[#fc7919] transform duration-700 text-white" onClick={()=>dispatch(sendMessage())}>
                  <button>ORDER NOW </button>
                  <p className="text-xl ">
                    <IoIosArrowRoundForward size={25} />
                  </p>
                </div>
                </div>
              </div>
              <div className="lg:w-40 lg:h-40 w-60 h-60 lg:mt-10">
                  <img src={value.img} alt="" className="w-full h-full object-contain"/>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Adds;
