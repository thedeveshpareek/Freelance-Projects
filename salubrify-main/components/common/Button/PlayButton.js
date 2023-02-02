import React from 'react'
import PlayIcon from '@heroicons/react/24/solid/PlayIcon'

const PlayButton = () => {
    return (
        <button className={`border-none rounded-full text-white bg-primary`} style={{
            boxShadow: '0px 10px 17px -6px #FF4D80',
        }}>
            <div className='h-full w-full p-3 rounded-full' style={{ boxShadow: 'inset 2.98041px 2.98041px 5.96081px #FF4D80' }}>
                <PlayIcon className='h-6 w-6'/>
            </div>
        </button>
    )
}

export default PlayButton