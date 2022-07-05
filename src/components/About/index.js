import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, [])

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={['a','b','o','u','t']}
            idx={15}
          />
        </h1>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faUmbrella} color="#d16938" />
            <FontAwesomeIcon icon={faUmbrella} color="#d16938" />
            <FontAwesomeIcon icon={faUmbrella} color="#d16938" />
            <FontAwesomeIcon icon={faUmbrella} color="#d16938" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About