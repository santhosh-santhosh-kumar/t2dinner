import React from "react";
import { useSelector } from "react-redux";
import { popularFoodData } from "../../Slices/PopularFoodSlice";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const PopularFood = () => {
  const popularFoodList = useSelector(popularFoodData);

  return (
    <div>
      <div className="flex items-cente justify-center gap-8">
        {popularFoodList.map((value) => {
          return (
            <>
              <div className="bg-white p-10 font-mainFont rounded-xl relative">
                <div className="relative ">
                  <div className=" border-dashed border-2 border-[#dd032e] rounded-full p-20 animate-rotate-border"></div>
                  <div className="w-40 h-40 overflow-hidden absolute inset-0 left-1 top-0 rounded-full">
                    <img
                      src={value.img}
                      alt={value.label}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-bold text-xl leading-[2rem]">
                    {value.label}
                  </p>
                  <p className="text-lg text-slate-500 leading-[2rem]">
                    {value.price}
                  </p>
                  <p className="flex items-center justify-center text-[#dd032e] font-bold text-lg">
                    <MdOutlineCurrencyRupee />
                    <p>{value.fee}</p>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PopularFood;
