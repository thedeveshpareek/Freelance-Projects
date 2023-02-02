import React, { useState } from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import BookNowModal from '../components/Single_service/BookNowModal'
import ServiceBanner from '../components/Single_service/ServiceBannerCard'
import ServiceDetail from '../components/Single_service/ServiceDetail'

const Service = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='bg-secondary main__bottomPadding'>
        <Header />
        <BookNowModal open={open} setOpen={setOpen} />
        <ServiceBanner open={open} setOpen={setOpen} />
        <ServiceDetail />
      </div>
      <Footer />
    </>
  )
}

export default Service