import React from 'react'
import bannerbg from "../../assets/sliderbanner/bannerBG.jpg"
import banner01 from "../../assets/sliderbanner/banner01.png"

const SlideBanner = () => {
  return (
    <div className="px-4 w-full lg:h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${bannerbg})` }}>
      <div className='lg:flex text-white items-center font-mainFont pt-20'>
            <div>
                  <p className='text-[#ff7b19] text-2xl font-extrabold'>WELCOME T2DINNER</p>
                  <p className='text-[100px] font-bold'>SPICY FRIED CHICKEN</p>
            </div>
            <div>
                  <img src={banner01} alt="" />
            </div>
      </div>
    </div>
  )
}

export default SlideBanner