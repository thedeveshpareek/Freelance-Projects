import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '../common/Button/largeButton'
import Link from 'next/link'

const OtpModal = ({ otpOpen, setOtpOpen }) => {
    return (
        <Transition.Root show={otpOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOtpOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-secondary px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <div>

                                    <div>
                                        <h5 className='font-semibold text-xl'>Enter OTP</h5>
                                        <p className='text-center mt-5'>Please enter the code Sent to you on 9115512073</p>
                                        <div className='flex gap-4 justify-between mt-8'>
                                            <input className='bg-[#E6DDDF] w-10 h-12 rounded-md' />
                                            <input className='bg-[#E6DDDF] w-10 h-12 rounded-md' />
                                            <input className='bg-[#E6DDDF] w-10 h-12 rounded-md' />
                                            <input className='bg-[#E6DDDF] w-10 h-12 rounded-md' />
                                            <input className='bg-[#E6DDDF] w-10 h-12 rounded-md' />
                                            <input className='bg-[#E6DDDF] w-10 h-12 rounded-md' />
                                        </div>
                                        <div className='my-10 text-center'>
                                            <Link href='/admin/order' passHref legacyBehavior>
                                                <a>
                                                    <Button buttonText='Continue' />
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>


                                <p className='mt-5 text-center text-primary'>
                                    GET OTP ON CALL
                                </p>
                                <p className='mt-5 text-center text-gray-400'>
                                    Didn’t receive OTP? <br />
                                    <span className='text-primary'>Resend</span>
                                </p>

                                <p className='mt-5 text-center text-[#6A6A6A]'>Having trouble logging in?</p>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default OtpModal