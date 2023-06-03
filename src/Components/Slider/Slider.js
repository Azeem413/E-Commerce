import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronRight } from 'react-icons/fa'; // Import the desired icon

function MySlider() {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640, // Breakpoint at 640px screen width
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Breakpoint at 768px screen width
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Breakpoint at 1024px screen width
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='slider-container'>
      <Slider {...settings} ref={sliderRef}>
        <div className='slider-item'>
          <img src='/images/slider-1.jpg' alt='Slide 1' />
        </div>
        {/* <div className='slider-item'>
          <img src='/images/slider-2.jpg' alt='Slide 2' />
        </div> */}
        <div className='slider-item h-fit '>
          <img src='/images/slider-3.jpg' alt='Slide 3' />
        </div>
        {/* Add more slides as needed */}
      </Slider>
      <button
        className='next-button absolute top-1/2 right-4 transform -translate-y-1/2 bg-lightsalmon text-white border-none py-2 px-3 rounded-full shadow-md'
        onClick={nextSlide}
      >
        <FaChevronRight /> {/* Use the desired icon component */}
      </button>
    </div>
  );
}

export default MySlider;
