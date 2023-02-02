import React from 'react'

const Outlined = ({buttonText}) => {
    return (
        <button className='border-[1px] p-2 md:p-3 rounded-md md:rounded-xl border-primary text-primary font-bold text-xs sm:text-base md:text-lg'>{buttonText}</button>
    )
}

export default Outlined