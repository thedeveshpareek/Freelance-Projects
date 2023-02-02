import React from 'react'
import Button from '../common/Button'

const AboutContact = () => {
    return (
        <div className='main__padding'>
            <div className='max-w-5xl mx-auto'>
                <div className='my-8 md:my-12 lg:my-20 bx rounded-3xl bg-white
                px-8 py-16 text-center lg:flex md:justify-between md:items-center'>
                    <p className='text-center text-primary font-normal sm:font-medium md:font-semibold text-sm sm:text-base md:text-xl lg:text-2xl font-raleway  mb-7 md:mb-5 lg:mb-0'>Have Any Query Related To <span className='font-semibold'>Health</span> And <span className='font-semibold'>Consultancy?</span></p>
                    <Button buttonText='Contact Us'/>
                </div>
            </div>
        </div>
    )
}

export default AboutContact