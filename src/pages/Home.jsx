import React from 'react'
import { Categories, Feedback, Gallary, Hero, OurProjects, Pagination, WhyUs } from '../components';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='container'>
        <Gallary />
      </div>
      <OurProjects />
      <div className="container">
        <Categories />
        <WhyUs />
      </div>
      <Feedback />
      <Pagination />
    </>
  )
}

export default Home