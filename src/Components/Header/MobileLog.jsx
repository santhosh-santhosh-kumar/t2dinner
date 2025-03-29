import React, { useState } from "react";
import logoImage from "../../assets/logo/05.png";
import NavBar from "./NavBar";
import Timeing from "./Timeing";
import MobileNavbar from "./MobileNavbar";
import { FiMenu } from "react-icons/fi";

const MobileLog = () => {
      const [show,setShow]=useState(false)
  return (
    <>
      <div className="flex justify-between items-center  px-4 bg-white">
        <div className=" lg:w-80 lg:h-40 w-60 h-24 ">
          <img src={logoImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="lg:hidden" onClick={()=>setShow(true)}>
          <FiMenu size={25} className={`${show ? "hidden" : "block"} text-[#4d5b68]`} />
        </div>
        <div className={`fixed top-0 left-24 z-50 h-full w-96 bg-white  transition-transform duration-1000 ease-in-out ${
        show ? 'translate-x-0' : 'translate-x-full'
      }`}>
          <MobileNavbar show={show} setShow={setShow} />
        </div>
      </div>
      <Timeing />
    </>
  );
};

export default MobileLog;
