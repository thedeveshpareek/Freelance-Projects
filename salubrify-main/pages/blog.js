import React from 'react'
import Header from '../components/common/Header'
import Recent_Blog from '../components/Blog/Recent_Blog'
import SearchBar from '../components/Blog/SearchBar'
import All_Blog from '../components/Blog/All_Blog'
import Services from '../components/Blog/Services'
import Footer from '../components/common/Footer'

const Blog = () => {

  const services = [
    { title: 'Period & Pain', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service1.png', price: 299 },
    { title: 'Healthy Diet', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service2.png', price: 299 },
    { title: 'Parenting Tips', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service3.png', price: 299 },
    { title: 'Get Healthy', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service4.png', price: 299 },
  ]

  return (
    <>
      <div className='bg-white sm:bg-secondary main__bottomPadding'>
        <Header variant='primary' />
        <SearchBar />
        <Recent_Blog />
        <All_Blog />
        <div className='hidden md:block'>
          <Services />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog