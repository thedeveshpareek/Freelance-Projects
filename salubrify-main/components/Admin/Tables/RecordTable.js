import React from 'react'
import Chips from '../../common/Chips/index'

const people = [
    { consultation: 'Period & pain ', date: '25-April 5:00pm', attended: 'Dr Charu singh', amount: '650/-', status: 'paid', invoice: '' },
    { consultation: 'Period & pain ', date: '25-April 5:00pm', attended: 'Dr Charu singh', amount: '650/-', status: 'paid', invoice: '' },
    { consultation: 'Period & pain ', date: '25-April 5:00pm', attended: 'Dr Charu singh', amount: '650/-', status: 'paid', invoice: '' },
    { consultation: 'Period & pain ', date: '25-April 5:00pm', attended: 'Dr Charu singh', amount: '650/-', status: 'paid', invoice: '' },
]

const recordTable = () => {
    return (
        <div>
            <div className="mt-8  md:mt-4 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th

                                        className="main__table-heading text-center"
                                    >
                                        Consultation
                                    </th>
                                    <th className="main__table-heading text-center hidden md:block">
                                        Date & Time
                                    </th>
                                    <th className="main__table-heading text-center">
                                        Attended By
                                    </th>
                                    <th className="main__table-heading text-center">
                                        Status
                                    </th>
                                    <th className="main__table-heading text-center">
                                        <span>Prescription</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {people.map((person) => (
                                    <tr className='text-center'>
                                        <td className="main__table-data ">
                                            {person.consultation}<br/>
                                            <span className='block md:hidden text-[#7D7D7D] text-[10px]'>{person.date}</span>
                                        </td>
                                        <td className="main__table-data">{person.date}</td>
                                        <td className="main__table-data hidden md:block">
                                            <span className='border-b-[1px] border-gray-600'>{person.attended}</span></td>
                                        <td className="main__table-data">
                                            <Chips textColor='black' buttonText='Paid' buttonVariant='#77ffe2' />
                                        </td>
                                        <td className="relative main__table-data text-center">
                                            <a href="#" className="md:block hidden text-primary 
                                             font-semibold">
                                                <span className='border-b-[1px] border-primary'>Download Prescription</span>
                                            </a>

                                            <div className='flex justify-center md:hidden'>
                                                <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.66671 4H7.00004V0H3.00004V4H0.333374L5.00004 8.66667L9.66671 4ZM0.333374 10V11.3333H9.66671V10H0.333374Z" fill="#EB1754" />
                                                </svg>
                                            </div>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default recordTable