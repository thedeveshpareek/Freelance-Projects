import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Search = () => {
  return (
    <div className='bg-transparent md:px-16 px-2 relative translate-y-16 hidden md:block'>
      <div className='container mx-auto max-w-7xl bg-white p-3 rounded-3xl flex gap-4 items-center'>
        <div className='hidden md:block w-1/4'>
          <img src='/images/image/home-search.png' />
        </div>
        <div className='mx-auto md:mx-0 w-4/4 md:w-3/4'>
          <h2 className='text-base md:text-xl font-bold'>Salubrify Has <span className='text-primary'>3000</span> Happy Cutomers with <span className='text-primary'>4.8/5</span> Google Ratings</h2>

          <div className='flex mt-5'>
            <div className='w-full bg-[#ffece5] p-4 rounded-lg text-gray-500 flex gap-2'>
              <MagnifyingGlassIcon className='h-5 w-5'/>
              <input placeholder='Search Doctors & Specialist' className='focus:outline-none bg-transparent' />
            </div>

            <button className='bg-primary py-4 px-10 font-medium text-white' style={{
              borderRadius:'0 8px 8px 0'
            }}>
              Search  
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Search