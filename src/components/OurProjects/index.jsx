import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { AiOutlineCompress } from 'react-icons/ai'
import P from '../images/projects/3.png'
import P1 from '../images/projects/1st kitchen.jpeg'
import P2 from '../images/projects/1st library.jpeg'
import P3 from '../images/projects/2 nd kitchen.jpg'
import P4 from '../images/projects/2nd library.jpeg'
import P5 from '../images/projects/3 rdkitchen.jpg'
import P6 from '../images/projects/3rd kitchen.jpg'
import P7 from '../images/projects/4 th kitchen.png'
import P8 from '../images/projects/4th kitchen.png'
import P9 from '../images/projects/5 thkitchen.png'
// import P10 from '../images/projects/Living Room(1).jpg'
import P11 from '../images/projects/Living Room.jpg'
import P12 from '../images/projects/Copy of kitchen3_Unnamed Space-10 - Copy.jpeg'
import P13 from '../images/projects/5th kitchen.png'
import FullScreenSlider from '../FullScreenSlider';
import Aos from "aos";
import { useTranslation } from "react-i18next";

import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import './OurProjects.scss'

const OurProjects = () => {

  const [openSlider, setOpenSlider] = useState(false);
  const [currentIndex, setCurtrentIndex] = useState(0);
  const {t} = useTranslation();

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      id: 0,
      src: P
    },
    {
      id: 1,
      src: P6
    },
    {
      id: 2,
      src: P2
    },
    {
      id: 3,
      src: P4
    },
    {
      id: 4,
      src: P8
    },
    {
      id: 5,
      src: P3
    },
    {
      id: 6,
      src: P9
    },
    {
      id: 7,
      src: P7
    },
    {
      id: 8,
      src: P8
    },
    {
      id: 9,
      src: P1
    },
    {
      id: 11,
      src: P11
    },
    {
      id: 12,
      src: P12
    },
    {
      id: 13,
      src: P13
    },
  ];

  return (
    <>
      <section className='our__projects__section' id='our-projects'>
        <div className="container">
          <h2 className='section__title' data-aos="zoom-in">{t('Our_Projects')}</h2>
        </div>
        <div className='projects__container'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              390: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              }
            }}
            modules={[Autoplay, Navigation]}
            dir='rtl'
            className="projects__slider"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={project.id}>
                <div
                  className='project__container'
                  data-aos='fade-up'
                  data-aos-delay={`${i}00`}
                >
                  <img src={project.src} alt="" />
                  <button onClick={() => {
                    setOpenSlider(true)
                    setCurtrentIndex(i)
                  }}><AiOutlineCompress className='full__secreen__button' /></button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {openSlider && <FullScreenSlider startIndex={currentIndex} images={projects} onClose={setOpenSlider} />}
    </>
  )
}

export default OurProjects