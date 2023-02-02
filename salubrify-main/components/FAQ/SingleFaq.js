import React from 'react'
import { Disclosure } from '@headlessui/react';
import MinusCircleIcon from '@heroicons/react/24/outline/MinusCircleIcon'
import PlusCircleIcon from '@heroicons/react/24/outline/PlusCircleIcon'

const SingleFaq = ({faq}) => {

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


    return (
        <div>
            <Disclosure as="div" key={faq.question} className="py-6">
                {({ open }) => (
                    <>
                        <dt className="text-lg">
                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400 focus:outline-none">
                                <span className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 font-inter">{faq.question}</span>
                                <span className="ml-6 flex h-7 text-primary">
                                    {open?
                                    <MinusCircleIcon
                                        className={classNames(open ? '-rotate-180' : 'rotate-0', 'iconSmall transform')}
                                        aria-hidden="true"
                                    />:<PlusCircleIcon
                                    className={classNames(open ? '-rotate-180' : 'rotate-0', 'iconSmall transform')}
                                    aria-hidden="true"
                                />}
                                </span>
                            </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="pr-12 mt-2">
                            <p className=" text-sm md:text-[16px] lg:text-[18px] text-lightGray font-inter">{faq.answer}</p>
                        </Disclosure.Panel>
                        <hr className='mt-2 md:mt-3 lg:mt-5'/>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

export default SingleFaq