import React, { useState } from 'react'
import { BlueCircleElement } from '../../assets'
import Button from '../common/Button/index_blue'
import UploadModal from './UploadModal'

const Banner = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
    <div className='main__padding'>
      <div>
        <div className='flex gap-6 items-center'>

          {/* Main Banner Section */}
          <div className='md:w-1/2'>
            <div className=''>
              <h1 className='font-playfair lg:text-5xl font-bold tracking-wider'>Work the way that Ask Dose</h1>
              <p className='lg:text-2xl font-raleway mt-2 mb-5 md:max-w-lg'>AskDose is a simple, convenient and secure solution for patients tp double-check the dose of their medication </p>

              <Button buttonText='Upload Prescription' onClick={()=>{setOpen(true)}} />
            </div>
          </div>

          <div className='md:w-1/2 hidden md:block flex justify-center'>
            <div style={{
              backgroundImage: 'url(/images/svg/blob2.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
              
              <img src='/images/image/doctor1.png' style={{
                height: '25rem',
                position: 'relative',
                top: '-2rem',
                left:'0.5rem'
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>

    <UploadModal open={open} setOpen={setOpen} />
    </>
  )
}

export default Banner