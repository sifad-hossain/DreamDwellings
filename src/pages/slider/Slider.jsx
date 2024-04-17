// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <Swiper

        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[550px]"
        
      >

        <SwiperSlide><h1
          className='slide-1 hero h-[200px] lg:min-h-[calc(100vh-150px)] '
          style={{
            backgroundImage: 'url(https://i.ibb.co/C01GNyG/banner-1.jpg)',
          }}>
          <span className=' text-4xl font-bold text-slate-200'>From Dream to Reality: Your Ideal Home Starts Here</span>

          <span className='mt-20 text-xl font-semibold text-black'>Explore our curated collection of dream homes and find the perfect dwelling for you.</span>
        </h1></SwiperSlide>

        <SwiperSlide><h1
          className="slide-2 hero h-[200px] lg:min-h-[calc(100vh-150px)]  text-4xl font-bold text-slate-300"
          style={{
            backgroundImage: 'url(https://i.ibb.co/d0Fp70R/banner-3.jpg)',
          }}>
          <span> Find Your Dream Home Today!</span>

          <span className='mt-20 text-xl font-semibold text-black'>Explore our curated collection of dream homes and find the perfect dwelling for you.</span>

        </h1></SwiperSlide>

        <SwiperSlide><h1
          className="slide-2 hero h-[200px] lg:min-h-[calc(100vh-150px)]  text-4xl font-bold text-slate-300"
          style={{
            backgroundImage: 'url(https://i.ibb.co/0F9Kkgd/banner-7.jpg)',
          }}>
          <span> Unlock the Door to Your Future Home</span>

          <span className='mt-20 text-xl font-semibold text-black'>Explore our curated collection of dream homes and find the perfect dwelling for you.</span>
        </h1></SwiperSlide>

        <SwiperSlide><h1
          className="slide-2 hero h-[200px] lg:min-h-[calc(100vh-150px)]  text-4xl font-bold text-slate-300"
          style={{
            backgroundImage: 'url(https://i.ibb.co/rwtzqvL/banner-5.jpg)',
          }}>
         <span>Experience Unparalleled Comfort and Style</span>

         <span className='mt-20 text-xl font-semibold text-black'>Explore our curated collection of dream homes and find the perfect dwelling for you.</span>
        </h1></SwiperSlide>

        <SwiperSlide><h1
          className="slide-2 hero h-[200px] lg:min-h-[calc(100vh-150px)]  text-4xl font-bold text-slate-300"
          style={{
            backgroundImage: 'url(https://i.ibb.co/G79b22J/banner-6.jpg)',
          }}>
        <span>Explore Luxurious Living Spaces</span>
      
        <span className='mt-20 text-xl font-semibold text-black'>Explore our curated collection of dream homes and find the perfect dwelling for you.</span>
        </h1></SwiperSlide>

      </Swiper>
    </>
  );
};

export default Slider;