import React from 'react'
import { useSelector } from 'react-redux'
import { navbarData } from '../../Slices/NavbarDataSlice'
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";


const NavBar = () => {
      const navbarList=useSelector(navbarData)
      
  return (
    <div className='bg-[#010f1c] text-[#fffaff] py-10'>
      <div className='flex items-center justify-between px-10'>
            <div className='flex items-center gap-8 text-lg font-mainFont'>
                  {navbarList.map((value)=>{
                        return <>
                        <p>{value.label}</p>
                        </>
                  })}
            </div>
            <div className='flex items-center gap-4'>
                  <p><IoSearchOutline size={25} className='text-[#4d5b68]' /></p>
                  <p>
                  <FiMenu size={25} className='text-[#4d5b68]' />
                  </p>
            </div>
      </div>
    </div>
  )
}

export default NavBar