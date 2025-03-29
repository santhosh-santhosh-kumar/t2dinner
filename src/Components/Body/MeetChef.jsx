import React from 'react'
import foodIcon from "../../assets/bestfood/titleIcon.svg"
import chef01 from "../../assets/chef/chef01.png"
import chef02 from "../../assets/chef/chef02.png"
import chef03 from "../../assets/chef/chef03.png"

const MeetChef = () => {
      const chef=[
            {id:1,name:"Vignesh kumar",job:"Chef Lead",img:chef01},
            {id:2,name:"Vignesh kumar",job:"Chef Assistant",img:chef02},
            {id:3,name:"Vignesh kumar",job:"Chef Assistant",img:chef03},
      ]
  return (
    <div className='bg-[#f4f1ea] font-mainFont px-10 py-20 lg:block hidden'>
          <div className='flex justify-center items-center gap-2 w-full text-[#e4812c] font-bold text-xl  font-mainFont'>
                   <img src={foodIcon} alt="" />
                   <p>OUR CHEFE</p>
                   <img src={foodIcon} alt="" />
             </div>
             <div className='flex justify-center items-center w-full text-4xl font-extrabold font-mainFont py-4'>
                   <p>Meet Our Expert Chefe</p>
             </div>
             <div className='flex gap-3 justify-between mt-6'>
                  {chef.map((value)=>{
                        return <>
                        <div className='relative'>
                        <div className='absolute top-0 w-96'>
                              <div className='flex justify-center '>
                                    <img src={value.img} alt="" />
                                    </div>
                              </div>
                              <div className=''>
                              <div className='bg-white p-4 w-96 flex justify-center font-mainFont text-center pt-32 mt-52 rounded-lg'>
                                    <div className=''>
                                    <p className='text-xl '>{value.name}</p>
                                    <p className='text-md text-slate-700 '>{value.job}</p>
                                    </div>
                              </div>
                              </div>
                        </div>
                        </>
                  })}
             </div>
    </div>
  )
}

export default MeetChef