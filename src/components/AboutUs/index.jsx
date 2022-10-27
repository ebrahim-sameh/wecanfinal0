import React, { useEffect } from 'react'
import Button from '../Button'
import Aos from "aos";
import { useTranslation } from "react-i18next";

import "aos/dist/aos.css";
import './AboutUs.scss'

const AboutUs = () => {
  const {t} = useTranslation();

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className='about__section' id='about-us'>
      <div className="about__content">
        <div className="container">
          <h2 className='section__title' data-aos="zoom-in">{t('About_Us')}</h2>
          <div className="about__data">
            <div className="about__box float-start" data-aos="fade-right">
              <h4 className='about__title'>{t('who_we_are')}</h4>
              <p>{t('about__1desc')}</p>
            </div>
            <div className='clear__both'></div>
            <div className="about__box float-end" data-aos="fade-left">
              <h4 className='about__title'>{t('our_vision')}</h4>
              <p>{t('about__2desc')}</p>
            </div>
            <div className='clear__both'></div>
            <div className="about__box float-start" data-aos="fade-right">
              <h4 className='about__title'>{t('our_mission')}</h4>
              <p>{t('about__3desc')}</p>
            </div>
            <div className='clear__both'></div>
            <div className="about__box float-end" data-aos="fade-left">
              <h4 className='about__title'>{t('our_history!')}</h4>
              <p>{t('about__4desc')}</p>
            </div>
            <div className='clear__both'></div>
          </div>
          <div data-aos="fade-up">
            <Button>{t('Contact_Us')}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs