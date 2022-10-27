import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/Kitchens/k1/Copy of kitchen3_Unnamed Space-10.jpeg'
import Image2 from '../images/2.png'
import Image3 from '../images/InteriorDesign/project 1/IMG-20221009-WA0021.jpg'
import Image4 from '../images/Accessories/1.jpg'
import Aos from "aos";
import { useTranslation } from "react-i18next";

import "aos/dist/aos.css";
import './Categories.scss'

const Categories = () => {
  
  const {t} = useTranslation();

  const categories = [
    {
      id: 1,
      title: `${t('Optical_store_design')}`,
      href: '/optical-store-design',
      desc:`${t('optical__desc')}`,
      img: Image2
    },
    {
      id: 2,
      title: `${t('Interior_design')}`,
      href: '/interior-design',
      desc: `${t('interior__desc')}`,
      img: Image3
    },
    {
      id: 3,
      title: `${t('Kitchens')}`,
      href: '/kitchens',
      desc: `${t('Kitchens__desc')}`,
      img: Image
    },
    {
      id: 4,
      title: `${t('Accessories')}`,
      href: '/accessories',
      desc: `${t('Accessories__desc')}`,
      img: Image4
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='categories__section'>
      <h2 className="section__title" data-aos="zoom-in">{t('Categories')}</h2>
      <div className="categorise__container">
        {categories.map((category, i) => (
          <div key={category.id} className='signle__category' data-aos="fade-up" data-aos-delay={`${i}00`}>
            <Link to={category.href}>{t('Show_More')}</Link>
            <img src={category.img} alt='Category__image' />
            <div className='category__details'>
              <h4>{category.title}</h4>
              <p>{category.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories