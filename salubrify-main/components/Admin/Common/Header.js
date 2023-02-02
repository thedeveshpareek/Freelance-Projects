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
  ShieldCheckIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  BookmarkSquareIcon,
  CalendarIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon, HomeIcon, PhotoIcon, UserGroupIcon, RectangleStackIcon, CogIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'


const about = [
  {
    name: 'About Us',
    href: '/aboutUS',
  },
  {
    name: 'Contact Us',
    href: '#',
  },
  {
    name: 'FAQ',
    href: '#',
  },
  {
    name: 'Blogs',
    href: '#'
  },
  {
    name: 'Terms & Conditions',
    href: '#'
  },
  {
    name: 'Privacy Policy',
    href: '#'
  },
]

const women = [
  {
    name: 'Women  teen Care',
    href: '#',
  },
  {
    name: 'Women Care 20-30',
    href: '#',
  },
  {
    name: 'Women Care 30-40',
    href: '#',
  },
  {
    name: 'Women Care 40-50',
    href: '#'
  },
  {
    name: 'Women Care 50-60',
    href: '#'
  }
]


const sidebarNavigation = [
  { name: 'Home', href: '/order', icon: HomeIcon, current: false },
  { name: 'Order', href: '/order', icon: Squares2X2Icon, current: false },
  { name: 'Service', href: '#', icon: PhotoIcon, current: true },
  { name: 'Medical Records', href: '/records', icon: UserGroupIcon, current: false },
  { name: 'Active Subscription', href: '/active', icon: RectangleStackIcon, current: false },
  { name: 'Chat', href: '/chat', icon: CogIcon, current: false },
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
      <div className="flex h-full">
        {/* Mobile menu */}
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
                      <button
                        type="button"
                        className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        <span className="sr-only">Close sidebar</span>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 items-center p-10" style={{ backgroundImage: 'url(/images/image/menu.png)' }}>
                    <img
                      className="h-16 w-16"
                      src="/images/image/profile3.png"
                      alt="Your Company"
                    />

                    <p className='mt-2 text-white font-semibold font-raleway'>Anna Dietano</p>

                    <p className='text-xs text-white font-normal font-raleway'>annadietano@gmail.com</p>
                  </div>

                  <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                    <nav className="flex h-full flex-col">
                      <div className="space-y-1">
                        {sidebarNavigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? ' text-primary'
                                : 'text-primary hover:text-primary',
                              'group py-2 px-3 rounded-md flex items-center text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            <item.icon
                              className={classNames(
                                item.current ? 'text-gray-500' : 'text-gray-500 group-hover:text-white',
                                'mr-3 h-6 w-6'
                              )}
                              aria-hidden="true"
                            />
                            <span>{item.name}</span>
                          </a>
                        ))}
                      </div>
                      <div className='px-4 mt-7'>
                        <p className='text-gray-500 text-sm'>Term & Conditions </p>
                        <p className='text-gray-500 text-sm mt-3'>Privacy Policies </p>
                        <p className='text-gray-500 text-sm mt-3'>Career </p>
                      </div>

                      <div className='px-4 mt-7'>
                        <p className='text-gray-500 text-sm'>Logout</p>
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
          <div className="flex items-center justify-between py-6  lg:justify-start lg:space-x-2">

            <div className="-my-2 -mr-2 lg:hidden">
              <button onClick={() => { setMobileMenuOpen(true) }} className="inline-flex items-center justify-center rounded-md  text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:bg-transparent">
                {/* <span className="sr-only">Open menu</span> */}
                <Bars3CenterLeftIcon className="h-8 w-8 text-primary" aria-hidden="true" />
              </button>
            </div>

            <div>
              <a href="#" className="flex">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-12 w-auto sm:h-16 md:pr-7"
                  src="logo/logo.svg"
                  alt=""
                />
              </a>
            </div>

            <div className='block lg:hidden'>
              <img src='images/image/profile.png' alt='Profile Image' />
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
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
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
                <Button buttonText='Login/SignUp' onClick={() => { console.log("this is signup button"); setOpen(true) }} />
              </div>
            </div>
          </div>


        </Popover>
      </div>
    </>


  )
}

export default Header