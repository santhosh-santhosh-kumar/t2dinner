import React, { useEffect } from 'react'
import BestFood from './Body/BestFood'
import HeroBanner from './Body/HeroBanner'
import SlideBanner from './Body/SlideBanner'
import Adds from './Body/Adds'
import BodyBanner from './Body/BodyBanner'
import BestSelling from './Body/BestSelling'
import AddressBar from './Body/AddressBar'
import OwnerBanner from './Body/OwnerBanner'
import AOS from "aos";
import 'aos/dist/aos.css';
import MeetChef from './Body/MeetChef'
import MobileMeetChef from './Body/MobileMeetChef'
import Scroll from './Body/Scroll'

const Body = () => {
  
  useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false,
          offset: 200,
        });
        AOS.refresh();
      }, []);
  
  return (
    <div className='mt-36'>
      <SlideBanner />
      <div data-aos="fade-up"><BestFood  /></div>
      <div >  <HeroBanner /></div>
      <Scroll />
      <div className='lg:py-20 bg-[#f4f1ea]' data-aos="fade-up">
      <Adds />
      </div>
      <Scroll />
      <div className='my-4' data-aos="fade-up"><BodyBanner /></div>
  
   
      <div className='bg-[#f4f1ea] lg:py-20' data-aos="fade-up"><BestSelling /></div>
   
      <div data-aos="fade-up">
        <OwnerBanner />
      </div>
      <div className='lg:block hidden'><MeetChef /></div>
      <div className=':block lg:hidden'><MobileMeetChef /></div>
      <div data-aos="fade-up">
        <AddressBar />
      </div>
      
    </div>
  )
}

export default Body