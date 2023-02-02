import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { TagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const ServiceCard = ({ service }) => {
    return (
        <div className='p-2 md:p-3 my-3 max-w-xs mx-2 bg-white bx rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200 duration-200'>
                <img src={service.poster} className='w-full' alt='Blog Article Image' />
                <div className='p-1 text-gray-700 text-sm'>
                    <h3 className='mt-3 font-bold text-sm md:text-sm: lg:text-base'>{service.title}</h3>
                    <p className='text-xs md:text-sm  text-gray-500 mt-2'>{service.desc}</p>

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
                        <span>{service.price}/-</span>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServiceCard