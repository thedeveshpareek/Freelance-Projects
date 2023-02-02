import Link from 'next/link'
import React from 'react'
import IconButton from '../common/Button/IconButton'

const Apply = () => {
    return (
        <div className='md:mb-20 mb-0'>
            {/* Apply Now */}
            <div style={{ backgroundImage: 'url(/images/image/bg.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', minHeight: '10rem', backgroundPosition: 'right' }} className="px-10 md:px-20 py-[5%] md:py-[8%] mt-10 w-full">
                <h4 className='text-xl text-gray-900 font-playfair font-bold'>KNOW YOUR MEDICINE</h4>
                <p className='text-black mt-2 md:mb-3 mb-1 max-w-lg'>Safe and Secure Solution for Patinets to Double check their medication Dose  </p>

                <div className='mt-6 md:mb-10 hidden md:block'>
                    {/* Avatars */}
                    <div className='md:flex items-center gap-6'>
                        <div className="isolate flex -space-x-2 overflow-hidden">
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
                            <p className='rounded-sm font-bold'>20+ Doctors Online</p>
                        </div>
                    </div>
                </div>

                <Link href='/askDose' passHref legacyBehavior>
                    <a>
                        <IconButton buttonText='Ask Now' />
                    </a>
                </Link>

            </div>
        </div>
    )
}

export default Apply