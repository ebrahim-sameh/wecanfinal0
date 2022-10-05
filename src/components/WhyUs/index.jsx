import React, { useEffect } from 'react'
import Button from '../Button'
import Aos from "aos";

import "aos/dist/aos.css";
import './WhyUs.scss'

const WhyUs = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='why__us__section'>
      <div className="container">
        <h2 className="section__title" data-aos="zoom-in">Why Us</h2>
        <div className="why__content d-flex align-items-center">
          <div className="left__why" data-aos="fade-right">
            <img src="https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-3-original.jpg" alt="" />
          </div>
          <div className="rigth__why" data-aos="fade-left">
            <h4>We Are The <span>BEST</span></h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, a labore. Commodi vero nobis et praesentium molestiae reiciendis asperiores, eaque, voluptatum natus possimus aspernatur, obcaecati provident veniam modi? Iure, odio?</p>
            <Button>Portfolio</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs