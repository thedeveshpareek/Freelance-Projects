import React, { useState } from 'react'
import Header from '../components/common/Header'
import ServiceContainer from '../components/Service/ServiceContainer'
import LargeButton from '../components/common/Button/largeButton'
import Link from 'next/link'
import BookNowModal from '../components/Single_service/BookNowModal'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { TagIcon } from '@heroicons/react/24/outline'
import Footer from '../components/common/Footer'

const service_age = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='bg-white sm:bg-secondary main__bottomPadding'>
                <Header variant='primary' />
                <h1 className="text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800 mt-4">Services</h1>
                <div className='grid md:grid-cols-2 gap-8 main__padding mt-6 md:mt-8 lg:mt-20 '>
                    <div>
                        <h1 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-gray-800'>For Women Care 20-30 Age</h1>

                        <p className='main__text mt-4 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                        <div className='flex justify-center items-center sm:block'>
                            <LargeButton buttonText='Book Now' onClick={()=>{setOpen(true)}}/>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-5'>
                        <div>
                            <div>
                                {/* Card1 */}
                                <div className='p-2 md:p-3 my-3 max-w-xs mx-2 bg-white bx rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200 duration-200'>
                                    <img src='/images/image/service4.png' className='w-full' alt='Blog Article Image' />
                                    <div className='p-1 text-gray-700 text-sm'>
                                        <h3 className='mt-3 font-bold text-sm md:text-sm: lg:text-base'>Get Healthy </h3>
                                        <p className='text-xs md:text-sm  text-gray-500 mt-2'>Get a Consultation about period and Pain from our Experts</p>

                                        <div className='flex justify-between items-center  mt-4 text-xs md:text-sm'>
                                            <div className='text-primary font-bold flex items-center  gap-1 w-2/3 md:1/2'>
                                                <Link href='/singleService' passHref legacyBehavior>
                                                    <a className='flex gap-2 items-center'>
                                                        Book Now
                                                        <ArrowRightIcon className='h-3 w-3 md:h-5 md:w-5' />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className='flex w-1/3 md:w-1/2 justify-end items-center  gap-2 font-bold'>
                                                <TagIcon className='h-5 w-5' />
                                                <span>299 /-</span>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card2 */}
                                <div className='p-2 md:p-3 my-3 max-w-xs mx-2 bg-white bx rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200 duration-200'>
                                    <img src='/images/image/service1.png' className='w-full' alt='Blog Article Image' />
                                    <div className='p-1 text-gray-700 text-sm'>
                                        <h3 className='mt-3 font-bold text-sm md:text-sm: lg:text-base'>Period & Pain</h3>
                                        <p className='text-xs md:text-sm  text-gray-500 mt-2'>Get a Consultation about period and Pain from our Experts</p>

                                        <div className='flex justify-between items-center  mt-4 text-xs md:text-sm'>
                                            <div className='text-primary font-bold flex items-center  gap-1 w-2/3 md:1/2'>
                                                <Link href='/singleService' passHref legacyBehavior>
                                                    <a className='flex gap-2 items-center'>
                                                        Book Now
                                                        <ArrowRightIcon className='h-3 w-3 md:h-5 md:w-5' />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className='flex w-1/3 md:w-1/2 justify-end items-center  gap-2 font-bold'>
                                                <TagIcon className='h-5 w-5' />
                                                <span>299 /-</span>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className='mt-0 md:mt-8 lg:mt-16'>
                            <div>
                                {/* Card1 */}
                                <div className='p-2 md:p-3 my-3 max-w-xs mx-2 bg-white bx rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200 duration-200'>
                                    <img src='/images/image/service4.png' className='w-full' alt='Blog Article Image' />
                                    <div className='p-1 text-gray-700 text-sm'>
                                        <h3 className='mt-3 font-bold text-sm md:text-sm: lg:text-base'>Get Healthy </h3>
                                        <p className='text-xs md:text-sm  text-gray-500 mt-2'>Get a Consultation about period and Pain from our Experts</p>

                                        <div className='flex justify-between items-center  mt-4 text-xs md:text-sm'>
                                            <div className='text-primary font-bold flex items-center  gap-1 w-2/3 md:1/2'>
                                                <Link href='/singleService' passHref legacyBehavior>
                                                    <a className='flex gap-2 items-center'>
                                                        Book Now
                                                        <ArrowRightIcon className='h-3 w-3 md:h-5 md:w-5' />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className='flex w-1/3 md:w-1/2 justify-end items-center  gap-2 font-bold'>
                                                <TagIcon className='h-5 w-5' />
                                                <span>299 /-</span>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card2 */}
                                <div className='p-2 md:p-3 my-3 max-w-xs mx-2 bg-white bx rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200 duration-200'>
                                    <img src='/images/image/service1.png' className='w-full' alt='Blog Article Image' />
                                    <div className='p-1 text-gray-700 text-sm'>
                                        <h3 className='mt-3 font-bold text-sm md:text-sm: lg:text-base'>Period & Pain</h3>
                                        <p className='text-xs md:text-sm  text-gray-500 mt-2'>Get a Consultation about period and Pain from our Experts</p>

                                        <div className='flex justify-between items-center  mt-4 text-xs md:text-sm'>
                                            <div className='text-primary font-bold flex items-center  gap-1 w-2/3 md:1/2'>
                                                <Link href='/singleService' passHref legacyBehavior>
                                                    <a className='flex gap-2 items-center'>
                                                        Book Now
                                                        <ArrowRightIcon className='h-3 w-3 md:h-5 md:w-5' />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className='flex w-1/3 md:w-1/2 justify-end items-center  gap-2 font-bold'>
                                                <TagIcon className='h-5 w-5' />
                                                <span>299 /-</span>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer/>
            <BookNowModal open={open} setOpen={setOpen} />
        </>
    )
}

export default service_age