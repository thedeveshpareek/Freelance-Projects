import React from 'react'

const index = ({ buttonText, variant }) => {
    return (
        <button className={`border-none rounded-sm text-white`} style={{
            background: '#EB1754',
            boxShadow: '0px 10px 17px -6px #FF4D80',
            borderRadius: '11.9216px'
        }}>
            <div className='h-full w-full px-7 py-3 rounded-sm font-raleway text-xs md:text-base lg:text-lg' style={{ boxShadow: 'inset 2.98041px 2.98041px 5.96081px #FF4D80',  borderRadius: '11.9216px'}}>
                {buttonText ? buttonText : 'Button'}
            </div>
        </button>
    )
}

export default index