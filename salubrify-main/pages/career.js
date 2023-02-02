import React from 'react'
import Banner from '../components/Career/Banner'
import Features from '../components/Career/Features'
import Position from '../components/Career/Position'
import Testimonials from '../components/Career/Testimonials'
import Footer from '../components/common/Footer'

const career = () => {
  return (
    <div>
        <Banner/>
        <Position/>
        <Features/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default career