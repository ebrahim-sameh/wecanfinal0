import React from 'react'
import { AboutUs, Categories, Feedback, Gallary, Hero, OurProjects, WhyUs } from '../components';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='container'>
        <Gallary />
      </div>
      <AboutUs />
      <OurProjects />
      <div className="container">
        <Categories />
        <WhyUs />
      </div>
      <Feedback />
    </>
  )
}

export default Home