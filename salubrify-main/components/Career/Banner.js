import React from 'react'
import Header from '../common/Header'
import Button from '../common/Button'
import Outlined from '../common/Button/Outlined'
const Banner = () => {
    return (
        <div className='career__banner-image'>
        <Header />
        <div className='h-[22rem] md:h-[30rem] lg:h-[35rem]'>
            <div className='main__padding inline-block align-middle max-w-[66%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-[46%]'>
                <h2 className='text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-medium career__banner-mainHeading md:pt-20'>Do the <span className='font-playfair font-black'>Work</span> that <span className='font-playfair font-black'>Matters</span></h2>
                <p className='mt-5 text-[12px] sm:text-base md:text-xl lg:text-2xl font-medium text-gray-700 font-raleway'>Start your Jounrey with us at Salubrify and do the things that Truly Matters </p>
                <div className='mt-8 flex gap-5 lg:mt-8 md:lg-6 sm:mt-2'>
                    <Button buttonText='Join Us' />
                    <div className='hidden lg:block'>
                        <Outlined buttonText='Learn More' />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Banner