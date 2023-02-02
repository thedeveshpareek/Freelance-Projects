import React from 'react'
import ServiceCard from '../Service/ServiceCard'
import Outlined from '../common/Button/Outlined'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const services = [
    { title: 'Period & Pain', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service1.png', price: 299 },
    { title: 'Healthy Diet', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service2.png', price: 299 },
    { title: 'Parenting Tips', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service3.png', price: 299 },
    { title: 'Get Healthy', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service4.png', price: 299 },
    { title: 'School and Mensuration', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service5.png', price: 299 },
    { title: 'Period & Pain', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service1.png', price: 299 },
    { title: 'Period & Pain', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service1.png', price: 299 },
    { title: 'Period & Pain', desc: 'Get a Consultation about period and Pain from our Experts', poster: '/images/image/service1.png', price: 299 },
]



const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.3,
    slidesToScroll: 4.3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4.3,
                slidesToScroll: 4.3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
            }
        },

    ]
};



const Services = () => {
    return (
        <div className='main__padding'>
            <h1 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800 my-4 md:py-4 lg:py-8 '>Our Services</h1>
            <div className=''>

                <Slider {...settings}>
                    {services.map((service) => (
                        <ServiceCard service={service} />
                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default Services