import React from 'react'
import "../Styles/Testimonial.css"
import TestimonialCard from '../components/TestimonialCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial = () => {
    
        const settings = {
            dots: true,
            infinite: true,
            speed: 200,
              rewind: true,
            autoplay: true,
            slideBy: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            // arrows: true,
        };
        return (
            <div>

                <div className="testimonialhead ">
                    <span>WHAT CLIENTS SAY</span>
                    <h1>Testimonial</h1>
                </div>

                <div style={{
                    width: "70rem", transition: "5ms all", marginLeft: '10rem', marginTop:'1rem'}}>
                    <Slider {...settings}>
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                        <TestimonialCard />
                    </Slider>
                </div>
                {/* <Slider {...settings}>
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </Slider> */}
     
            </div>
        );
    
}
export default Testimonial
