import React, { useEffect } from 'react'
import Button from '../Button'
import Aos from "aos";
import BG from '../images/2.png'

import "aos/dist/aos.css";
import './WhyUs.scss'

const WhyUs = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='why__us__section'>
      <div className="container">
        <h2 className="section__title" data-aos="zoom-in">Why Choose Us</h2>
        <div className="why__content d-flex align-items-center">
          <div className="left__why" data-aos="fade-right">
            <img src={BG} alt="" />
          </div>
          <div className="rigth__why" data-aos="fade-left">
            <h4>We Are The <span>BEST</span></h4>
            <p>choosing the right company is key to getting you what you need. There are plenty of options available in the wood industry in Egypt, so it is crucial to purchase a service from a company that understands your need. We focus on the here and now, basing our decisions on what is most practical for our customers. We strive to create a positive impact in the digital landscape, by spreading our beliefs through the products we build.</p>
            <Button>Portfolio</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs