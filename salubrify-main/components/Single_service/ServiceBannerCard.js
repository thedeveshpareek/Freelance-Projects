import React from 'react'
import IconButton from '../common/Button/IconButton'


const ServiceBanner = ({open, setOpen}) => {

    const plans = [
        { price: '690/-', description: '690 / session', session: '1 Session', type:'selected' },
        { price: '2760/-', description: '690 / session', session: '4 Sessions',type:'selected' , duration: '(Validate for 30 Days)' },
    ]


    return (
        <>
            <div className='main__padding'>
                <h2 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800 my-4 md:py-4 lg:py-8'> Periods & pain
                </h2>

                <div>
                    <div className='mt-7 py-3 px-4 md:py-0 md:px-0 md:bg-transparent bg-white border-2 border-gray-300 md:border-none rounded-xl  w-[100%] flex flex-col sm:flex-row gap-16 md:pb-4 lg:pb-8'>

                        <div className='w-[100%] md:w-3/7'>
                            <img src='/images/svg/pain.svg' className='w-full h-[100%] rounded-3xl' />
                        </div>

                        <div className='w-[100%] md:w-4/7'>
                            <p className='font-medium font-satoshi text-[#4C4C4C] lg:text-base md:text-sm text-xs'>Talk to our expert about Period & Pain</p>
                            <hr />


                            {/* Radio */}
                            <fieldset>
                                <div className="space-y-5 mt-4">
                                    {plans.map((plan) => (
                                        <div className="relative flex items-start">
                                            <div className="flex h-5 items-center">
                                                
                                                <input
                                                    name="plan"
                                                    type="radio"
                                                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm w-full text-gray-700">
                                                <div className='flex justify-between'>
                                                    <div>
                                                        <span className='font-medium font-satoshi text-black lg:text-base md:text-sm text-xs'>{plan.session}</span> <br />
                                                        {plan.duration}
                                                    </div>
                                                    <div>
                                                        <label className="font-medium font-satoshi text-black lg:text-xl md:text-lg text-[13px]">
                                                            {plan.price}
                                                        </label>
                                                        <p className="font-medium font-satoshi text-[#919191] lg:text-base md:text-sm text-xs">
                                                            {plan.description}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>

                            {/* Button */}
                            <button className='my-7 md:my-10 block mx-auto' onClick={()=>{setOpen(true)}}>
                                <IconButton buttonText='Book Now' />
                            </button>

                            <hr />

                            {/* Bottom Section */}
                            <div className='flex gap-4 mt-3 items-center'>
                                <img src='/images/svg/tag.svg' className='h-5' />
                                <span className='font-satoshi text-[11px] md:text-base lg:text-[18px] font-medium'>7 Days <span className='font-bold'>FREE</span> Follow-up</span>
                                <span className='text-primary italic text-[10px] md:text-xs'>Terms & Conditions Apply</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceBanner