import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navbarData } from "../../Slices/NavbarDataSlice";
import logoImg from "../../assets/logo/05.png";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { sendMessage } from "../../Slices/Whatsapp";
import image01 from "../../assets/slidebar/01.jpg"
import image02 from "../../assets/slidebar/02.jpg"
import image03 from "../../assets/slidebar/03.jpg"
import image04 from "../../assets/slidebar/04.jpg"
import image05 from "../../assets/slidebar/05.jpg"
import image06 from "../../assets/slidebar/06.jpg"

const SlideBar = ({ show, setShow }) => {
  const navbarList = useSelector(navbarData);
  const dispatch=useDispatch()
  const images=[image01,
      image02,
      image03,
      image04,
      image05,
      image06,]
  return (
    <div className="h-full bg-white ">
      <div className=" flex  items-center justify-between  px-4 py-4">
        <div className="w-32">
          <img src={logoImg} alt="" className="object-cover" />
        </div>
        <div
          className="border bg-[#eb0029] rounded-full text-white p-2"
          onClick={() => setShow(false)}
        >
          <FaXmark />
        </div>
      </div>
      <div>
        <p className="text-slate-600 font-mainFont text-lg text-left px-4">
          This involves interactions between a business and its customers. It's
          about meeting customers' needs and resolving their problems. Effective
          customer service is crucial.
        </p>
      </div>
      <div className="px-4 grid grid-cols-3 gap-6 mt-6 overflow-y-auto max-h-[calc(100vh-150px)]">
        {images.map((value) => {
          return (
            <>
             <div className="">
                  <img src={value} alt="" className="w-full h-full object-cover rounded-lg"/>
             </div>
            </>
          );
        })}
      </div>
      <div className="px-4 py-3">
        <div className="font-mainFont text-xl font-semibold">
          <p>Contact Info</p>
        </div>
        <div>
          <div className="flex items-center gap-2 py-4">
            <p className="text-[#dd032e] text-lg">
              <MdOutlineLocationOn />
            </p>
            <p className="text-slate-600 font-semibold">
              <p>Main Street,Pachamalai</p>
              <p>Gobi</p>
            </p>
          </div>
          <div className="flex items-center gap-2 py-4">
            <p className="text-[#dd032e] text-lg">
              <CiMail />
            </p>
            <p className="text-slate-600 font-semibold">
            <a href="mailto:Vicky@t2dinner.com"><p>Vicky@t2dinner.com</p></a>
            </p>
          </div>
          <div className="flex items-center gap-2 py-4">
            <p className="text-[#dd032e] text-lg">
            <IoTimeOutline />
            </p>
            <p className="text-slate-600 font-semibold">
              <p>Mon-Saturday, 09am - 09pm</p>
            </p>
          </div>
          <div className="flex items-center gap-2 py-4">
            <p className="text-[#dd032e] text-lg">
            <FiPhone />
            </p>
            <p className="text-slate-600 font-semibold">
            <a href="tel:+919566665194"><p>+91 95 66 66 5194</p></a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center px-4 w-full">
            <p className="border flex justify-center items-center gap-3 text-white px-6 py-4 bg-[#eb0029]" onClick={()=>dispatch(sendMessage())}>
                  <p><PiShoppingCartBold /></p>
                  <p>ORDER NOW</p>
            </p>
      </div>
            <div className="flex items-center gap-4 font-mainFont lg:mt-0 py-4 px-4">
              <a href="https://www.facebook.com/" target="_blank" className="border border-slate-600 p-3 text-xl rounded-full text-slate-600">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/mc.vignesh_kumar?igsh=MXgzdHV1NXJmOHJ5dQ%3D%3D" target="_blank" className="border border-slate-600 p-3 text-xl rounded-full text-slate-600">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/" target="_blank" className="border border-slate-600 p-3 text-xl rounded-full text-slate-600">
                <FaYoutube />
              </a>
            </div>
      
    </div>
  );
};



export default SlideBar