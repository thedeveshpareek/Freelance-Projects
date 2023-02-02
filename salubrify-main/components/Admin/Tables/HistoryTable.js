import React from 'react'
import Chips from '../../common/Chips/index'

const people = [
    { consultation: 'Period & pain ', date: '25-April-2022 5:00pm', attended: 'Dr Charu singh', amount: '650/-', status: 'paid', invoice: '' },
    { consultation: 'Period & pain ', date: '25-April-2022 5:00pm', attended: 'Dr Charu singh', amount: '650/-', status: 'paid', invoice: '' },
    { consultation: 'Period & pain ', date: '25-April-2022 5:00pm', attended: 'Dr Charu singh', amount: '650/-', status: 'paid', invoice: '' },
    { consultation: 'Period & pain ', date: '25-April-2022 5:00pm', attended: 'Dr Charu singh', amount: '650/-', status: 'paid', invoice: '' },
]

const historyTable = () => {

    return (
        <div>
            <div className="mt-8  md:mt-4 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="main__table-heading text-left"
                                    >
                                        Consultation
                                    </th>
                                    <th scope="col" className="main__table-heading  text-left">
                                        Date & Time
                                    </th>
                                    <th scope="col" className="main__table-heading text-left">
                                        Attended By
                                    </th>
                                    <th scope="col" className="main__table-heading text-left">
                                        Amount
                                    </th>
                                    <th scope="col" className="main__table-heading text-left">
                                        Status
                                    </th>
                                    <th scope="col" className="main__table-heading text-left">
                                        <span>Invoice</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {people.map((person) => (
                                    <tr>
                                        <td className="main__table-data">
                                            {person.consultation}
                                        </td>
                                        <td className="main__table-data">{person.date}</td>
                                        <td className="main__table-data">{person.attended}</td>
                                        <td className="main__table-data">{person.amount}</td>
                                        <td className="main__table-data">
                                            <Chips textColor='black' buttonText='Paid' buttonVariant='#77ffe2'/>
                                        </td>
                                        <td className="relative main__table-data">
                                            <a href="#" className="text-primary 
                                            border-b-[1px] border-primary font-semibold">
                                                Download Invoice<span className="sr-only">, {person.name}</span>
                                            </a>
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

export default historyTable