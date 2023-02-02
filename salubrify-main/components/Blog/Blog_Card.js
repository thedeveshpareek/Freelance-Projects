import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Chips from '../common/Chips'

const Blog_Card = ({ blog }) => {
    return (
        <div>
            {/* Card Starting */}
            <div className='pt-2 md:pt-3 lg:pt-5 '>
                <div>
                    <img src={blog.poster} className='rounded-lg w-full overflow-hidden' />
                </div>

                <p className='text-[#f37498] font-inter text-[11px] sm:text-xs md:text-sm font-normal md:font-semibold mt-4 lg:mt-6'>{blog.author} • {blog.date}</p>

                <div className='flex items-center mt-1 sm:mt-3 justify-between'>
                    <h3 className='font-raleway md:font-inter font-semibold lg:text-2xl md:text-xl sm:text-lg text-sm'>{blog.title}</h3>
                    <ArrowUpRightIcon className='h-5 w-5 hidden md:block'/>
                </div>

                <p className='font-inter text-[#667085] font-normal text-xs sm:text-sm  md:text-base mt-2 leading-6'>{blog.desc}</p>

                <div className='flex mt-2 md:mt-3 lg:mt-5 gap-1'>
                    <Chips buttonText='Puberty' buttonVariant='#F9F5FF' textColor='#EB1754' />
                    <Chips buttonText='Periods' buttonVariant='#eee8f6' textColor='#3538CD' />
                </div>
                
            </div>
        </div>
    )
}

export default Blog_Card