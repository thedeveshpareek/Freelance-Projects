import React from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import SimpleButton from './Button/SimpleButton'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-darkGray text-gray-200 p-4 pb-24 md:pb-10'>

      <div className='container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2'>
        {/* Footer Left Section */}
        <div className='flex gap-8 mt-10 md:block'>
          <img src='/logo/footerlogo.svg' className='h-20 md:h-28' />

          <div className='text-sm text-white md:mt-5'>
            <div className='flex md:block gap-7 items-center'>
              Follow Us

              <div className='flex gap-2  md:mt-2 md:mb-10'>
                <img src='/images/svg/Facebook.svg' alt='fb icon'/>
                <img src='/images/svg/instagram.svg' alt='instagram icon'/>
                <img src='/images/svg/twitter.svg' alt='twitter icon'/>
              </div>
            </div>

            <div>
              <p className='flex gap-3 items-center mt-3 py-0.5'>
                <EnvelopeIcon className='h-4 w-4' />Contact@Salubrify.in
              </p>
              <p className='flex gap-3 items-center py-0.5'>
                <PhoneIcon className='h-4 w-4' />01140845292
              </p>
            </div>

          </div>

        </div>

        {/* Footer right  Section*/}
        <div>
          <div className='mt-10 grid grid-cols-2 md:grid-cols-2 gap-4'>
            <div>
              <h6>Service</h6>
              <ul className='text-xs md:text-sm text-gray-300 mt-4 leading-6'>
                <li>Mental Health</li>
                <li>Puberty</li>
                <li>Protection From Social Media</li>
                <li>Healthy Diet</li>
                <li>Parenting Tips</li>
              </ul>

            </div>
            <div>
              <h6>Company</h6>
              <ul className='text-xs md:text-sm text-gray-300 mt-4 leading-6'>
                <li>
                  <Link href='/contact' passHref legacyBehavior>
                  <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href='/career' passHref legacyBehavior>
                  <a>Career</a>
                  </Link>
                </li>
                <li>
                  <Link href='/privacyPolicy' passHref legacyBehavior>
                  <a>Privacy Policies</a>
                  </Link>
                </li>
                <li>
                  <Link href='/faq' passHref legacyBehavior>
                  <a>FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href='/conditions' passHref legacyBehavior>
                  <a>Terms & Condition</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className='mt-10 text-xs md:text-sm'>Subscribe to Our Newsletter</h6>
            <div className='md:flex mt-3'>
              <input className='mb-5 w-full max-w-sm rounded-2xl bg-secondary p-3 text-sm mr-4 text-gray-900' placeholder='Enter Your Email...' />
              <SimpleButton buttonText='Subscribe'/>
            </div>
          </div>
        </div>
      </div>

      <h6 className='text-center mt-10 text-xs md:text-sm'> &copy; 2022. Salubrify HealthPlus</h6>


    </div>
  )
}

export default Footer