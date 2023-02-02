import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Outlined = ({ buttonText }) => {
    return (
        <div className='flex justify-center'>
            <button className={`mt-5 md:mt-0 border-2 border-primary px-8 py-3 flex items-center font-bold rounded-sm text-primary`} style={{
                borderRadius: '11.9216px'
            }}>
                {buttonText ? buttonText : 'Button'} <ArrowLongRightIcon className='h-5 w-5 ml-1' />
            </button>
        </div>
    )
}

export default Outlined