import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import ServiceContainer from '../components/Service/ServiceContainer'

const Service = () => {
  return (
    <>
    <div className='bg-white sm:bg-secondary main__bottomPadding'>
      <Header  variant='primary'/>
      <ServiceContainer/>
    </div>
    <Footer/>
    </>
  )
}

export default Service