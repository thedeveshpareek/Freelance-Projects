import React from 'react'
import Input from '../common/Input'

const ContactForm = () => {
    return (
        <div className='bg-white max-w-lg mx-auto lg:pt-20 md:pt-16 pt-8 px-5'>
            <form>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div>
                        <p className='font-medium text-base lg:text-[18px]'>First name</p>
                        <Input inputText='First name'/>
                    </div>
                    <div>
                        <p className='font-medium text-base lg:text-[18px] mt-5 md:mt-0'>Last name</p>
                        <Input inputText='Last name' />
                    </div>
                </div>

                <p className='mt-5 font-medium text-base lg:text-[18px]'>Email</p>
                <Input inputText='you@company.com' />

                <p className='mt-5 font-medium text-base lg:text-[18px]'>Phone number</p>
                <Input inputText='+91 XXXXXXXXXXXX' />

                <p className='mt-5 font-medium text-base lg:text-[18px]'>Message</p>
                <textarea
                    rows={3}
                    className="mt-2 block w-full max-w-lg rounded-md border-gray-300 shadow-sm focus:outline-none p-3 sm:text-sm"
                    defaultValue={''}
                    style={{ border: '1px solid #ABABAB', resize:'none' }}
                />

                <button className='bg-primary w-full h-full py-2 rounded-lg text-white mt-7 font-inter font-medium'>
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactForm