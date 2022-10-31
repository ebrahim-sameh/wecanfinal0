import React, { useContext, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

import './Pagination.scss'
import AppContext from '../../store/app-context'

const Pagination = () => {

  const [open, setOpen] = useState(false);
  const ctx = useContext(AppContext);

  const scrollToSection = (elementRef) => {
    window.scrollTo(elementRef)
  };

  return (
    <div className='main__pagination'>
      <ul className={open ? 'show' : ''}>
        <li>
          <button 
            onClick={() => setOpen(prev => !prev)}
            className='toggle__pagination'
            >
            {!open ? <BsPlus /> : <BiMinus />}
          </button>
        </li>
        <li>
          <button onClick={() => {}}>
            <span className='p_tooltip' onClick={() => window.scrollTo(0, 0)}>Home</span>
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection(ctx.GalleryOffsetTop)}>
            <span className='p_tooltip'>Gallary</span>
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection(ctx.WhyUsOffsetTop)}>
            <span className='p_tooltip'>Why Us</span>
          </button>
        </li>
        <li>
          <button onClick={() => scrollToSection(ctx.OurProjectsOffsetTop)}>
            <span className='p_tooltip'>Our Projects</span>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination