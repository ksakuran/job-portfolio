
 

import React from 'react'
// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slide = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><h4 className='slider-title'>Mojo</h4><p className='slider-p'>A mood journaling application built with React, CSS (SCSS), JSX, and Axios for the front-end, and Express for the back-end with a PSQL DB. We used multiple API's and libraries like Chart.js and Spotify. My favourite part of working on this project was creating the dreamy UI.</p><a onClick={() => window.open('https://github.com/ksakuran/MoJo', '_blank')}><img className='slider-img' src='mojo.png' alt='mojo'/></a></SwiperSlide>
      <SwiperSlide><h4 className='slider-title'>Treasure Maps</h4><p className='slider-p'>A single page full stack web application. Built using jQuery and AJAX for front-end, and Node.js and Express for back-end. This was a midterm group project.</p><a onClick={()=> window.open('https://github.com/ksakuran/treasure-map', '_blank')}><img className='slider-img' src='treasure-maps.png' alt='treasure-maps'/></a></SwiperSlide>
      <SwiperSlide><h4 className='slider-title'>Interview Scheduler</h4><p className='slider-p'>A single page application that allows users to schedule interviews. Built with React, JSX and Axios. Storybook was used for UI development and planning, and Jest and Cypress were used for E2E testing.</p><a onClick={()=> window.open('https://github.com/ksakuran/scheduler', '_blank')}><img className='slider-img' src='scheduler.png' alt='scheduler'/></a></SwiperSlide>
      <SwiperSlide><h4 className='slider-title'>Tweeter</h4><p className='slider-p'>A simplified single-page Twitter clone. This project focused on front-end development, built with HTML, CSS (SCSS), JS, jQuery and AJAX. I loved learning how to use jQuery for this project!</p><a onClick={() => window.open('https://github.com/ksakuran/tweeter', '_blank')}><img className='slider-img' src='tweeter.png' alt='tweeter'/></a></SwiperSlide>


    </Swiper>
  );
};

export default function Projects() {
  return (
    <section class='projects' id='projects'>
      <div>
        <h1 id='project-header' >Projects</h1>
      </div>
      <div class='slideshow'>
        <Slide />
        <h6>Click on any slide for more information</h6>
      </div>
    </section>
  )
}