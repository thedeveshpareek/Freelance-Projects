import React from 'react'
import Button from '../common/Button'

const ChatTeam = () => {
    return (
        <div className='bg-[#F9FAFB] font-inter bx p-8 mt-10 text-center rounded-lg'>
            <div className="flex justify-center -space-x-2 overflow-hidden">
                <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
                <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                />
                <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
            <h6 className='font-bold text-lg md:text-xl lg:text-2xl mt-5 text-gray-700'>Still have questions?</h6>
            <p className='mt-4 text-base md:text-lg lg:text-xl mb-5'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
            <Button buttonText='Contact Us' />
        </div>
    )
}

export default ChatTeam