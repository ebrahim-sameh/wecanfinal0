import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper";
import { BsFullscreen } from 'react-icons/bs'

import "swiper/css";
import "swiper/css/free-mode";
import './HeroSliderControls.scss'

const HeroSliderControls = ({ images, setImage }) => {
  return (
    <div className='bgk__control__container'>
      <Swiper
        slidesPerView={3}
        spaceBetween={4}
        freeMode={true}
        modules={[FreeMode]}
        className="bgk__control"
      >
        {images.map(img => (
          <SwiperSlide key={img.id}>
            <div className='img__container'>
              <img src={img.src} alt="" onClick={() => setImage && setImage(img.src)}/>
              <button><BsFullscreen className='full__secreen__button' /></button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSliderControls