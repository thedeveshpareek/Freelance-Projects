import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid/'

const Testimonial_card = ({ testimonial }) => {
    return (
        <div className='py-10 px-3'>
            <div className='rounded-3xl bg-white px-7 pb-5'>
            <div className='flex gap-1 justify-end -translate-y-4'>
                <img src='/images/svg/quote.svg' />
                <img src='/images/svg/quote.svg' />
            </div>

            <p className='main__text'>{testimonial.msg}</p>

            <div className='mt-5 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img src='/images/image/doctor.png' className='rounded-lg' />
                    <div>
                        <h6 className='font-bold'>{testimonial.name} </h6>
                        <p className='main__text'>{testimonial.profile} </p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-end gap-2'>
                        <StarIcon className='h-6 w-6 text-yellow-400' />
                        <h6 className='font-bold'>{testimonial.rating}</h6>
                    </div>
                    <p className='text-right'>{testimonial.type}</p>
                </div>
            </div>
        </div>
        </div>

    )
}

export default Testimonial_card