import React, { useState } from 'react'
import MainInput from '../MainInput'
import Button from '../Button'
import { useTranslation } from "react-i18next";

import './ContactUs.scss'

const ContactUs = () => {

  const [data, setData] = useState({});
  const {t} = useTranslation();

  const sources = [
    {
      id: 'your__name',
      type: 'text',
      placeholder: `${t('Your__Name')}`,
      icon: 'userName',
      checkTheValue: value => value?.length > 0,
      error: `${t('error__message')}`,
      require: true
    },
    {
      id: 'your__email',
      type: 'email',
      placeholder: `${t('Email__Address')}`,
      icon: 'email',
      // checkTheValue: value => value?.includes('@'),
      // error: "Email must includes '@'!"
    },
    {
      id: 'mobileNumber',
      type: 'number',
      placeholder: `${('Mobile__Number')}`,
      icon: 'mobile',
      checkTheValue: value => value?.length > 10,
      error: "Mobile number Must be more than 10 ch!",
      require: true
    },
    {
      id: 'address',
      type: 'text',
      placeholder: `${t('Address')}`,
      icon: 'address',
      checkTheValue: value => value?.length > 0,
      error: "This filed can't be empty!",
      require: true
    },
    // {
    //   id: 'password',
    //   type: 'password',
    //   placeholder: 'Password',
    //   icon: 'password',
    //   checkTheValue: value => value?.length > 6,
    //   error: "Password Must be more than 6 ch!"
    // },
    // {
    //   id: 'confirmPassword',
    //   type: 'password',
    //   placeholder: 'Confirm Password',
    //   icon: 'password',
    //   checkTheValue: (value, password) => value === password,
    //   error: "The confirm password must matched with password!"
    // },
  ];

  return (
   <section className='contact__us__section'>
    <h2 className='section__title'>Contact Us</h2>
    <div className="container">
      <form className='contact__form' onSubmit={e => e.preventDefault()}>
        <div className="form__inputs">
          {sources.map(input => (
            <MainInput 
              key={input.id}
              name={input.id}
              placeholder={input.placeholder}
              type={input.type}
              data={data}
              setData={setData}
              icon={input.icon}
              checkTheValue={input?.checkTheValue}
              error={input?.error}
              require={input?.require}
            />
          ))}
        </div>
        <select defaultValue='Optical' className='select__box'>
          <option value='Optical'>{t('Optical_store_design')}</option>
          <option value='Interior'>{t('Interior_design')}</option>
          <option value='Kitchens'>{t('Kitchens')}</option>
          <option value='Accessories'>{t('Accessories')}</option>
        </select>
        <div className="btns d-flex align-items-center justify-content-center">
          <Button type='submit'>{t('Send')}</Button>
        </div>
      </form>
    </div>
   </section>
  )
}

export default ContactUs