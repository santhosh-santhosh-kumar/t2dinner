import React from 'react'
import MainFooter from './Footer/MainFooter'
import MenuFooter from './Footer/MenuFooter'
import ConductFooter from './Footer/ConductFooter'

const Footer = () => {
  return (
    <div className='bg-[#010f1c] px-10 lg:flex lg:justify-around  py-10  lg:mt-0 mt-4'>
      <MainFooter />
      <MenuFooter />
      <ConductFooter />
    </div>
  )
}

export default Footer