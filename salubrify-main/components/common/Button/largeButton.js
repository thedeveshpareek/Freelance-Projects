import React from 'react'

const largeButton = ({ buttonText, onClick}) => {
    return (
        <button className={`border-none rounded-sm text-white`} onClick={onClick} style={{
            background: '#EB1754',
            boxShadow: '0px 10px 17px -6px #FF4D80',
            borderRadius: '11.9216px'
        }}>
            <div className='text-center h-full w-60 py-3 px-4 lg:px-5 text-xs md:text-sm lg:text-base lg:py-3 flex items-center justify-center rounded-md sm:rounded-lg md:rounded-xl focus:outline-none' style={{ boxShadow: 'inset 2.98041px 2.98041px 5.96081px #FF4D80', borderRadius: '11.9216px' }}>
                {buttonText ? buttonText : 'Button'}
            </div>
        </button>
    )
}

export default largeButton