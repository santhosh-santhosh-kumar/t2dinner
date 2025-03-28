import React from 'react'
import logoImage from "../../assets/logo/05.png"
import NavBar from './NavBar'
import Timeing from './Timeing'
import MobileNavbar from './MobileNavbar'
import { FiMenu } from "react-icons/fi";

const Logo = () => {
  return (
    <>
    <div className='lg:flex  w-full'>
    <div className=' lg:w-80 lg:h-40 w-60 h-24'>
      <img src={logoImage} alt="" className='w-full h-full object-cover' />
    </div>
    <div className="lg:hidden">
    <FiMenu size={25} className='text-[#4d5b68]' />
    </div>
    <div className='w-full'>
      <div>
      <Timeing />
      </div>
      <div className='lg:block hidden'>
      <NavBar />
      </div>
      <div className='lg:hidden block'>
        <MobileNavbar />
      </div>
    </div>
    </div>
    </>
  )
}

export default Logo