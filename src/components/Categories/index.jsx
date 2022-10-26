import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/Kitchens/k.jpg'
import Image2 from '../images/2.png'
import Image3 from '../images/Interior/3rd library.jpeg'
import Image4 from '../images/Accessories/1.jpg'
import Aos from "aos";

import "aos/dist/aos.css";
import './Categories.scss'

const Categories = () => {

  const categories = [
    {
      id: 1,
      title: 'Optical store design',
      href: '/optical-store-design',
      desc:'You can easily display your products and services in a way that is both elegant and practical, with our trendy and creative optic store design.',
      img: Image2
    },
    {
      id: 2,
      title: 'Interior design',
      href: '/interior-design',
      desc: "When it comes to interior design, there's a lot to choose from. We recognise that every detail is important, so we offer a wide choice of furniture and decorations.",
      img: Image3
    },
    {
      id: 3,
      title: 'Kitchens',
      href: '/kitchens',
      desc:'We have everything you need to bring your dream kitchen to life. Call us today to help make your vision a reality!',
      img: Image
    },
    {
      id: 4,
      title: 'Accessories',
      href: '/accessories',
      desc:'Our range of wooden accessories is perfect for adding a touch of nature to any room.',
      img: Image4
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='categories__section'>
      <h2 className="section__title" data-aos="zoom-in">Categories</h2>
      <div className="categorise__container">
        {categories.map((category, i) => (
          <div key={category.id} className='signle__category' data-aos="fade-up" data-aos-delay={`${i}00`}>
            <Link to={category.href}>Show More</Link>
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