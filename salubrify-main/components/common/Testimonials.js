import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial_card from '../Testimonials/Testimonial_card'
import { UpperCircleElement } from '../../assets';

const testimonials = [
  { name: 'Amanda Smith', profile: 'Freelance designer', msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos”.', rating: '4.5/5', type: 'Google Review', image: '/images/image/doctor.png' },
  { name: 'Amanda Smith', profile: 'Freelance designer', msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos”.', rating: '4.5/5', type: 'Google Review', image: '/images/image/doctor.png' },
  { name: 'Amanda Smith', profile: 'Freelance designer', msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos”.', rating: '4.5/5', type: 'Google Review', image: '/images/image/doctor.png' },
  { name: 'Amanda Smith', profile: 'Freelance designer', msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos”.', rating: '4.5/5', type: 'Google Review', image: '/images/image/doctor.png' },
  { name: 'Amanda Smith', profile: 'Freelance designer', msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos”.', rating: '4.5/5', type: 'Google Review', image: '/images/image/doctor.png' },
  { name: 'Amanda Smith', profile: 'Freelance designer', msg: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos”.', rating: '4.5/5', type: 'Google Review', image: '/images/image/doctor.png' },
]

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2.5,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },

  ]
};


const Testimonials = () => {
  return (
    <div className='p-5'>
      <div className='relative'>
      <div className="absolute left-0 global__rotate-animation top-28 hidden lg:block">
          <UpperCircleElement height={200} width={200} />
        </div>
      <div className='py-6 md:py-10 lg:py-16'>
        <div className='md:px-10'>
          <h2 className='text-xl md:text-2xl lg:text-[32px] font-playfair tracking-wide font-bold text-center text-gray-800'>Testimonials</h2>
          <div>
            <Slider {...settings}>
              {testimonials.map((testimonial) => (
                <Testimonial_card testimonial={testimonial} />
              ))}
            </Slider>

          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Testimonials