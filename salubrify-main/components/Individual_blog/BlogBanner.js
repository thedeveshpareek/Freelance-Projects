import React from 'react'
import Chips from '../common/Chips'
import { ShareIcon } from '@heroicons/react/24/outline'

const BlogBanner = () => {
    return (
        <div>
            {/* Banner */}
            <div>
                <p className='pt-4 sm:pt-0 pb-1 sm:pb-0 md:py-5 lg:py-8 font-inter text-center max-w-[20rem] md:max-w-[24rem] lg:max-w-[16em] text-lg sm:text-2xl md:text-3xl lg:text-[54px] mx-auto font-bold  lg:leading-none text-[#101828]'>
                    Treatments of percocious puberty, How to reduce it
                </p>

                {/* Badges */}
                <div className='flex justify-center gap-1'>
                    <Chips buttonText='Puberty' buttonVariant='#F9F5FF' textColor='#EB1754' />
                    <Chips buttonText='Periods' buttonVariant='#EEF4FF' textColor='#3538CD' />
                    <Chips buttonText='Girl Hygine' buttonVariant='#fde6f1' textColor='#C11574' />
                </div>

                {/* Banner Image */}
                <img src='/images/image/img1.jpg' alt='Image' className='mt-10 w-[100%]' />
            </div>

            {/* Horizontal Line */}
            <div className='main__padding flex justify-center mt-2 md:mt-5 mx-auto max-w-xs md:max-w-full'>
                <img src='/images/svg/line.svg' alt='line image' />
            </div>

            <div className='container mx-auto max-w-6xl main__padding mt-5 lg:mt-10'>
                <div className='md:flex md:justify-between'>
                    <div>
                        {/* Top Heading */}
                        <div className='flex gap-3 items-center'>
                            <img src='images/image/profile2.png' className='rounded-full lg:h-[71px] lg:w-[71px]'
                                alt='profile image' />
                            <div>
                                <p className='font-bold font-inter text-xs sm:text-base md:text-lg lg:text-xl text-[#101828]'>DR HALEEMA</p>
                                <p className=' text-xs sm:text-base md:text-lg lg:text-xl font-inter'>Apr 15, 2020 · 4 min read</p>
                            </div>
                        </div>

                        {/* Badges */}
                        <div className='flex mt-3 gap-3 items-center'>
                            <h3 className='font-inter  text-xs sm:text-base md:text-lg lg:text-xl font-medium text-[#262626] tracking-wide'>Tags : </h3>
                            <div className='flex justify-center gap-1'>
                                <Chips buttonText='Puberty' buttonVariant='#F9F5FF' textColor='#EB1754' />
                                <Chips buttonText='Periods' buttonVariant='#EEF4FF' textColor='#3538CD' />
                                <Chips buttonText='Girl Hygine' buttonVariant='#fde6f1' textColor='#C11574' />
                            </div>
                        </div>
                    </div>

                    {/* Share Icon */}
                    <div className=' hidden md:flex gap-3 h-20 pt-0 lg:pt-3 items-center'>
                        <div>
                            <ShareIcon className='h-5 w-5' />
                        </div>
                        <div className='flex individualBlog__banner-share'>
                            <div className='w-16 border-r-[1px] border-[#EAEAEA] py-3'>
                                <img src='/images/image/fb.png'
                                    alt='facebook image'
                                    className='mx-auto h-5' />
                            </div>
                            <div className='w-16 py-3'>
                                <img src='/images/image/twitter.png'
                                    alt='Twitter Image'
                                    className='mx-auto h-5' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <p className='mt-4 lg:mt-6 main__text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In eu dui molestie, molestie lectus eu, semper lectus.
                </p>
            </div>

        </div>
    )
}

export default BlogBanner