import React from "react";
import { ImLocation2 } from "react-icons/im";


const AddressBar = () => {
  return (
    <div className="py-4 px-32 ">
      <div className="bg-[#fb7919] w-full flex justify-around p-6 rounded-lg py-6">
        <div>
          <p className="flex items-center gap-2">
            <p className="border bg-white text-themeYellow p-2  rounded-full">
            <ImLocation2 />
            </p>
            <div className="text-white  font-mainFont">
            <p>Address</p>
            <p className="text-xl">Main Street,pachamalai,Gobi</p>
            </div>
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2">
            <p className="border bg-white text-themeYellow p-2 rounded-full">
            <ImLocation2 />
            </p>
            <div className="text-white  font-mainFont">
            <p>Address</p>
            <p className="text-xl">Main Street,pachamalai,Gobi</p>
            </div>
          </p>
        </div>
        <div>
          <p className="flex items-center gap-2">
            <p className="border bg-white text-themeYellow p-2 rounded-full">
            <ImLocation2 />
            </p>
            <div className="text-white  font-mainFont">
            <p>Address</p>
            <p className="text-xl">Main Street,pachamalai,Gobi</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressBar;
