import React from 'react'

const index_blue = ({ buttonText, onClick }) => {
    return (
        <button className='border-none rounded-xl sm:rounded-lg md:rounded-xl text-white hover:-translate-y-[1px]' onClick={onClick} style={{
            background: '#007AD9',
            boxShadow: '0px 10px 17px -6px #2AA4F4'
        }}>

            <div href="#_" class="relative rounded-xl py-3 px-4 lg:px-5 text-xs md:text-sm lg:text-base lg:py-3 overflow-hidden group bg-primary_blue  hover:bg-gradient-to-r hover:from-primary_blue hover:to-[#0a7bcf] text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary_blue transition-all ease-out duration-50 hover:-translate-y-[1px]" style={{ boxShadow: 'inset 2.98041px 2.98041px 5.96081px #2AA4F4' }}>
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">{buttonText ? buttonText : 'Button'}</span>
            </div>
        </button>
    )
}

export default index_blue