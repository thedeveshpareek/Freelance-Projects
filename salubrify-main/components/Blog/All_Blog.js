import { ArrowUpRightIcon, ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import Blog_Card from './Blog_Card'
import Newsletter from './Newsletter'

const All_Blog = () => {

    const blog = [
        { author: 'Alec Whitten', date: '17 Jan 2022', title: 'Puberty Changes In girls', desc: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?', poster: '/images/image/blog1.png' },
        { author: 'Demi WIlkinson', date: '16 Jan 2022', title: 'Puberty Changes In girls', desc: 'Mental models are simple expressions of complex  relationships.', poster: '/images/image/blog2.png' },
        { author: 'Candice Wu', date: '15 Jan 2022', title: 'Puberty Changes In girls', desc: 'Introduction to Wireframing and its Principles. Learn from the best in the industry.', poster: '/images/image/blog3.png' },
        { author: 'Natali Craig', date: '14 Jan 2022', title: 'Puberty Changes In girls', desc: 'Collaboration can make our teams stronger, and our individual designs better.', poster: '/images/image/blog4.png' },
    ]

    return (
        <>
            <div className='main__padding'>
                <h2 className='mt-10 sm:mt-12 md:mt-16 lg:mt-20 text-lg md:text-xl lg:text-2xl md:font-inter font-semibold text-black md:text-[#101828] font-raleway'>All Blogs</h2>

                {/* Container */}
                <div className='grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                    {blog.map((blog) => (
                        <Blog_Card blog={blog} />
                    ))}
                </div>
            </div>

            <hr className='mt-6 sm:mt-10 lg:mt-16 lg:mb-2 hidden sm:block' />

            <div className='hidden md:block'>
                {/* Pagination */}
                <div className="mt-5 flex items-center justify-between sm:px-6">

                    <div className="flex flex-1 items-center justify-center">
                        <div>
                            <nav className="isolate inline-flex -space-x-px rounded-md" aria-label="Pagination">
                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-l-md  bg-transparent px-2 py-2 text-sm font-medium font-inter text-[#667085] focus:z-20"
                                >
                                    <ArrowLongLeftIcon className="h-5 w-5 mr-3" aria-hidden="true" />
                                    <span>Previous</span>
                                </a>

                                <div className='px-5'>
                                    <a
                                        href="#"
                                        aria-current="page"
                                        className="relative z-10 inline-flex items-center border rounded-md px-2 py-2 text-sm font-medium focus:z-20"
                                        style={{ background: '#fcd3e0', color: '#EB1754' }}
                                    >
                                        1
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center   bg-transparent md:px-4 md:py-2 px-3 py-1 text-sm font-medium font-inter text-[#667085] hover:bg-gray-50 focus:z-20"
                                    >
                                        2
                                    </a>
                                    <a
                                        href="#"
                                        className="relative hidden items-center bg-transparent md:px-4 md:py-2 px-3 py-1 text-sm font-medium font-inter text-[#667085] hover:bg-gray-50 focus:z-20 md:inline-flex"
                                    >
                                        3
                                    </a>
                                    <span className="relative inline-flex items-center bg-transparent md:px-4 md:py-2 px-3 py-1 text-sm font-medium text-gray-700">
                                        ...
                                    </span>
                                    <a
                                        href="#"
                                        className="relative hidden items-center bg-transparent md:px-4 md:py-2 px-3 py-1 text-sm font-medium font-inter text-[#667085] hover:bg-gray-50 focus:z-20 md:inline-flex"
                                    >
                                        8
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center  bg-transparent md:px-4 md:py-2 px-3 py-1 text-sm font-medium font-inter text-[#667085] hover:bg-gray-50 focus:z-20"
                                    >
                                        9
                                    </a>
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center  bg-transparent md:px-4 md:py-2 px-3 py-1 text-sm font-medium font-inter text-[#667085] hover:bg-gray-50 focus:z-20"
                                    >
                                        10
                                    </a>
                                </div>

                                <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-r-md bg-transparent px-2 py-2 text-sm font-medium font-inter text-[#667085] hover:bg-gray-50 focus:z-20"
                                >
                                    <span>Next</span>
                                    <ArrowLongRightIcon className="h-5 w-5 ml-3" aria-hidden="true" />
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* Consultation */}
                <Newsletter />

            </div>

        </>
    )
}

export default All_Blog