import React from 'react'


const people = [
    { relation: 'Mother', name: 'Artha Gotu', age: '28', mobile: '+91-94561230' },
    { relation: 'Mother in Law', name: 'Artha Gotu', age: '28', mobile: '+91-94561230' },
    { relation: 'Daughter', name: 'Artha Gotu', age: '28', mobile: '+91-94561230' },
    { relation: 'Sister', name: 'Artha Gotu', age: '28', mobile: '+91-94561230' },
    { relation: 'Sister in law', name: 'Artha Gotu', age: '28', mobile: '+91-94561230' },
]



const familyTable = () => {
    return (
        <div>
            <div className='w-full h-[1px]  my-6 md:mb-6 bg-[#fbc9d7]'></div>

            <table className="min-w-full divide-y divide-[#fbc9d7] table">
                <thead className='text-left'>
                    <tr>
                        <th className="main__table-heading w-1/4">
                            Relation
                        </th>
                        <th className="main__table-heading  w-1/4">
                            Name
                        </th>
                        <th className="main__table-heading  w-1/4">
                            Age
                        </th>
                        <th className="main__table-heading  w-1/4">
                            Mobile Number
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#fbc9d7]">
                    {people.map((person) => (
                        <tr>
                            <td className="main__table-data w-1/4">
                                {person.relation}
                            </td>
                            <td className="main__table-data w-1/4">{person.name}</td>
                            <td className="main__table-data w-1/4">{person.age}</td>
                            <td className="main__table-data w-1/4">{person.mobile}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default familyTable