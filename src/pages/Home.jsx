import React from 'react'
import { Categories, Gallary, Hero, OurProjects, Pagination, WhyUs } from '../components';

const Home = () => {
  return (
    <>
      <Hero />
      <div className='container'>
        <Gallary />
      </div>
      <OurProjects />
      <Categories />
      <div className="container">
        <WhyUs />
      </div>
      {/* <Feedback /> */}
      <Pagination />
    </>
  )
}

export default Home