import React from 'react'
import ArrowLongRightIcon from '@heroicons/react/24/solid/ArrowLongRightIcon'

const PositionCard = () => {
  return (
    <div className='bx p-5 rounded-xl mb-2 sm:mb-7 font-raleway hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200 duration-200' style={{background:'#f5f3f4'}}>
        <h5 className='font-bold text-sm sm:text-lg md:text-xl lg:text-2xl'>Nutrition Consultantant</h5>
        <p className='text-[9px] sm:text-base'>Remote</p>
        <p className='flex gap-1 items-center text-primary text-[10px] sm:text-base font-semibold mt-1 sm:mt-3'>Learn More  <ArrowLongRightIcon className='h-3 w-3 sm:h-6 sm:w-6'/></p>
    </div>
  )
}

export default PositionCard