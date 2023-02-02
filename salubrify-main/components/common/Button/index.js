import React from 'react'

const index = ({ buttonText, variant, onClick }) => {
    return (
        <button className={`border-none rounded-sm text-white hover:-translate-y-[1px]`} onClick={onClick} style={{
            background: '#EB1754',
            boxShadow: '0px 10px 17px -6px #FF4D80',
            borderRadius: '11.9216px'
        }}>

            <div href="#_" class="relative rounded py-3 px-4 lg:px-5 text-xs md:text-sm lg:text-base lg:py-3 overflow-hidden group bg-primary  hover:bg-gradient-to-r hover:from-primary hover:to-[#ee336b] text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-50" style={{ boxShadow: 'inset 2.98041px 2.98041px 5.96081px #FF4D80', borderRadius: '11.9216px' }}>
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">{buttonText ? buttonText : 'Button'}</span>
            </div>

        </button>

    )
}

export default index