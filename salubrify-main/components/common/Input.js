import React from 'react'

const Input = ({ inputText }) => {
    return (
        <div className="mt-1">
            <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder={inputText}
                className="block h-full w-full rounded-lg border-gray-300 shadow-sm focus:border-0 font-normal text-sm md:text-lg px-4 py-2 focus:outline-none"
                style={{ border: '1px solid #ABABAB' }}
            />
        </div>
    )
}

export default Input