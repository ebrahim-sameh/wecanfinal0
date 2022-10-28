import React, { useEffect, useState } from 'react'
import FullScreenSlider from '../../components/FullScreenSlider';
import { AiOutlineCompress } from 'react-icons/ai'
import './SingleCategry.scss'

const SignleCategory = ({ data }) => {

  const [openSlider, setOpenSlider] = useState(false);
  const [currentIndex, setCurtrentIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0)

  console.log(data.projects)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <section className='category__section'>
      <div className="container">
        <h2 className='section__title'>{data.title}</h2>
        <p className='section__subtitle'>{data.desc}</p>
          <div className="single__cayegor__content">
            {data.projects.map((project, pi) => (
              <div className='single__project' key={project.id}>
                <h3>{project.title}</h3>
                <div className='project__images'>
                  {project.images.map((img, i) => (
                    <div key={i}>
                      <img src={img.src} alt='project__image' />
                      <button onClick={() => {
                        setOpenSlider(true);
                        setCurtrentIndex(i);
                        setProjectIndex(pi)
                      }}><AiOutlineCompress className='full__secreen__button' /></button>
                    </div>
                  ))}
                </div>
//                 <p>{project.desc}</p>
              </div>
            ))}
          </div>
      </div>
    </section>
    {openSlider && <FullScreenSlider startIndex={currentIndex} images={data.projects[projectIndex].images} onClose={setOpenSlider} />}
    </>
  )
}

export default SignleCategory
