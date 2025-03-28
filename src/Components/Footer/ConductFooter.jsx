import React from "react";
import { MdArrowForward } from "react-icons/md";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../Slices/Whatsapp";

const ConductFooter = () => {
  const dispatch=useDispatch()
  return (
    <div className="font-mainFont text-white lg:pt-0 pt-10">
      <div className="text-white font-semibold">
        <p className="text-3xl">Contact Us</p>
       
      </div>
      <div className="py-4">
        <p className="text-slate-700">
          Monday-Saturday : <span className="text-themeYellow">9am - 9 pm</span>
        </p>
      </div>
      <div className="py-4">
        <div className="cursor-pointer border flex justify-center items-center gap-6 p-2 hover:bg-themeRed" onClick={()=>dispatch(sendMessage())}>
          <p className="">Contact Us</p>
          <p className=" p-2 ">
            <MdArrowForward />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConductFooter;
