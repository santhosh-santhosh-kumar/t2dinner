import React from 'react'
import foodIcon from "../../assets/bestfood/titleIcon.svg"
import PopularFood from './PopularFood'
import free01 from "../../assets/free/free03.png"
import free02 from "../../assets/free/free04.png"

const BestFood = () => {
  return (
    <div className='bg-[#f4f1ea] pt-10'>
      <div className='flex justify-center items-center gap-2 w-full text-[#e4812c] font-bold text-xl  font-mainFont'>
            <img src={foodIcon} alt="" />
            <p>BEST FOOD</p>
            <img src={foodIcon} alt="" />
      </div>
      <div className='flex justify-between items-center w-full text-4xl font-extrabold font-mainFont py-4'>
            <div><img src={free01} alt="" style={{ animation: 'topBounce 3s infinite' }} /></div>
            <p className='lg:text-4xl text-lg'>Popular Food Items</p>
            <div><img src={free02} alt="" style={{ animation: 'bounce 3s infinite' }}/></div>
      </div>
      <div className='px-20 py-10'>
            <PopularFood />
      </div>
    </div>
  )
}

export default BestFood