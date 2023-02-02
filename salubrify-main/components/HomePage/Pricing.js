import React from 'react'
import StarIcon from '@heroicons/react/24/solid/StarIcon'
import { CheckIcon } from '@heroicons/react/24/outline'
import { UpperCircleElement } from '../../assets'

const Pricing = () => {

    const threeMonth = ['Pariatur quod similique', 'Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae']
    const annual = ['Pariatur quod similique', 'Sapiente libero doloribus', 'Vel ipsa esse repudiandae', 'Sapiente libero doloribus']

    const oneMonth = [
        'Quia rem est sed impedit magnam',
        'Dolorem vero ratione voluptates',
        'Qui sed ab doloribus voluptatem dolore',
        'Laborum commodi molestiae id et fugiat',
        'Nam ut ipsa nesciunt culpa modi dolor',
    ]

    return (
        <div className='bg-[#ffece5] px-4 py-10 md:p-20'>
            <div className='flex flex-col md:flex-row gap-6  container mx-auto items-center'>
                {/* Detail */}
                <div className='order-2 md:w-1/2 font-inter'>
                    <div>
                        <h3 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-gray-800'>Introducing Salubrify Plus</h3>
                        <p className='main__text mt-3'>
                            Now, moms will be relaxed as their daughter learn how to manage all the puberty issues that she might face during this stage of her life
                        </p>

                        <h6 className='mt-4 font-[600] text-lg'>Why Choose salubrify Plus </h6>

                        <div className='mt-4 main__text'>
                            <p className='flex gap-2'> <StarIcon className='h-6 w-6 text-gray-600' /> No fear, doubts and myths on puberty</p>

                            <p className='flex gap-2 mt-5'> <StarIcon className='h-6 w-6 text-gray-600' /> Health, beauty and fitness programs</p>

                            <p className='flex gap-2 mt-5'><StarIcon className='h-6 w-6 text-gray-600' /> Hygiene and body
                            </p>

                            <p className='flex gap-2 mt-5'> <StarIcon className='h-6 w-6 text-gray-600' /> Clothes for growing body- what to wear or use</p>

                            <p className='flex gap-2 mt-5'><StarIcon className='h-6 w-6 text-gray-600' /> Help her grow physically, psychologically and socially.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image section */}
                <div className='order-1 md:w-1/2 relative'>
                <div className="absolute -left-16 global__rotate-animation -top-16 hidden lg:block">
              <UpperCircleElement height={160} width={160} />
            </div>
            <div className="absolute -right-16 global__rotate-animation -bottom-16 -z-1 hidden lg:block">
              <UpperCircleElement height={160} width={160} />
            </div>
                    <img src='/images/image/img7.png' className='md:h-[60vh] mx-auto relative z-2' />
                </div>
            </div>

            <div className="mt-16 lg:mt-20">
                <div className="relative z-0">
                    <div className="absolute inset-0 h-5/6  lg:h-2/3" />
                    <div className="mx-auto max-w- 7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative lg:grid lg:grid-cols-7 gap-5">

                            {/* Card1 */}
                            <div className="mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200 duration-200">
                                <div className="flex  flex-col rounded-xl shadow-lg lg:rounded-xl lg:rounded-l-xl">
                                    <div className="flex flex-1 flex-col">
                                        <div className="bg-white px-6 py-6">
                                            <div className='index__pricing-plans2'>
                                                <h3 className="text-lg font-bold text-primary">
                                                    3 Month Plan
                                                </h3>

                                                <span className='index__pricing-plans2__badge'>
                                                    &#8377; 2000/Month
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 bg-white flex-col justify-between px-6 pb-6  ">
                                            <ul role="list" className="space-y-4">
                                                {threeMonth.map((feature) => (
                                                    <li key={feature} className="flex items-start ">
                                                        <div className="flex-shrink-0">
                                                            <CheckIcon className="h-6 w-6 flex-shrink-0 text-gray-500" aria-hidden="true" />
                                                        </div>
                                                        <p className="ml-3 text-base font-medium main__text">{feature}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-8">
                                                <div className="rounded-lg shadow-md">
                                                    <a
                                                        href="#"
                                                        className="block w-full rounded-lg border border-transparent bg-primary px-6 py-3 text-center text-base font-medium text-white"
                                                    >
                                                        Buy This Item
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card2 */}
                            <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200 duration-200">
                                <div className="relative z-10 rounded-xl shadow-xl">
                                    <div className="rounded-t-lg bg-white px-6 pt-6">
                                        <div className='index__pricing-plans'>
                                            <h3
                                                className="text-xl font-semibold tracking-tight text-primary"
                                                id="tier-growth"
                                            >
                                                1 Month Plan
                                            </h3>

                                            <span className='index__pricing-plans__badge'>
                                                &#8377; 2000/Month
                                            </span>
                                        </div>
                                    </div>
                                    <div className="rounded-b-lg bg-white px-6 pt-10 sm:px-10 ">
                                        <ul role="list" className="space-y-4">
                                            {oneMonth.map((feature) => (
                                                <li key={feature} className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        <CheckIcon className="h-6 w-6 flex-shrink-0 text-gray-500" aria-hidden="true" />
                                                    </div>
                                                    <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className='py-5 main__primaryText'>Check Fair Usage Policy of our Plan
                                        </p>
                                        <div>
                                            <div className="rounded-lg shadow-md">
                                                <a
                                                    href="#"
                                                    className="block w-full rounded-lg border border-transparent bg-primary px-6 py-4 text-center text-xl font-medium leading-6 text-white "
                                                    aria-describedby="tier-growth"
                                                >
                                                    Buy This Item
                                                </a>
                                            </div>

                                            <div className='flex text-primary pt-3'>
                                                <div className='text-center flex gap-4 mx-auto  px-10 bg-red-100 py-3 rounded-t-md'>
                                                    <StarIcon className='h-6 w-6' />
                                                    <h6 className='font-bold'>Popular</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            {/* Card3 */}
                            <div className="mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-200 duration-200">
                                <div className="flex  flex-col rounded-xl shadow-lg lg:rounded-xl lg:rounded-l-xl">
                                    <div className="flex flex-1 flex-col">
                                        <div className="bg-white px-6 py-6">
                                            <div className='index__pricing-plans2'>
                                                <h3 className="text-lg font-bold text-primary">
                                                    3 Month Plan
                                                </h3>
                                                
                                                <span className='index__pricing-plans2__badge'>
                                                    &#8377; 2000/Month
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 bg-white flex-col justify-between px-6 pb-6  ">
                                            <ul role="list" className="space-y-4">
                                                {annual.map((feature) => (
                                                    <li key={feature} className="flex items-start">
                                                        <div className="flex-shrink-0">
                                                            <CheckIcon className="h-6 w-6 flex-shrink-0 text-gray-500" aria-hidden="true" />
                                                        </div>
                                                        <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-8">
                                                <div className="rounded-lg shadow-md">
                                                    <a
                                                        href="#"
                                                        className="block w-full rounded-lg border border-transparent bg-primary px-6 py-3 text-center text-base font-medium text-white"
                                                    >
                                                        Buy This Item
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing