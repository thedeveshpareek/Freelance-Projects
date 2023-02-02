import React from 'react'
import Footer from '../components/common/Footer'
import Header from '../components/common/Header'
import BlogBanner from '../components/Individual_blog/BlogBanner'
import BlogDetail from '../components/Individual_blog/BlogDetail'
import Blogs from '../components/Individual_blog/Blogs'
import Share from '../components/Individual_blog/Share'

const IndividualBlog = () => {
  return (
    <>
    <div className='bg-white sm:bg-secondary pb-20'>
          <Header variant='primary'/>
          <BlogBanner/>
          <BlogDetail/>
          <Share/>
          <div className='hidden md:block'>
          <Blogs/>
          </div>
    </div>
    <Footer/>
    </>
  )
}

export default IndividualBlog