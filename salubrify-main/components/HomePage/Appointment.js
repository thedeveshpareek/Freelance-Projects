import React from 'react'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import Button from '../common/Button'
import Link from 'next/link'

const Appointment = () => {
    return (
        <div class="px-4 md:px-6">
            <div className='md:px-16 text-center md:text-left'>
                <div className='my-12 md:my-20 rounded-3xl bg-white
                        px-10 py-12 md:flex md:justify-between md:items-center'>
                    <div className='flex gap-2 mb-5'>
                        <CalendarDaysIcon className='text-primary h-7 w-6 hidden lg:block' />
                        <div className='container mx-auto font-raleway'>
                            <span className=' text-center md:text-left text-primary font-bold text-xl'>
                                We Provide consultation service Everyday
                            </span>
                            <p className='text-center mb-5 text-left hidden md:block'>Contact US To Get A Free ConSultation Today</p>
                        </div>
                    </div>
                    <Link href='/singleService' passHref legacyBehavior>
                        <a>
                            <Button buttonText='Book an Appointment' />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Appointment