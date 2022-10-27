import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Button.scss'

const Button = ({ children, type }) => { 
  const navigate = useNavigate(); 
  return (
    <button type={type || 'button'} onClick={() => type !== 'submit' ? navigate('/contact-us') : ''} className='main__button'>
      <span className='button__icon'></span>
      {children}
    </button>
  )
}

export default Button