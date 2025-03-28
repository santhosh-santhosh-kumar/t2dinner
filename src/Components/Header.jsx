import React from 'react'
import Logo from './Header/Logo'
import MobileLog from './Header/MobileLog'

const Header = () => {
  return (
    <>
   <div className='lg:block hidden'> <Logo /></div>
   <div className='lg:hidden block'> <MobileLog /></div>
    </>
  )
}

export default Header