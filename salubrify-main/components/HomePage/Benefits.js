import React from 'react'
import Button from '../common/Button/IconButton'
import { ArrowLongRightIcon, StarIcon } from '@heroicons/react/24/solid'
import { UpperCircleElement } from '../../assets'
import Link from 'next/link'
import Zoom from 'react-reveal/Zoom'

const Benefits = () => {
    return (
        <div className='px-4 pt-16 md:px-6 relative -z-'>
            <div className='py-10'>
                <div className='flex flex-col md:flex-row gap-6 md:mt-6 mt-0 container mx-auto'>
                    {/* Detail */}
                    <div className='order-2 md:w-1/2 '>
                        <div className='md:pt-10 pt-4'>
                            
                                <h3 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-gray-800'>Girl’s Puberty Power</h3>
                                <p className='text-lg font-raleway text-gray-600 mt-3'>Girl’s Puberty Power Program is designed to address all the issues that a girl might face during this stage of her life</p>
                           
                            <h6 className='mt-4 font-[600] text-md lg:text-xl font-raleway'>Benefits</h6>
                            <p className='text-lg font-raleway text-gray-600'>
                                Girl’s Puberty Power program is only designed for Girls to address all the issues that a girl might face during this stage of her life
                            </p>
                            <div className='mt-6 text-lg font-raleway text-gray-600'>
                                <p className='flex gap-2'><StarIcon className='h-6 w-6 text-gray-600' /> Get online video counseling from experienced health experts</p>

                                <p className='flex gap-2 mt-5'><StarIcon className='h-6 w-6 text-gray-600' /> Join Fitness class, Yoga class, Nutrition programs</p>

                                <p className='flex gap-2 mt-5'><StarIcon className='h-6 w-6 text-gray-600' /> Get discounted Offers on Beauty care, Skincare, Hair Care from nearby Salons</p>

                                <p className='flex gap-2 mt-5'><StarIcon className='h-6 w-6 text-gray-600' /> Receive the right information about your health, and make a healthy life.</p>
                            </div>
                            <div className='mt-8'>
                                <Link href='/singleService' passHref legacyBehavior>
                                    <a>
                                        <Button buttonText="Book Now" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Image section */}
                    <div className='md:mt-12 mt-5 order-1 md:w-1/2 relative'>
                        <div className='relative md:-left-12 md:top-12' style={{
                            background: 'url(/images/svg/blob.svg)',
                            backgroundSize: '100% 100%',
                            height: '55vh',
                            backgroundPosition: 'bottom',
                            backgroundRepeat: 'no-repeat',
                            zIndex: 2,
                        }}>
                            <Zoom>
                                <img src='/images/image/doctor3.png' className='h-[55vh] mx-auto relative -top-12 md:top-0' />
                            </Zoom>
                        </div>
                        <div className='absolute lg:right-14 hidden global__rotate-animation md:block right:-5 -top-10 -z-3'>
                            <UpperCircleElement height={300} width={300} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits