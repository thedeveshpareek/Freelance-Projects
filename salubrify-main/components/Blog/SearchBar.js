import React from 'react'
import SimpleButton from '../common/Button/SimpleButton'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const SearchBar = () => {
    return (
        <div>
            <h3 className='text-primary text-xs md:text-sm lg:text-base font-inter font-semibold mt-5 text-center hidden md:block'>Salubrify</h3>
            <h2 className='text-xl md:text-2xl lg:text-[32px] font-bold font-playfair mt-2 md:mt-3 lg:mt-5 text-center text-[#252525]'>Our Blogs</h2>
            <p className='font-inter font-normal text-gray-500 mt-2 md:mt-3 lg:mt-5 text-center max-w-[15rem] sm:max-w-sm md:max-w-2xl text-[11px] sm:text-base md:text-lg lg:text-xl mx-auto'>Read , learn and know how to take care of your body with our blogs
            </p>

            <div className='flex mt-2 md:mt-5 lg:mt-8 max-w-lg text-sm mx-auto items-center px-3 md:px-10 lg:px-16'>
                <div className='bg-white flex border-[1px] border-gray-300 rounded-md sm:rounded-lg items-center mr-4 px-2 h-8 w-[70%] md:w-full md:h-auto mx-auto'>
                    <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
                    <input className='w-full h-full p-3 focus:outline-none' placeholder='Search Article , blogs etc' />
                </div>
                <SimpleButton buttonText='Search' />
            </div>
        </div>
    )
}

export default SearchBar