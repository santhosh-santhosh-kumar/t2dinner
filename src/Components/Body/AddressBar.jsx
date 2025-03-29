import React from "react";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";

import { FaPhone } from "react-icons/fa6";


const AddressBar = () => {
  return (
    <div className="py-4 lg:px-32 px-2">
      <div className="bg-[#fb7919] w-full lg:flex flex-wrap justify-around lg:p-6 px-4  rounded-lg py-10">
        <div className="py-6">
          <p className="flex items-center gap-3">
            <p className="border bg-white text-themeYellow p-2  rounded-full">
            <ImLocation2 />
            </p>
            <div className="text-white  font-mainFont">
            <p>Address</p>
            <p className="text-xl">Main Street,pachamalai,Gobi</p>
            </div>
          </p>
        </div>
        <div className="py-6">
          <p className="flex items-center gap-3">
            <p className="border bg-white text-themeYellow p-2 rounded-full">
            <MdEmail />


            </p>
            <div className="text-white  font-mainFont">
            <p>Send Email</p>
            <p className="text-xl">t2dinner@gmail.com</p>
            </div>
          </p>
        </div>
        <div className="py-6">
          <p className="flex items-center gap-3">
            <p className="border bg-white text-themeYellow p-2 rounded-full">
            <FaPhone />

            </p>
            <div className="text-white  font-mainFont">
            <p>Call Emergency</p>
            <p className="text-xl">95 66 66 5194</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressBar;
