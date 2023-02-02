import React from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import Button from '../common/Button/IconButton'
import Link from 'next/link'

const Career = () => {
    return (
        <div>
            {/* Career */}
            <div className='px-4 sm:px-6'>
                <div className='md:px-10 py-10'>
                    <div className='mt-10 bx rounded-3xl bg-white
                        px-6 py-12 text-center md:flex md:justify-between md:items-center'>
                        <div className='flex gap-2'>
                            <CalendarDaysIcon className='text-primary h-7 w-6 hidden md:block' />
                            <div className='flex-1'>
                                <p className='text-center md:text-left text-primary font-bold text-xl'>Career at Salubrify</p>
                                <p className='text-center mb-5'>Are you a Healthcare professsional ? </p>
                            </div>
                        </div>
                        <Link href='/career' passHref legacyBehavior>
                            <a>
                                <Button buttonText='Apply Now' />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career