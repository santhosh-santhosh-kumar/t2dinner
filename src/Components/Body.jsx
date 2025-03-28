import React from 'react'
import BestFood from './Body/BestFood'
import HeroBanner from './Body/HeroBanner'
import SlideBanner from './Body/SlideBanner'
import Adds from './Body/Adds'
import BodyBanner from './Body/BodyBanner'
import BestSelling from './Body/BestSelling'

const Body = () => {
  return (
    <div>
      <SlideBanner />
      <BestFood />
      <HeroBanner />
      <div className='lg:py-20 bg-[#f4f1ea]'>
      <Adds />
      </div>
      <BodyBanner />
      <div className='bg-[#f4f1ea] lg:py-20'><BestSelling /></div>
      
    </div>
  )
}

export default Body