import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Button from '../common/Button/largeButton'

const BookNowModal = ({open, setOpen}) => {

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
                                <div>

                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-xl font-playfair font-bold leading-6 text-gray-900">
                                            Choose Patient
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <div>
                                                {/* Doctor 1 */}
                                                <div className="flex items-center border-[1px] border-gray-200 p-2 rounded-lg mt-3">
                                                    <div>
                                                        <img
                                                            className="inline-block h-16 w-16 rounded-full"
                                                            src="/images/image/team4.png"
                                                            alt="Doctor Image"
                                                        />
                                                    </div>

                                                    <div className="ml-3">
                                                        <p className="text-lg lg:text-lg font-semibold text-black text-left">Anita Jiarwan</p>
                                                        <p className="text-base font-raleway font-sm text-[#868686] group-hover:text-gray-700">Female, 7985642130.</p>
                                                    </div>
                                                </div>
                                               

                                                {/* Doctor 2 */}
                                                <div className="flex items-center border-[1px] border-gray-200 p-2 rounded-lg mt-3">
                                                    <div>
                                                        <img
                                                            className="inline-block h-16 w-16 rounded-full"
                                                            src="/images/image/team2.png"
                                                            alt="Doctor Image"
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-lg lg:text-lg font-semibold text-black text-left">Dr Ria Nayyar</p>
                                                        <p className="text-base font-raleway font-sm text-[#868686] text-left group-hover:text-gray-700">Healthy Diet</p>
                                                    </div>
                                                </div>
                                                

                                                {/* Doctor 3 */}
                                                <div className="flex items-center border-[1px] border-gray-200 p-2 rounded-lg mt-3">
                                                    <div>
                                                        <img
                                                            className="inline-block h-16 w-16 rounded-full"
                                                            src="/images/image/team3.png"
                                                            alt="Doctor Image"
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-lg lg:text-lg font-semibold text-black text-left">Ms Sameer Manda</p>
                                                        <p className="text-base font-raleway font-sm text-[#868686] text-left group-hover:text-gray-700">Parenting Tips</p>
                                                    </div>
                                                </div>
                                                

                                                {/* Doctor 4 */}
                                                <div className="flex items-center border-[1px] border-gray-200 p-2 rounded-lg mt-3">
                                                    <div>
                                                        <img
                                                            className="inline-block h-16 w-16 rounded-full"
                                                            src="/images/image/team4.png"
                                                            alt="Doctor Image"
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-lg lg:text-lg font-semibold text-black text-left">Dr Charu Singh </p>
                                                        <p className="text-base font-raleway font-sm text-[#868686] text-left group-hover:text-gray-700">Period & Pain</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6 text-center">
                                    <Button buttonText='Continue'/>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default BookNowModal