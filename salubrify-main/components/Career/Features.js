import React from 'react'
import { BlobDollarIcon, BlobCalendarIcon, BlobHeartIcon, BlobFaceIcon, BlobMsgIcon, BlobFlaskIcon } from '../../assets'



const Features = () => {
    return (
        <div className='main__padding'>
            <div className='lg:mt-8 lg:mb-20 md:mb-10 mb-6'>
                <h2 className='font-roboto md:font-playfair font-bold text-lg md:text-xl lg:text-3xl text-gray-800 text-center'>Why Work with Us?</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mt-3 md:mt-10 lg:mt-16 font-raleway md:gap-10 lg:gap-12'>
                    {/* Card1 */}
                    <div className='pl-12 mt-4 md:mt-0'>
                        <div className='w-10 h-10 md:w-12 md:h-12 lg:h-16 lg:w-16'>
                            <BlobDollarIcon />
                        </div>
                        <p className='font-bold mt-2 text-[10px] md:text-lg lg:text-2xl'>Compitetive Salary</p>
                    </div>

                    {/* Card2 */}
                    <div className='pl-12 mt-4 md:mt-0'>
                        <div className='w-10 h-10 md:w-12 md:h-12 lg:h-16 lg:w-16'>
                            <BlobCalendarIcon />
                        </div>
                        <p className='font-bold mt-2 text-[10px] md:text-lg lg:text-2xl'>Flexible Working Hours
                            and Vacations </p>
                    </div>


                    {/* Card3 */}
                    <div className='pl-12 mt-4 md:mt-0'>
                        <div className='w-10 h-10 md:w-12 md:h-12 lg:h-16 lg:w-16'>
                            <BlobHeartIcon />
                        </div>
                        <p className='font-bold mt-2 text-[10px] md:text-lg lg:text-2xl'>Meet New culture with our Diverse team</p>
                    </div>

                    {/* Card4 */}
                    <div className='pl-12 mt-4 md:mt-0'>
                        <div className='w-10 h-10 md:w-12 md:h-12 lg:h-16 lg:w-16'>
                            <BlobFaceIcon />
                        </div>
                        <p className='font-bold mt-2 text-[10px] md:text-lg lg:text-2xl'>Comfortable And Pleasing Work Enviornment </p>
                    </div>


                    {/* Card5 */}
                    <div className='pl-12 mt-4 md:mt-0'>
                        <div className='w-10 h-10 md:w-12 md:h-12 lg:h-16 lg:w-16'>
                            <BlobMsgIcon />
                        </div>
                        <p className='font-bold mt-2 text-[10px] md:text-lg lg:text-2xl'>Improve communication by
                            bonding with team  </p>
                    </div>


                    {/* Card6 */}
                    <div className='pl-12 mt-4 md:mt-0'>
                        <div className='w-10 h-10 md:w-12 md:h-12 lg:h-16 lg:w-16'>
                            <BlobFlaskIcon />
                        </div>
                        <p className='font-bold mt-2 text-[10px] md:text-lg lg:text-2xl'>Comfortable And Pleasing Work Enviornment </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Features