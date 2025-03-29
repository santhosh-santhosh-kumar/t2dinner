import React from 'react'
import Logo from './Header/Logo'
import MobileLog from './Header/MobileLog'

const Header = () => {
  return (
    <>
   <div className='lg:block hidden fixed top-0 z-50 w-full'> <Logo /></div>
   <div className='lg:hidden block fixed top-0 z-50 w-full'> <MobileLog /></div>
    </>
  )
}

export default Header