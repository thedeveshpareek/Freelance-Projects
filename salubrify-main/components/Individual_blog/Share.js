import React from 'react'

const Share = () => {
    return (
        <div className='hidden md:block'>
            <div className='flex max-w-3xl mx-auto my-16 lg:my-24 px-10'>
                <div className='flex gap-5 items-center justify-center font-medium bg-white border-2 border-gray-200 p-3 w-full rounded-sm text-center'>
                    <img src='/images/image/fb.png'  alt='Facebook Image'/>Share on Facebook
                </div>
                <div className='flex gap-5 items-center justify-center font-medium bg-white border-2 border-gray-200 p-3 w-full rounded-sm'>
                    <img src='/images/image/twitter.png'  alt='Twitter Image'/>Share on Twitter
                </div>
            </div>

            <img src='/images/svg/eye.svg'  alt='Image'/>
        </div>
    )
}

export default Share