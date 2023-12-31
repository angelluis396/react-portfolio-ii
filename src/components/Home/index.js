import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-a-3.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['n', 'g', 'e', 'l', ',']
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.'
  ]

  // const jobArray2 = [
  //   'E',
  //   'n',
  //   'g',
  //   'i',
  //   'n',
  //   'e',
  //   'e',
  //   'r',
  //   '.'
  // ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img 
              src={LogoTitle} 
              alt="Developer Name, Java Developer Name" 
            />
            <AnimatedLetters 
              letterClass={letterClass} 
              strArray={nameArray} 
              idx={15} 
            />  
            <br />
            <AnimatedLetters 
              letterClass={letterClass} 
              strArray={jobArray} 
              idx={22} 
            />
            {/* <br />
            <AnimatedLetters 
              letterClass={letterClass} 
              strArray={jobArray2} 
              idx={29} 
            /> */}
          </h1>
          <h2> Full-Stack Developer / Java Specialist / Thrash Metal Enthusiast</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home