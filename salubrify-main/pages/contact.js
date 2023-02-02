import React from 'react'
import Header from '../components/common/Header'
import CardContainer from '../components/Contact/CardContainer'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/common/Footer'

const contact = () => {
    return (
        <>
            <div className='main__bottomPadding'>
                <div className='bg-white sm:bg-secondary'>
                    <Header />
                    <CardContainer />
                </div>
                <ContactForm />
            </div>
            <Footer/>
        </>
    )
}

export default contact