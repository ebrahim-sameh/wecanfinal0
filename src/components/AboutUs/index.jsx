import React, { useEffect } from 'react'
import Button from '../Button'
import Aos from "aos";

import "aos/dist/aos.css";
import './AboutUs.scss'

const AboutUs = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='about__section' id='about-us'>
      <div className="about__content">
        <div className="container">
          <h2 className='section__title' data-aos="zoom-in">About Us</h2>
          <div className="about__data d-flex">
            <div className="left__data" data-aos="fade-right">
              <h4 className='about__title'>Who Are We?</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nesciunt expedita nisi repellat, pariatur accusamus? Aut ad, quaerat veniam earum eum architecto rerum aliquam. Labore eaque consequatur voluptatem porro cumque.</p>
            </div>
            <div className="rigth__data" data-aos="fade-left">
              <h4 className='about__title'>Our History!</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nesciunt expedita nisi repellat, pariatur accusamus? Aut ad, quaerat veniam earum eum architecto rerum aliquam. Labore eaque consequatur voluptatem porro cumque.</p>
            </div>
          </div>
          <div data-aos="fade-up">
            <Button>Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs