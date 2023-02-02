import React from 'react'
import Button from '../common/Button'

const AboutBanner = () => {
    return (
        <div className='main__padding'>
            <h1 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800 my-2 md:py-4 lg:py-8'>About Us</h1>
            <div className='flex flex-col md:flex-row items-center mt-2 md:mt-8 pt-4 md:pt-12'>
                {/* Right Section */}
                <div className='order-first md:order-last md:w-1/2'>
                    <p className='main__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>

                    <h2 className='font-satoshi text-lg font-bold mt-5'>Mission & Vision</h2>
                    <ul style={{ listStyleType: 'disc' }} className='pl-7 mt-2 main__text'>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</li>
                        <li>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</li>
                    </ul>
                </div>

                {/* Left Section */}
                <div className='p-5 h-80 order-last md:order-first md:w-1/2 flex justify-center' style={{ background: 'url("/images/svg/blob.svg")', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}>
                    <img src='/images/image/doctor5.png' className='md:h-[135%] relative md:top-[-28%] md:left-[-17px]' alt='' />
                </div>

            </div>

        </div>
    )
}

export default AboutBanner