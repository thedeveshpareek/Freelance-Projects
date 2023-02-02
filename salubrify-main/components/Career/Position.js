import React from 'react'
import PositionCard from './PositionCard'

const position = [
    { title: 'Nutrition Consultantant', type: 'Remote' },
    { title: 'Nutrition Consultantant', type: 'Remote' },
    { title: 'Nutrition Consultantant', type: 'Remote' },
    { title: 'Nutrition Consultantant', type: 'Remote' },
    { title: 'Nutrition Consultantant', type: 'Remote' },
    { title: 'Nutrition Consultantant', type: 'Remote' },
]

const Position = () => {
    return (
        <div className='main__padding py-16'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <div className='md:w-1/5'>
                        <h4 className='font-roboto md:font-playfair font-bold text-lg md:text-xl lg:text-3xl text-gray-800'>Open Position </h4>
                        <p className='text-base text-gray-500 mt-2'>Find out the Open Position Available for US</p>
                    </div>
                    <div className='md:w-4/5 grid grid-cols-2 sm:grid-cols-3 gap-4'>

                        {position.map(() => (
                            <PositionCard />
                        ))}

                    </div>
                </div>
        </div>
    )
}

export default Position