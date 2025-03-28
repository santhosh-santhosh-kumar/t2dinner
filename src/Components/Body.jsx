import React from 'react'
import BestFood from './Body/BestFood'
import HeroBanner from './Body/HeroBanner'
import SlideBanner from './Body/SlideBanner'

const Body = () => {
  return (
    <div>
      <SlideBanner />
      <HeroBanner />
      <BestFood />
    </div>
  )
}

export default Body