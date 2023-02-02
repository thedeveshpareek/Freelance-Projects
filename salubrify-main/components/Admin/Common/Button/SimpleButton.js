import React from 'react'

const SimpleButton = ({buttonText}) => {
    return (
        <div>
            <button className={`border-none rounded-lg text-white`} style={{
                background: '#EB1754',
            }}>
                <div className='md:h-full md:w-full px-5 py-2 md:px-7 md:py-3  rounded-lg text-xs md:text-sm lg:text-lg font-raleway font-normal'>
                    {buttonText ? buttonText : 'Button'}
                </div>
            </button>
        </div>
    )
}

export default SimpleButton