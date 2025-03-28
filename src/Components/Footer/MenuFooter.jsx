import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const MenuFooter = () => {
  const menu = [
    { id: 1, label: "Fresh Food" },
    { id: 2, label: "Tiffen Items" },
    { id: 3, label: "Tea and Snacks" },
    { id: 4, label: "Meals" },
    { id: 5, label: "Vegetables" },
  ];
  return (
    <div className="text-white font-semibold font-mainFont lg:pt-0 pt-10">
      <div>
        <p className="text-3xl">Our Menu</p>
        
      </div>
      <div>
        {menu.map((value) => {
          return (
            <>
              <p className="flex items-center py-2 text-lg">
                <p>
                  <MdKeyboardDoubleArrowRight />
                </p>
                <p>{value.label}</p>
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MenuFooter;
