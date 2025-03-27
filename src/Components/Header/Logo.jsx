import React from 'react'
import logoImage from "../../assets/logo/logo.png"
import NavBar from './NavBar'
import Timeing from './Timeing'

const Logo = () => {
  return (
    <>
    <div className='flex  w-full'>
    <div className='bg-black w-80 h-40'>
      <img src={logoImage} alt="" className='w-full h-full object-cover' />
    </div>
    <div className='w-full'>
      <div>
      <Timeing />
      </div>
      <div>
      <NavBar />
      </div>
    </div>
    </div>
    </>
  )
}

export default Logo