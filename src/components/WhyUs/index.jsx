import React, { useEffect, useRef, useContext } from 'react'
import { useTranslation } from "react-i18next";
import AppContext from '../../store/app-context';
import Button from '../Button'
import Aos from "aos";
import BG from '../images/2.png'
import Image from '../images/dark-blue-tree.png'

import "aos/dist/aos.css";
import './WhyUs.scss'

const WhyUs = () => {

  const {t} = useTranslation();
  const WhyUs = useRef(null);
  const ctx = useContext(AppContext);
  
  useEffect(function () {
    Aos.init({ duration: 1000 });
    ctx.setWhyUsOffsetTop({
      top: WhyUs.current.offsetTop,
      behavior: 'smooth'
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <section ref={WhyUs} className='why__us__section position-relative'>
      <div className='bgk__image'>
        <img src={Image} alt="" />
      </div>
      <div className="container">
        <h2 className="section__title" data-aos="zoom-in">{t('Why_Choose_Us')}</h2>
        <div className="why__content d-flex align-items-center">
          <div className="left__why" data-aos="fade-right">
            <img src={BG} alt="" />
          </div>
          <div className="rigth__why" data-aos="fade-left">
            <h4>{t('We_Are_The')} <span>{t('BEST')}</span></h4>
            <p>{t('why__desc')}</p>
            <Button>{t('Contact_Us')}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs