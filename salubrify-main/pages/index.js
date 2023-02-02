import React from 'react'
import Footer from '../components/common/Footer'
// import Header from '../components/common/Header'
import Testimonials from '../components/common/Testimonials'
import Apply from '../components/HomePage/Apply'
import Appointment from '../components/HomePage/Appointment'
import Banner from '../components/HomePage/Banner'
import Benefits from '../components/HomePage/Benefits'
import Career from '../components/HomePage/Career'
import Details from '../components/HomePage/Details'
import Pricing from '../components/HomePage/Pricing'
import Team from '../components/HomePage/Team'
import Working from '../components/HomePage/Working'
import Blogs from '../components/Individual_blog/Blogs'
import ServiceContainer from '../components/Service/ServiceContainer'

const index = () => {
  return (
    <>
      <div className='bg-secondary main__bottomPadding'>
        <Banner />
        <Benefits />
        <ServiceContainer />
        <Working />
        <Appointment />
        <Details />
        <Pricing />
        <Team />
        <div className='bg-[#ffece5]'>
          <Testimonials />
        </div>
        <Career />
        <Apply />
        <Blogs />
      </div>
      <Footer/>
    </>
  )
}

export default index