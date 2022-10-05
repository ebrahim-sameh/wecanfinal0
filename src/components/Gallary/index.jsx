import React, { useEffect } from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'
import Button from '../Button';
import Aos from "aos";

import "aos/dist/aos.css";
import './Gallary.scss'

const Gallary = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const images = [
    {
      id: 1,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-1-original.jpg'
    },
    {
      id: 2,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-3-original.jpg'
    },
    {
      id: 3,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-2-original.jpg'
    },
    {
      id: 4,
      src: 'https://livedemo00.template-help.com/wt_prod-25033/images/grid-gallery-4-original.jpg'
    },
  ];

  return (
    <section className='gallary__section'>
      <h2 className='section__title' data-aos="zoom-in">Gallary</h2>
      <div className='images__container'>
        {images.map(img => (
          <div className='single__image__container' key={img.id} data-aos="fade-up">
            <img src={img.src} alt='' />
            <div className='image__data'>
              <button>
                <BsArrowsFullscreen />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div data-aos="fade-up">
        <Button>View More</Button>
      </div>
    </section>
  )
}

export default Gallary