import React, { useState } from "react";
import { useSelector } from "react-redux";
import { navbarData } from "../../Slices/NavbarDataSlice";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import SlideBar from "./SlideBar";

const NavBar = () => {
  const navbarList = useSelector(navbarData);
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#010f1c] text-[#fffaff] py-10 relative">
      
      <div className="flex items-center justify-between px-10">
        <div className="flex items-center gap-8 text-lg font-mainFont">
          {navbarList.map((value) => {
            return (
              <>
                <p className="cursor-pointer">{value.label}</p>
              </>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <p className="cursor-pointer">
            <IoSearchOutline size={25} className="text-[#4d5b68]" />
          </p>
          <p className="cursor-pointer">
            <FiMenu size={25} className="text-[#4d5b68]" onClick={()=>setShow(true)}/>
          </p>
        </div>
        <div
          className={`fixed top-0 right-0 z-50 h-full w-96 bg-white  transition-transform duration-1000 ease-in-out ${
            show ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <SlideBar show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
