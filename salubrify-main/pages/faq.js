import React from 'react'
import ChatTeam from '../components/common/ChatTeam'
import Header from '../components/common/Header'
import SingleFaq from '../components/FAQ/SingleFaq'
import Footer from '../components/common/Footer'

const faq = () => {

    const faqs = [
        { question: 'Is there a free trial available?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },

        { question: 'Can I change my plan later?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },

        { question: 'What is your cancellation policy?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },

        { question: 'Can other info be added to an invoice?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },

        { question: 'How does billing work?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },

        { question: 'How do I change my account email?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.' },
    ]


    return (
        <>
        <div className='bg-white md:bg-secondary main__bottomPadding'>
            <Header />
            <div className='main__padding'>
                {/* Top Section */}
                <div className='container mx-auto max-w-4xl mt-4 sm:mt-8 px-4'>
                    <h2 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800'>Frequently asked questions</h2>
                    <p className='text-center mt-3 font-inter font-normal text-lightGray text-sm md:text-xl lg:text-[22px]'>Everything you need to know about the Consultation</p>

                    <div className='mt-4 md:mt-10 lg:mt-20'>
                        {faqs.map((faq) => (
                            <SingleFaq faq={faq} />
                        ))}
                    </div>
                </div>
            </div>
            <ChatTeam />
        </div>
        <Footer/>
        </>
    )
}

export default faq