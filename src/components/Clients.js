import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/Slider.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Clients() {
  return (
    
    <main id="main">
      <clients id="clients" className="clients">
       
              <div className="container">
          
            <div className="section-title">
            <h2>Clients</h2>
           <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
           </div>
          
            <div className="swiper-mrg">
     <Swiper 
        slidesPerView={5}
        spaceBetween={700}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
       
       
        breakpoints={{
          555: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 4,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          
          1024: {
            slidesPerView: 6,
            spaceBetween: 60,
          },
        }}
        
      >

<div className="clients-slider ">
             <div className="swiper-wrapper align-items-center">
        <SwiperSlide><img className="clint-imag"  src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-8.png"  alt=""/></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-6.png"  alt="" /></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-7.png"  alt=""/></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-5.png"  alt=""/></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-4.png"  alt=""/></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-3.png"  alt=""/></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-2.png"  alt=""/></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-1.png"  alt=""/></SwiperSlide>
        <SwiperSlide><img className="clint-imag" src="https://bootstrapmade.com/demo/templates/Eterna/assets/img/clients/client-5.png"  alt=""/></SwiperSlide>
        
           </div>
          <div className="swiper-pagination"></div>
           </div>
           </Swiper>
      </div>

      </div>
      
    </clients>
        
</main>
   
  );
}









