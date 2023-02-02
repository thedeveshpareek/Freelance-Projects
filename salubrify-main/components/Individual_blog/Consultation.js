import React from 'react'
import Button from '../common/Button'

const Consultation = () => {
    return (
        <div className='bg-offWhite rounded-xl bx flex'>
            <div className='w-2/3 p-6'>
                <p className='text-primary text-[11px] font-inter md:text-sm lg:text-lg font-bold'> Consultation</p >
                <p className='mt-4 max-w-xs font-bold font-raleway md:font-inter text-sm sm:text-lg md:text-xl lg:text-2xl'>
                    Get 30 min Consultation with our docotrs @299/-
                </p>

                <div className='flex gap-5 text-sm items-center mt-3'>
                    <input placeholder='Enter Email Address' className='py-1 px-2 rounded-lg border-gray-300 border-2 w-60 h-11' />
                    <Button buttonText='Get Now' />
                </div>
            </div>
            <div className='w-1/3 relative' style={{
                backgroundImage:'url(/images/svg/shape1.svg)',
                backgroundPosition:'left',
                backgroundSize:'cover'
            }}>
                <img src='/images/image/dr.png' className='service__banner' />
            </div>
        </div >
    )
}

export default Consultation