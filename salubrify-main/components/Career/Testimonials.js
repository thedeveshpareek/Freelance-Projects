import React from 'react'
import ArrowLongRightIcon from '@heroicons/react/24/solid/ArrowLongRightIcon'
import { CameraIcon, ArrowUpOnSquareIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Button from '../common/Button'
import Input from '../common/Input'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

const Testimonials = () => {
    return (
        <>
            <div style={{ background: '#ffece5' }} className='px-3 md:px-5 lg:px-10 pb-36'>
                <div className='py-8 md:py-16 lg:py-20'>
                    <h2 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800'>What Our Emplyoees say about Us </h2>
                    <div>
                        <div className='flex flex-col md:flex-row items-center gap-6 mx-auto md:px-10 max-w-xs md:max-w-none text-center md:text-left mt-3 md:mt-10 lg:mt-16'>
                            {/* Message */}
                            <div className='order-1 md:order-2 md:w-1/2'>
                                <div>
                                    <p className='main__text' style={{ fontWeight: '600', lineHeight: '2rem' }}>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos”.
                                    </p>
                                </div>
                                <div className='flex justify-between mt-10 mb-8 md:mt-12 lg:mt-16'>
                                    <div>
                                        <svg width="104" height="15" viewBox="0 0 104 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.292893 6.79289C-0.0976311 7.18342 -0.0976311 7.81658 0.292893 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819457 8.07107 0.428932C7.68054 0.0384078 7.04738 0.0384078 6.65685 0.428932L0.292893 6.79289ZM1 8.5H104V6.5H1V8.5Z" fill="black" />
                                        </svg>
                                    </div>

                                    <div>
                                        <svg width="104" height="15" viewBox="0 0 104 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M103.707 6.79289C104.098 7.18342 104.098 7.81658 103.707 8.20711L97.3431 14.5711C96.9526 14.9616 96.3195 14.9616 95.9289 14.5711C95.5384 14.1805 95.5384 13.5474 95.9289 13.1569L101.586 7.5L95.9289 1.84315C95.5384 1.45262 95.5384 0.819457 95.9289 0.428932C96.3195 0.0384078 96.9526 0.0384078 97.3431 0.428932L103.707 6.79289ZM103 8.5H0V6.5H103V8.5Z" fill="black" />
                                        </svg>

                                    </div>

                                </div>
                            </div>

                            {/* Image section */}
                            <div className='order-2 md:order-1 md:w-1/2 hidden md:block'>
                                <div style={{
                                    background: 'url(/images/svg/blob.svg)',
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat'
                                }} className='py-10 flex justify-center '>
                                    <img src='/images/svg/doctor1.svg' className='h-full relative'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className='px-3 md:px-5 lg:px-10 bx'>
                <div className='bg-white bx mx-auto max-w-lg rounded-xl p-5 mt-10 -translate-y-48'>
                    <h6 className='font-roboto font-medium text-sm md:text-md lg:text-lg'>Your Name</h6>
                    <Input inputText='eg - Joe Biden ' />

                    <h6 className='font-roboto font-medium text-sm md:text-md lg:text-lg mt-5'>Your Email</h6>
                    <Input inputText='eg - example@gmail.com' />

                    <h6 className='font-roboto font-medium text-sm md:text-md lg:text-lg mt-5'>Your Phone Number </h6>
                    <Input inputText='eg - +9123XXXXXX ' />

                    <h6 className='font-roboto font-medium text-sm md:text-md lg:text-lg mt-5'>Choose Position </h6>
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>

                    <h6 className='font-roboto font-medium text-sm md:text-md lg:text-lg mt-5'>Upload Your CV*</h6>
                    {/* File Upload */}
                    <div className="col-span-3">
                        <Input inputText='eg - Joe Biden ' />
                        {/* <div className='mt-7 grid grid-cols-3 gap-3'>
                            <div className='border-[1px] border-primary rounded-md px-5 py-3 flex gap-3 text-primary'>
                                <CameraIcon className='h-6 w-6' />
                                <p>Camera</p>
                            </div>
                            <div className='border-[1px] border-primary rounded-md px-5 py-3 flex gap-3 text-primary'>
                                <ArrowUpOnSquareIcon className='h-6 w-6' />
                                <p>PDF</p>
                            </div>
                            <div className='border-[1px] border-primary rounded-md px-5 py-3 flex gap-3 text-primary'>
                                <PhotoIcon className='h-6 w-6' />
                                <p>Gallery</p>
                            </div>
                        </div> */}
                    </div>

                    {/* Button */}
                    <div className='text-center mt-8'>
                        <Button buttonText='Submit Inquiry' />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Testimonials