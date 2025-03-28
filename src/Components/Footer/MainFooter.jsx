import React from "react";
import footerLogo from "../../assets/logo/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const MainFooter = () => {
  return (
    <div className="">
      <div>
        <div className="w-40 h-24">
          <img
            src={footerLogo}
            alt="footer image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-white  font-semibold">
          <p className="text-xl">Vignesh kumar</p>
          <p>Main Street,pachamalai,Gobi</p>
          <p>95 66 66 5194</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <p className="border p-2 text-xl text-white hover:bg-themeYellow">
            <FaFacebookF />
          </p>
          <p className="border p-2 text-xl text-white hover:bg-themeYellow">
            <FaInstagram />
          </p>
          <p className="border p-2 text-xl text-white hover:bg-themeYellow">
            <MdOutlineEmail />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
