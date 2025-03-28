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

const MobileNavbar = ({ show, setShow }) => {
  const navbarList = useSelector(navbarData);
  const dispatch=useDispatch()
  return (
    <div className="">
      <div className=" flex  items-center  gap-10 px-10 py-4">
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
      <div className="px-4">
        {navbarList.map((value) => {
          return (
            <>
              <p className="font-mainFont text-md font-semibold">
                {value.label}
              </p>
              <hr className="my-3 bg-black"></hr>
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

export default MobileNavbar;
