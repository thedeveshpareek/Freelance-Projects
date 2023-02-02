import React from 'react'
import Chips from '../common/Chips'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const Recent_Blog = () => {
    return (
        <div className='main__padding mt-10 sm:mt-12 md:mt-16 lg:mt-24'>
            <h2 className='text-lg md:text-xl lg:text-2xl md:font-inter font-semibold text-black md:text-[#101828] font-raleway'>Recent blog posts</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2 md:mt-3 lg:mt-5'>
                {/* Left Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 items-center'>
                    <img src='/images/image/img1.jpg' className='rounded-lg h-full lg:h-56 lg:w-full' />

                    <div>
                        <p className='text-[#f37498] font-inter text-[11px] sm:text-xs md:text-sm font-normal md:font-semibold mt-0 lg:mt-2'>Olivia Rhye • 20 Jan 2022</p>

                        <div className='flex items-center mt-1 sm:mt-3 justify-between'>
                            <h3 className='font-raleway md:font-inter font-semibold lg:text-2xl md:text-xl sm:text-lg text-sm'>Puberty Changes In girls</h3>
                            <ArrowUpRightIcon className='h-5 w-5' />
                        </div>

                        <p className='font-inter text-[#667085] font-normal text-xs sm:text-sm  md:text-base mt-2 leading-6'>Changes in girl during puberty are the beginning of new phase of life. “Puberty” A small but critical step towards adulthood...<span className='text-primary'>Read more</span></p>

                        <div className='flex mt-2 md:mt-3 lg:mt-5 gap-1'>
                            <Chips buttonText='Puberty' buttonVariant='#f9e9f6' textColor='#EB1754' />
                            <Chips buttonText='Periods' buttonVariant='#eee8f6' textColor='#3538CD' />
                            <Chips buttonText='Girl Hygine' buttonVariant='#fde6f1' textColor='#C11574' />
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className=' grid grid-cols-2 lg:grid-cols-1 gap-5'>
                    {/* Card1 */}
                    <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-3'>
                        <img src='/images/image/img3.png' className='md:h-48 h-full w-full'/>
                        <div>
                            <p className='text-[#f37498] font-inter text-[11px] sm:text-xs md:text-sm font-normal md:font-semibold'>Phoenix Baker • 19 Jan 2022</p>
                            <h4 className='font-raleway md:font-inter font-semibold lg:text-lg md:text-xl sm:text-lg text-sm mt-1 sm:mt-3 '>School & Menstruation</h4>
                            <p className='font-inter text-[#667085] font-normal text-xs sm:text-sm  md:text-base mt-2 leading-6'>Menstruation is one of the most events in a woman...<span className='text-primary'>Read more</span></p>

                            <div className='flex mt-2 md:mt-3 lg:mt-5 gap-1'>
                                <Chips buttonText='Puberty' buttonVariant='#f0ecf6' textColor='#EB1754' />
                                <Chips buttonText='School life' buttonVariant='#fde6f1' textColor='#C11574' />
                            </div>
                        </div>
                    </div>

                    {/* Card2 */}
                    <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-3'>
                        <img src='/images/image/img4.png' className='md:h-48  h-full w-full' />
                        <div>
                            <p className='text-[#f37498] font-inter text-[11px] sm:text-xs md:text-sm font-normal md:font-semibold'>Lana Steiner • 18 Jan 2022</p>
                            <h4 className='font-raleway md:font-inter font-semibold lg:text-lg md:text-xl sm:text-lg text-sm mt-1 sm:mt-3 '>Treatments of percocious puberty</h4>
                            <p className='font-inter text-[#667085] font-normal text-xs sm:text-sm  md:text-base mt-2 leading-6'>Puberty A small but critical step towards ...<span className='text-primary'>Read more</span></p>

                            <div className='flex mt-2 md:mt-3 lg:mt-5 gap-1'>
                                <Chips buttonText='Puberty' buttonVariant='#ECFDF3' textColor='#027A48' />
                                <Chips buttonText='School life' buttonVariant='#FDF2FA' textColor='#C11574' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Recent_Blog