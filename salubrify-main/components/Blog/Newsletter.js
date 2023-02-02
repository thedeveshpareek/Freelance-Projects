import React from 'react'
import Button from '../common/Button'
import Input from '../common/Input'

const Newsletter = () => {
    return (
        <div className=' main__padding'>
            <div className='bg-offWhite mx-auto my-16 rounded-lg bx'>
                <div className='flex'>
                    <div className='w-2/3 p-6'>
                        <div>
                            <p className='text-primary text-sm font-bold'> Join Our Newsletter</p >
                            <p className='mt-4 max-w-xs font-bold'>
                                Get a daily Blog post of useful tips directly in your inbox from our doctors
                            </p>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-5 text-sm items-center mt-3 '>
                            <Input inputText='Enter Email Address'/>
                            <Button buttonText='Subscribe' />
                        </div>
                    </div>
                    <div className='md:w-1/3 relative' style={{
                        backgroundImage: 'url(/images/svg/shape1.svg)',
                        backgroundPosition: 'left',
                        backgroundSize: 'cover'
                    }}>
                        <img src='/images/image/dr.png' className='h-[35vh] lg:absolute lg:bottom-0 lg:right-20 z-10 md:mb-0 -mb-10' />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Newsletter