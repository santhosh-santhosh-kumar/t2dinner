import React from 'react'

const CopyRight = () => {
  const currentYear = new Date().getFullYear(); 
  return (
   <div className='bg-themeRed  text-white font-mainFont lg:flex justify-between py-4 px-10'>
       <div className='lg:py-0 py-2'>
      © All Copyright {currentYear} by T2Dinner
    </div>
    <div className='lg:flex items-center gap-2'>
      <p>Design And Developed by :</p>
      <p className='text-themeYellow'>Santhosh : 93 6 111 6 112</p></div>
   </div>
  )
}

export default CopyRight