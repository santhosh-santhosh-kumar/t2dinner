import React from 'react'
import foodIcon from "../../assets/bestfood/titleIcon.svg"
import PopularFood from './PopularFood'

const BestFood = () => {
  return (
    <div className='bg-[#f4f1ea] pt-10'>
      <div className='flex justify-center items-center gap-2 w-full text-[#e4812c] font-bold text-xl  font-mainFont'>
            <img src={foodIcon} alt="" />
            <p>BEST FOOD</p>
            <img src={foodIcon} alt="" />
      </div>
      <div className='flex justify-center items-center w-full text-4xl font-extrabold font-mainFont py-4'>
            <p>Popular Food Items</p>
      </div>
      <div className='px-20 py-10'>
            <PopularFood />
      </div>
    </div>
  )
}

export default BestFood