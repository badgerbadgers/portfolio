import React, { useState, useEffect } from 'react'
import LogoTitle from '../../images/logo-t.png'
import AnimatedLetters from '../AnimatedLetters'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i','m']
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']
  
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000);
  }, [])
  return (
    <div className="container home-page">
      <div className="text-zone">
          <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _12`}>I</span>
          <span className={`${letterClass} _12`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters letterClass={letterClass} 
            strArray={nameArray}
            idx={22} />
          <br />
          <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={15} />
          </h1>
          <h2>Frontend Developer</h2>
        <Link to="/contact" className="flat-button">CONTACT</Link>
      </div>
    </div>
  )
}
  
  export default Home