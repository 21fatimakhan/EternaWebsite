import React from "react";
import "../vendor/animate.css/animate.min.css"
import "../vendor/bootstrap/css/bootstrap.min.css"
import "../vendor/bootstrap-icons/bootstrap-icons.css" 

import "../css/style.css"

import { Carousel } from 'react-bootstrap'


const Slider = () => {
        return (
          
          <hero id="hero">
            <div className="slider">
              <div className="hero-container">
          <Carousel>
             
         
             <Carousel.Item>
             
             <img className="d-block w-100" src="/img/slide/slide-1.jpg" alt="First slide" />


<Carousel.Caption>
<div className="carousel-item active">
           <div className="carousel-container">
           <div className="carousel-content">
     

              <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Eterna</span></h2>
              <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href=" " className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
    </div>
</div>
</div>
      
</Carousel.Caption>
             
   
    
</Carousel.Item>
<Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/slide/slide-2.jpg"
      alt="Second slide"
    />

<Carousel.Caption>
    <div className="carousel-item active">
    <div className="carousel-container">
           <div className="carousel-content">
     
                <h2 className="animate__animated fanimate__adeInDown">Lorem <span>Ipsum Dolor</span></h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href=" " className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                </div>
     </div>
     </div>

</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/slide/slide-3.jpg"
      alt="Third slide"
    />

<Carousel.Caption>
  <div className="carousel-item active">
    <div className="carousel-container">
           <div className="carousel-content">
    
               <h2 className="animate__animated animate__fadeInDown">Sequi ea <span>Dime Lara</span></h2>
                <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                <a href=" " className="btn-get-started animate__animated animate__fadeInUp">Read More</a>

                </div>
     </div>
     </div>
</Carousel.Caption>
</Carousel.Item>

  
<div>
    <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">     
     <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
       </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
      </a>
</div>
       


 </Carousel>
 
</div>
</div>
</hero>
        )
}

export default Slider;




