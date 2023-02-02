import React from 'react'

const formInput = ({inputText}) => {
    return (
            <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder={inputText}
                autoComplete="given-name"
                className="bg-[#F7EDF0] text-[#999999] text-[10px] sm:text-sm md:text-base p-2 w-full rounded-md md:rounded-lg focus:outline-none"
            />
    )
}

export default formInput