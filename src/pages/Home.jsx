import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import "../Home.css"

const Home = () => {
  return (
    <>
      <div className='Blog'>
        <h1>Varshith Yadav</h1>
        <p>
          I'm a{' '}
          <TypeAnimation
            sequence={[
              'Developer',
              1000,
              'DevOps Guy',
              1000,
              'Aspiring MLOps and AI ML Learner',
              1000
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
          />
        </p>
      </div>
      <div className='cta'>
        <button>View Resume</button>
        <button>Hire Me</button>
      </div>
    </>
  )
}

export default Home
