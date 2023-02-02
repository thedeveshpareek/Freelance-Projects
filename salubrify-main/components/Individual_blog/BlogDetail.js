import React from 'react'
import Consultation from './Consultation'

const BlogDetail = () => {
    return (

        <div className='mt-6 sm:mt-8 lg:mt-12'>
            <div className='container mx-auto max-w-6xl main__padding'>
                <h2 className='font-roboto lg:text-[32px] md:text-2xl text-xl font-bold text-[#4C4C4C]'>
                    How to Reduce Period Pain
                </h2>

                <p className='main__text mt-3 lg:mt-5'>
                    Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className='main__text mt-3 lg:mt-5'>
                    Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla.
                </p>

                <div className='my-4 md:my-6 lg:my-8'>
                    <img src='/images/image/img2.png' alt='Image' className='w-[20rem] h-[15rem] sm:w-[26rem] sm:h-[18rem] lg:w-[34rem] lg:h-[22rem] mx-auto' />
                    <p className='mx-auto max-w-sm font-inter text-base text-center mt-3 hidden md:block text-[#252525]'>
                        Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height.
                    </p>
                </div>

                <div className='main__text'>
                    Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                    In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id.
                    Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.<br />

                    <p className='my-3'>
                        A list looks like this:
                    </p>
                    <p>
                        First item in the list <br />
                        Second item in the list lorem ipsum dolor sit amet nunc
                        felis dolor lorem ipsum sit amet <br />
                        Third item in the list <br />
                    </p>
                    <p className='mt-3'>
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                    </p>
                </div>
            </div>


            <div className='main__padding py-20 hidden md:block'>
                <Consultation />
            </div>

            <div className='container mx-auto max-w-6xl main__padding main__text'>
                Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id.
                Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.<br />
                <p className='my-3'>
                    A list looks like this:
                </p>
                <p>
                    First item in the list <br />
                    Second item in the list lorem ipsum dolor sit amet nunc
                    felis dolor lorem ipsum sit amet <br />
                    Third item in the list <br />
                </p>
                <p className='mt-3'>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula.
                </p>
            </div>
        </div >
    )
}

export default BlogDetail