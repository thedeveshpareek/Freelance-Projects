import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Button from './Button'
import { Dialog, Menu } from '@headlessui/react'



import {
  ArrowPathIcon,
  Bars3BottomLeftIcon,
  Bars3CenterLeftIcon,
  Bars3Icon,
  PlusIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  DocumentChartBarIcon,

  Squares2X2Icon,
  FaceSmileIcon,
  UserIcon,
  CheckBadgeIcon,
  HomeIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon, PhotoIcon, UserGroupIcon, RectangleStackIcon, CogIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import LoginModal from '../Login/LoginModal'
import OtpModal from '../Login/OtpModal'


const about = [
  {
    name: 'About Us',
    href: '/aboutUs',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
  {
    name: 'Blogs',
    href: '/blog'
  },
  {
    name: 'Terms & Conditions',
    href: '/conditions'
  },
  {
    name: 'Privacy Policy',
    href: '/privacyPolicy'
  },
]

const women = [
  {
    name: 'Women  teen Care',
    href: '/service_age',
  },
  {
    name: 'Women Care 20-30',
    href: '/service_age',
  },
  {
    name: 'Women Care 30-40',
    href: '/service_age',
  },
  {
    name: 'Women Care 40-50',
    href: '/service_age'
  },
  {
    name: 'Women Care 50-60',
    href: '/service_age'
  }
]


const sidebarNavigation = [
  { name: 'Home', href: '/', icon: HomeIcon, current: false },
  { name: 'Order', href: '#', icon: Squares2X2Icon, current: false },
  { name: 'Service', href: '#', icon: PhotoIcon, current: true },
  { name: 'Medical Records', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Active Subscription', href: '#', icon: RectangleStackIcon, current: false },
  { name: 'Chat', href: '#', icon: CogIcon, current: false },
  { name: 'Blogs', href: '#', icon: CogIcon, current: false },
  { name: 'Contact US', href: '#', icon: CogIcon, current: false },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Sign out', href: '#' },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = ({ variant }) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [otpOpen, setOtpOpen] = useState(false)

  return (

    <>
      {/* Mobile menu */}
      <div className="flex h-full">
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-1 right-0 -mr-14 p-1">
                      <div
                        type="button"
                        className="flex h-12 w-12 items-center justify-center rounded-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >

                      </div>
                    </div>
                  </Transition.Child>

                  <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                    <nav className="flex h-full flex-col">
                      <div className="space-y-4">
                        {/* Mobile Menu */}

                        <div>
                          <img src='/logo/logo.svg' className='h-16 mx-auto' />
                        </div>

                        <hr />

                        <div className='pt-3'>
                          <Link href='/' passHref legacyBehavior>
                            <a className="text-textSmall font-medium text-gray-900  font-raleway flex gap-2 items-center">
                              <HomeIcon className='h-5 w-5 text-primary' />
                              Home
                            </a>
                          </Link>
                        </div>

                        <div>
                          <Link href="/aboutUs" passHref legacyBehavior>
                            <a className="text-textSmall font-medium text-gray-900  font-raleway  flex gap-2 items-center">
                              <FaceSmileIcon className='h-5 w-5 text-primary' />
                              For Girl's Parents
                            </a>
                          </Link>
                        </div>

                        <div>
                          <Popover className="relative">
                            {({ open }) => (
                              <>
                                <Popover.Button
                                  className={classNames(
                                    open ? 'text-gray-900 text-textSmall font-medium' : 'text-gray-900',
                                    'group inline-flex items-center rounded-md text-textSmall bg-transparent text-base font-medium hover:text-gray-900 focus: outline-none'
                                  )}
                                >
                                   <UserIcon className='h-5 w-5 mr-2 text-primary'/><span className='text-textSmall font-medium text-gray-900  font-raleway'>For Women</span>
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? 'text-gray-600' : 'text-gray-400',
                                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0 translate-y-1"
                                  enterTo="opacity-100 translate-y-0"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100 translate-y-0"
                                  leaveTo="opacity-0 translate-y-1"
                                >
                                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-[30vh] -translate-x-1/2 transform px-2 sm:px-0">
                                    <div className="overflow-hidden rounded-lg shadow-lg">
                                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                        {women.map((item) => (
                                          <a key={item.name} href={item.href} className="-m-3 block rounded-md p-1">
                                            <p className="text-base font-normal text-gray-600 border-b border-gray-300">{item.name}</p>
                                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        </div>

                        <div>
                          <Link href="/service" passHref legacyBehavior>
                            <a className="text-textSmall font-medium text-gray-900 font-raleway  flex gap-2 items-center">
                              <CheckBadgeIcon className='h-5 w-5 text-primary' />
                              Services
                            </a>
                          </Link>
                        </div>

                        <div>
                          <Link href="/blog" passHref legacyBehavior>
                            <a className="text-textSmall font-medium text-gray-900  font-raleway  flex gap-2 items-center">
                              <DocumentChartBarIcon className='h-5 w-5 text-primary' />
                              Blogs
                            </a>
                          </Link>
                        </div>

                        <div>
                          <Link href="/career" passHref legacyBehavior>
                            <a className="text-textSmall font-medium text-gray-900  font-raleway  flex gap-2 items-center">
                              <UserIcon className='h-5 w-5 text-primary' />
                              Career
                            </a>
                          </Link>
                        </div>

                        <div>
                          {/* <Link href="/aboutUs" passHref legacyBehavior>
                            <a className="text-textSmall font-medium text-gray-900  font-raleway  flex gap-2 items-center">
                              <UserIcon className='h-5 w-5 text-primary'/>
                              For Women
                            </a>
                          </Link> */}
                          <Popover className="relative">
                            {({ open }) => (
                              <>
                                <Popover.Button
                                  className={classNames(
                                    open ? 'text-gray-900 text-textSmall font-medium' : 'text-gray-900',
                                    'group inline-flex items-center rounded-md text-textSmall bg-transparent text-base font-medium hover:text-gray-900 focus: outline-none'
                                  )}
                                >
                                   <CalendarIcon className='h-5 w-5 mr-2 text-primary'/><span className='text-textSmall font-medium text-gray-900  font-raleway'>About Us</span>
                                  <ChevronDownIcon
                                    className={classNames(
                                      open ? 'text-gray-600' : 'text-gray-400',
                                      'ml-2 h-5 w-5 group-hover:text-gray-500'
                                    )}
                                    aria-hidden="true"
                                  />
                                </Popover.Button>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0 translate-y-1"
                                  enterTo="opacity-100 translate-y-0"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100 translate-y-0"
                                  leaveTo="opacity-0 translate-y-1"
                                >
                                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-[30vh] -translate-x-1/2 transform px-2 sm:px-0">
                                    <div className="overflow-hidden rounded-lg shadow-lg">
                                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                        {about.map((item) => (
                                          <a key={item.name} href={item.href} className="-m-3 block rounded-md p-1">
                                            <p className="text-base font-normal text-gray-600 border-b border-gray-300">{item.name}</p>
                                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                          </a>
                                        ))}
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        </div>

                      </div>


                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>

      {/* New Header */}

      <div className='main__padding'>
        <Popover className="relative bg-transparent">
          <div className="flex items-center justify-between py-6  lg:justify-start md:space-x-2">

            <div className="-my-2 -mr-2 lg:hidden">
              <button onClick={() => { setMobileMenuOpen(true) }} className="inline-flex items-center justify-center rounded-md  text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-transparent">
                {/* <span className="sr-only">Open menu</span> */}
                <Bars3CenterLeftIcon className="h-8 w-8 text-primary" aria-hidden="true" />
              </button>
            </div>

            <div>
              <a href="#" className="flex">
                {/* <span className="sr-only">Your Company</span> */}
                <img
                  className="h-12 w-auto sm:h-16 md:pr-7 focus:outline-none"
                  src="/logo/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className='block lg:hidden'>
              <img src='/images/image/profile.png' alt='Profile Image' />
            </div>

            <div className="hidden lg:flex md:flex-1 md:items-center md:justify-between">
              <Popover.Group as="nav" className="flex space-x-10">

                <Link href='/' passHref legacyBehavior>
                  <a className="text-textSmall font-medium text-gray-900  font-raleway">
                    Home
                    <div className='bg-primary h-[2px] w-[25px]'></div>
                  </a>
                </Link>


                <Link href="/aboutUs" passHref legacyBehavior>
                  <a className="text-textSmall font-medium text-gray-900  font-raleway">
                    For Girl's Parents
                  </a>
                </Link>


                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900 text-textSmall font-medium' : 'text-gray-900',
                          'group inline-flex items-center rounded-md text-textSmall bg-transparent text-base font-medium hover:text-gray-900 focus: outline-none'
                        )}
                      >
                        <span className='text-textSmall font-medium text-gray-900  font-raleway'>For Women</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-[30vh] -translate-x-1/2 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {women.map((item) => (
                                <a key={item.name} href={item.href} className="-m-3 block rounded-md p-1">
                                  <p className="text-base font-normal text-gray-600 border-b border-gray-300">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a href="/service" className="text-textSmall font-medium text-gray-900  font-raleway">
                  Services
                </a>

                <a href="/blog" className="text-textSmall font-medium text-gray-900  font-raleway">
                  Blogs
                </a>

                <a href="/career" className="text-textSmall font-medium text-gray-900  font-raleway">
                  Career
                </a>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900 text-textSmall font-medium' : 'text-gray-900',
                          'group inline-flex items-center rounded-md text-textSmall bg-transparent text-base font-medium hover:text-gray-900 focus: outline-none'
                        )}
                      >
                        <span className='text-textSmall font-medium text-gray-900  font-raleway'>About Us</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-[30vh] -translate-x-1/2 transform px-2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg">
                            <div className="relative grid gap-6 bg-white z-99 px-5 py-6 sm:gap-8 sm:p-8">
                              {about.map((item) => (
                                <a key={item.name} href={item.href} className="-m-3 block rounded-md p-1 ">
                                  <p className="text-base font-normal text-gray-600 border-b border-gray-300">{item.name}</p>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="flex items-center md:ml-12">
                <Button buttonText='Login/SignUp' onClick={() => { setOpen(true) }} />
              </div>
            </div>
          </div>


        </Popover>
      </div>





      <LoginModal open={open} setOpen={setOpen} setOtpOpen={setOtpOpen} />
      <OtpModal otpOpen={otpOpen} setOtpOpen={setOtpOpen} />

    </>


  )
}

export default Header