import React, { Fragment } from 'react'
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon'

const Working = () => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        <div className='px-4 sm:px-6'>
            <div className='md:px-10'>

                <div className='flex flex-col md:flex-row container max-w-6xl mx-auto'>
                    {/* Left Section */}
                    <div className='md:w-3/5 md:pt-16 hidden md:block'>
                        {/* Top Section */}
                        <div className='flex items-center gap-6'>
                            {/* Avatars */}
                            <div className="isolate flex -space-x-2 overflow-hidden">
                                <img
                                    className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                    alt=""
                                />
                                <img
                                    className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                            </div>
                            {/* Right Section */}
                            <div className='flex gap-3 items-center'>
                                <div className='h-2 w-2 bg-green-500 rounded-full'></div>
                                <p>20+ Doctors Online</p>
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className='flex mt-8'>
                            <div className='w-[60%] md:bg-white bg-transparent flex border-2 border-gray-300 rounded-lg items-center mr-4 px-2 max-h-12'>
                                <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
                                <input className='h-full w-full p-3' placeholder='search Medicine & Health Products' />
                            </div>
                        </div>

                    </div>

                    {/* Right Side Image Section */}
                    <div style={{ backgroundImage: 'url(/images/svg/medicine.svg)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} className="rounded-xl flex justify-center items-center p-28 sm:p-28 -translate-y-16 md:w-3/5">
                        <img src='/images/image/play.png' className='h-20' />
                    </div>
                </div>

                <div className='py-3 md:py-12 lg:py-20'>
                    <h2 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800 md:mt-4'>How it Works</h2>
                    <section class="text-gray-600 body-font mt-4">
                        <div class="container mx-auto flex flex-wrap">
                            <div class="md:hidden flex flex-wrap w-full justify-center">
                                <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                                    <div class="flex relative pb-12">
                                        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 inline-flex items-center justify-center text-gray-900 relative z-10">
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.51536 15.5459H2.35422C1.87526 15.5459 1.46509 15.3755 1.12373 15.0347C0.782942 14.6933 0.612549 14.2832 0.612549 13.8042V4.22503C0.612549 3.74607 0.782942 3.3362 1.12373 2.99542C1.46509 2.65405 1.87526 2.48337 2.35422 2.48337H3.22505V0.741699H4.96672V2.48337H10.1917V0.741699H11.9334V2.48337H12.8042C13.2832 2.48337 13.6933 2.65405 14.0347 2.99542C14.3755 3.3362 14.5459 3.74607 14.5459 4.22503V9.51535C14.4007 9.48632 14.2594 9.46803 14.1218 9.46048C13.9836 9.45352 13.8347 9.45003 13.675 9.45003C13.5154 9.45003 13.3668 9.45352 13.2292 9.46048C13.091 9.46803 12.9494 9.48632 12.8042 9.51535V6.83753H2.35422V13.8042H8.51536C8.48633 13.9493 8.46805 14.091 8.4605 14.2292C8.45353 14.3668 8.45005 14.5154 8.45005 14.675C8.45005 14.8347 8.45353 14.9833 8.4605 15.1209C8.46805 15.2591 8.48633 15.4007 8.51536 15.5459ZM12.8042 18.1584V15.5459H10.1917V13.8042H12.8042V11.1917H14.5459V13.8042H17.1584V15.5459H14.5459V18.1584H12.8042Z" fill="#252525" />
                                            </svg>

                                        </div>
                                        <div class="flex pl-4 items-center">
                                            <h2 class="text-sm text-gray-900 tracking-wider font-medium">Get Started</h2>
                                        </div>
                                    </div>

                                    <div class="flex relative pb-12">
                                        <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                        </div>
                                        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 inline-flex items-center justify-center text-gray-900 relative z-10">
                                            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.83717 10.9333H8.57883V8.32078H11.1913V6.57911H8.57883V3.96661H6.83717V6.57911H4.22467V8.32078H6.83717V10.9333ZM2.483 14.4166C2.00404 14.4166 1.59417 14.2462 1.25338 13.9054C0.912016 13.5641 0.741333 13.1539 0.741333 12.6749V2.22494C0.741333 1.74598 0.912016 1.33611 1.25338 0.995326C1.59417 0.65396 2.00404 0.483276 2.483 0.483276H12.933C13.412 0.483276 13.8221 0.65396 14.1635 0.995326C14.5043 1.33611 14.6747 1.74598 14.6747 2.22494V6.14369L18.158 2.66036V12.2395L14.6747 8.75619V12.6749C14.6747 13.1539 14.5043 13.5641 14.1635 13.9054C13.8221 14.2462 13.412 14.4166 12.933 14.4166H2.483ZM2.483 12.6749H12.933V2.22494H2.483V12.6749Z" fill="#252525" />
                                            </svg>
                                        </div>
                                        <div class="flex pl-4 items-center">
                                            <h2 class="text-sm text-gray-900 tracking-wider font-medium">Speak to LIVE Pharmacist </h2>
                                        </div>
                                    </div>

                                    <div class="flex relative">

                                        <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 inline-flex items-center justify-center text-gray-900 relative z-10">
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.44881 18.1584C8.24416 18.1584 7.11208 17.9296 6.05256 17.4722C4.99305 17.0153 4.07142 16.3949 3.28767 15.6112C2.50392 14.8274 1.88359 13.9058 1.4267 12.8463C0.969218 11.7868 0.740479 10.6547 0.740479 9.45003C0.740479 8.24538 0.969218 7.1133 1.4267 6.05378C1.88359 4.99427 2.50392 4.07264 3.28767 3.28889C4.07142 2.50514 4.99305 1.88452 6.05256 1.42705C7.11208 0.970148 8.24416 0.741699 9.44881 0.741699C10.3922 0.741699 11.2848 0.879581 12.1266 1.15534C12.9684 1.43111 13.7449 1.81573 14.4561 2.3092L13.1934 3.59368C12.6419 3.24535 12.0541 2.97306 11.43 2.77684C10.8059 2.58119 10.1455 2.48337 9.44881 2.48337C7.51847 2.48337 5.87491 3.16175 4.51815 4.5185C3.16081 5.87584 2.48215 7.51969 2.48215 9.45003C2.48215 11.3804 3.16081 13.0242 4.51815 14.3816C5.87491 15.7383 7.51847 16.4167 9.44881 16.4167C11.3792 16.4167 13.023 15.7383 14.3803 14.3816C15.7371 13.0242 16.4155 11.3804 16.4155 9.45003C16.4155 9.18878 16.401 8.92753 16.3719 8.66628C16.3429 8.40503 16.2994 8.15104 16.2413 7.9043L17.6564 6.4892C17.8161 6.95364 17.9394 7.4326 18.0265 7.92607C18.1136 8.41955 18.1571 8.92753 18.1571 9.45003C18.1571 10.6547 17.9284 11.7868 17.4709 12.8463C17.014 13.9058 16.3937 14.8274 15.61 15.6112C14.8262 16.3949 13.9046 17.0153 12.8451 17.4722C11.7855 17.9296 10.6535 18.1584 9.44881 18.1584ZM8.22965 13.4559L4.5286 9.75483L5.74777 8.53566L8.22965 11.0175L16.938 2.28743L18.1571 3.5066L8.22965 13.4559Z" fill="#252525" />
                                            </svg>
                                        </div>
                                        <div class="flex pl-4 items-center">
                                            <h2 class="text-sm text-gray-900 tracking-wider font-medium">Get Expert Advice </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='container mt-4 mx-auto hidden md:flex justify-center'>
                                <div>
                                    <div className='flex items-center mb-3'>
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-100 inline-flex items-center justify-center text-gray-900 relative z-10">
                                            <svg width="28" height="39" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.51536 15.5459H2.35422C1.87526 15.5459 1.46509 15.3755 1.12373 15.0347C0.782942 14.6933 0.612549 14.2832 0.612549 13.8042V4.22503C0.612549 3.74607 0.782942 3.3362 1.12373 2.99542C1.46509 2.65405 1.87526 2.48337 2.35422 2.48337H3.22505V0.741699H4.96672V2.48337H10.1917V0.741699H11.9334V2.48337H12.8042C13.2832 2.48337 13.6933 2.65405 14.0347 2.99542C14.3755 3.3362 14.5459 3.74607 14.5459 4.22503V9.51535C14.4007 9.48632 14.2594 9.46803 14.1218 9.46048C13.9836 9.45352 13.8347 9.45003 13.675 9.45003C13.5154 9.45003 13.3668 9.45352 13.2292 9.46048C13.091 9.46803 12.9494 9.48632 12.8042 9.51535V6.83753H2.35422V13.8042H8.51536C8.48633 13.9493 8.46805 14.091 8.4605 14.2292C8.45353 14.3668 8.45005 14.5154 8.45005 14.675C8.45005 14.8347 8.45353 14.9833 8.4605 15.1209C8.46805 15.2591 8.48633 15.4007 8.51536 15.5459ZM12.8042 18.1584V15.5459H10.1917V13.8042H12.8042V11.1917H14.5459V13.8042H17.1584V15.5459H14.5459V18.1584H12.8042Z" fill="#252525" />
                                            </svg>

                                        </div>
                                        <div className='w-48 h-[2px] bg-gray-200'></div>
                                    </div>
                                    <p className='relative -left-2 font-bold'>Get Started</p>
                                </div>

                                <div>
                                    <div className='flex items-center justify-center text-center mb-3'>
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-100 inline-flex items-center justify-center text-gray-900 relative z-10">
                                            <svg width="28" height="39" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.83717 10.9333H8.57883V8.32078H11.1913V6.57911H8.57883V3.96661H6.83717V6.57911H4.22467V8.32078H6.83717V10.9333ZM2.483 14.4166C2.00404 14.4166 1.59417 14.2462 1.25338 13.9054C0.912016 13.5641 0.741333 13.1539 0.741333 12.6749V2.22494C0.741333 1.74598 0.912016 1.33611 1.25338 0.995326C1.59417 0.65396 2.00404 0.483276 2.483 0.483276H12.933C13.412 0.483276 13.8221 0.65396 14.1635 0.995326C14.5043 1.33611 14.6747 1.74598 14.6747 2.22494V6.14369L18.158 2.66036V12.2395L14.6747 8.75619V12.6749C14.6747 13.1539 14.5043 13.5641 14.1635 13.9054C13.8221 14.2462 13.412 14.4166 12.933 14.4166H2.483ZM2.483 12.6749H12.933V2.22494H2.483V12.6749Z" fill="#252525" />
                                            </svg>
                                        </div>
                                        <div className='w-48 h-[2px] bg-gray-200'></div>
                                    </div>
                                    <p className='font-bold relative -left-3'>Speak to Live <br /> <span className='relative left-3'>Pharmacist</span></p>
                                </div>

                                <div>
                                    <div className='flex items-center text-center mb-3'>
                                        <div class="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-100 inline-flex items-center justify-center text-gray-900 relative z-10">
                                            <svg width="28" height="39" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.44881 18.1584C8.24416 18.1584 7.11208 17.9296 6.05256 17.4722C4.99305 17.0153 4.07142 16.3949 3.28767 15.6112C2.50392 14.8274 1.88359 13.9058 1.4267 12.8463C0.969218 11.7868 0.740479 10.6547 0.740479 9.45003C0.740479 8.24538 0.969218 7.1133 1.4267 6.05378C1.88359 4.99427 2.50392 4.07264 3.28767 3.28889C4.07142 2.50514 4.99305 1.88452 6.05256 1.42705C7.11208 0.970148 8.24416 0.741699 9.44881 0.741699C10.3922 0.741699 11.2848 0.879581 12.1266 1.15534C12.9684 1.43111 13.7449 1.81573 14.4561 2.3092L13.1934 3.59368C12.6419 3.24535 12.0541 2.97306 11.43 2.77684C10.8059 2.58119 10.1455 2.48337 9.44881 2.48337C7.51847 2.48337 5.87491 3.16175 4.51815 4.5185C3.16081 5.87584 2.48215 7.51969 2.48215 9.45003C2.48215 11.3804 3.16081 13.0242 4.51815 14.3816C5.87491 15.7383 7.51847 16.4167 9.44881 16.4167C11.3792 16.4167 13.023 15.7383 14.3803 14.3816C15.7371 13.0242 16.4155 11.3804 16.4155 9.45003C16.4155 9.18878 16.401 8.92753 16.3719 8.66628C16.3429 8.40503 16.2994 8.15104 16.2413 7.9043L17.6564 6.4892C17.8161 6.95364 17.9394 7.4326 18.0265 7.92607C18.1136 8.41955 18.1571 8.92753 18.1571 9.45003C18.1571 10.6547 17.9284 11.7868 17.4709 12.8463C17.014 13.9058 16.3937 14.8274 15.61 15.6112C14.8262 16.3949 13.9046 17.0153 12.8451 17.4722C11.7855 17.9296 10.6535 18.1584 9.44881 18.1584ZM8.22965 13.4559L4.5286 9.75483L5.74777 8.53566L8.22965 11.0175L16.938 2.28743L18.1571 3.5066L8.22965 13.4559Z" fill="#252525" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className='relative -left-4 font-bold'>Get Expert Advice</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Working