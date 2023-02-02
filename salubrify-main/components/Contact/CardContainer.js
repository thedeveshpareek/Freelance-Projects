import React from 'react'
import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon'
import EnvelopeIcon from '@heroicons/react/24/solid/EnvelopeIcon'
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon'

const CardContainer = () => {
    return (
        <div className='main__padding'>
            {/* Top Section */}
            <div className='text-center container mx-auto max-w-4xl pb-10 sm:pb-12 md:pb-16 lg:pb-20'>
                <h3 className='text-primary text-xs md:text-sm lg:text-base font-inter font-semibold mt-5'>Contact us</h3>
                <h2 className='text-xl md:text-2xl lg:text-[32px] font-bold font-playfair mt-3'>Get in touch</h2>
                <p className='font-inter font-normal text-gray-500 mt-3'>Have some question , We’d love to hear from you. Please fill out this form.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-10 lg:mt-12'>
                    <div className='bg-white py-5 px-4 rounded-xl'>
                        <MapPinIcon className='bg-primary h-16 w-16 p-4 rounded-full text-white mx-auto' />
                        <p className='mt-4 font-inter font-normal text-base text-[#262626]'>BDA 3rd Sector,HSR Layout,
                            Bengaluru,
                            Karnataka</p>
                    </div>

                    <div className='bg-white py-5 px-4 rounded-xl'>
                        <EnvelopeIcon className='bg-primary h-16 w-16 p-4 rounded-full text-white mx-auto' />
                        <p className='mt-4 font-inter font-normal text-base text-[#262626]'>Contact@salubrify.in</p>
                    </div>

                    <div className='bg-white py-5 px-4 rounded-xl'>
                        <PhoneIcon className='bg-primary h-16 w-16 p-4 rounded-full text-white mx-auto' />
                        <p className='mt-4 font-inter font-normal text-base text-[#262626]'>0114084592</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContainer