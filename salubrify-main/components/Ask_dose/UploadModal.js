import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '../common/Button/largeButton'
import { ArrowUpOnSquareIcon, CameraIcon, PhotoIcon } from '@heroicons/react/24/outline'



const UploadModal = ({ open, setOpen }) => {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-2xl bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                <Dialog.Title as="h3" className="text-xl font-playfair font-bold leading-6 text-gray-900 text-center">
                                    Upload Prescription
                                </Dialog.Title>
                                <div className='grid grid-cols-3 gap-3 mt-5'>
                                    
                                    <div className='border-[1px] border-primary_blue rounded-md px-5 py-3 flex gap-3 text-primary_blue'>
                                        <CameraIcon className='h-6 w-6' />
                                        <p>PDF</p>
                                    </div>
                                    <div className='border-[1px] border-primary_blue rounded-md px-5 py-3 flex gap-3 text-primary_blue'>
                                        <ArrowUpOnSquareIcon className='h-6 w-6' />
                                        <p>PDF</p>
                                    </div>
                                    <div className='border-[1px] border-primary_blue rounded-md px-5 py-3 flex gap-3 text-primary_blue'>
                                        <PhotoIcon className='h-6 w-6' />
                                        <p>PDF</p>
                                    </div>
                                </div>

                                <div className='text-primary_blue text-center mt-5 '>
                                    <span className='border-b  border-primary_blue'>Dont't Have a Prescription</span>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default UploadModal