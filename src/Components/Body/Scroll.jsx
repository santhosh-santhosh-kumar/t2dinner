import React from 'react'

const Scroll = () => {
      const data=[
            {id:1,label:"Idli and Dosa"},
            {id:2,label:"Upma"},
            {id:3,label:"Puri and Aloo"},
            {id:4,label:"Vada and Sambar"},
            {id:5,label:"Egg Bhurji"},
            {id:6,label:"Pongal"},
            {id:7,label:"Bread Pakora"},
            {id:8,label:"Rava Kesari"},
            {id:9,label:"Uttapam"},
            {id:10,label:"Appam"},
      ]
  return (
    <div className='flex space-x-40 animate-scroll-left w-max'>{
      data.map((value)=>{
            return <>
            <div className=''>
                  <p className='text-[100px] font-mainFont font-bold text-[#bcb7b1] uppercase'>{value.label}</p>
            </div>
            </>
      })}</div>
  )
}

export default Scroll