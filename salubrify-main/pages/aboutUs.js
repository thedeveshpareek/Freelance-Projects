import React from 'react'
import AboutBanner from '../components/About_us/AboutBanner'
import AboutContact from '../components/About_us/AboutContact'
import Gallery from '../components/About_us/Gallery'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const AboutUs = () => {
  return (
    <>
      <div className='bg-white sm:bg-secondary main__bottomPadding'>
        <Header variant='primary' />
        <AboutBanner />
        <AboutContact />
        <Gallery />
      </div>
      <Footer />
    </>
  )
}

export default AboutUs