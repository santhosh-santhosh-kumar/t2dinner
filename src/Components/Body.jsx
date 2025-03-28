import React from 'react'
import BestFood from './Body/BestFood'
import HeroBanner from './Body/HeroBanner'
import SlideBanner from './Body/SlideBanner'
import Adds from './Body/Adds'
import BodyBanner from './Body/BodyBanner'

const Body = () => {
  return (
    <div>
      <SlideBanner />
      <BestFood />
      <HeroBanner />
      <Adds />
      <BodyBanner />
    </div>
  )
}

export default Body