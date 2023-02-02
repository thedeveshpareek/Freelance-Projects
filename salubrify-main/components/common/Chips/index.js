import React from 'react'

const index = ({buttonVariant, buttonText, textColor}) => {
    return (
        <div className='font-inter space-x-2 inline-flex items-center rounded-full px-3 py-0.5 text-[11px] sm:text-sm md:text-base lg:text-lg font-medium' style={{background:buttonVariant, color:textColor}}>
            {buttonText}
        </div>
    )
}

export default index