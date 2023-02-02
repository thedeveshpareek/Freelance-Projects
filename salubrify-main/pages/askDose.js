import React from 'react'
import Banner from '../components/Ask_dose/Banner'
import Detail from '../components/Ask_dose/Detail'
import Working from '../components/Ask_dose/Working'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const askDose = () => {
  return (
    <>
      <div className='main__bottomPadding'>
        <div className='bg-secondary_blue pb-12'>
          <Header variant='primary_blue' />
          <Banner />
        </div>
        <Working />
        <Detail />
      </div>
      <Footer />
    </>
  )
}

export default askDose