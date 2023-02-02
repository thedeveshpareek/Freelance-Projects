import React from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const BlogCard = ({ blog }) => {

    return (
        <div className='p-3 max-w-xs mx-auto bg-white bx rounded-xl hover:shadow-xl hover:shadow-pink-200 duration-200'>
            <img src='/images/image/blog.png' alt='Blog Article Image' className='w-full' />

            <div className='p-1 font-inter'>
                <p className='mt-2 font-medium text-[#666666] text-sm lg:text-base'>{blog.date}</p>
                <p className='mt-2 text-base font-medium text-[#252525]'>{blog.title}</p>
                <p className='text-primary font-medium text-xs md:text-base  mt-4 gap-1 underline underline-offset-4'>
                    <Link href='/blog' passHref legacyBehavior>
                        <a className='flex items-center'>
                            Read Complete Article
                            <ArrowUpRightIcon className='h-5 w-5' />
                        </a>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default BlogCard