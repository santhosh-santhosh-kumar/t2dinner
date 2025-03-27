import React from "react";
import { IoMdTime } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Timeing = () => {
  return (
    <div className="bg-[#eb0029] w-full py-3 flex justify-between px-10 text-lg text-[#fffaff] font-mainFont">
      <div className="flex items-center gap-3">
        <IoMdTime size={25} />
        <p>9.00 am to 9.00 pm</p>
      </div>
      <div className="flex items-center gap-4 font-mainFont">
        <p>Follow Us :</p>
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/mc.vignesh_kumar?igsh=MXgzdHV1NXJmOHJ5dQ%3D%3D" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default Timeing;
