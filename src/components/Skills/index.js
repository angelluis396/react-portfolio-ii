import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3Alt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import './stars.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', ' s']}
              idx={15}
            />
          </h1>
          <p>
            Proficient in full-stack development technologies such as Java, HTML5, CSS3, JavaScript, React, Cassandra,
            Python, SQL, Git, Figma, Atlassian Tools, etc.
          </p>
          <p align="LEFT">
            As a results-driven Back-End Software Engineer, I bring a wealth of experience to the table, particularly in 
            backend development over the past two years. My expertise lies in crafting robust, scalable, and high-performance 
            solutions while leveraging a strong foundation in software engineering principles.
          </p>
          <p>
            But my passion doesn't stop there. I thoroughly enjoy the dynamic realm of front-end development as well. My dedication 
            to delivering exceptional results extends to creating seamless and user-friendly interfaces. My experience in the backend 
            complements my front-end skills, making me a versatile engineer who can bridge the gap between both worlds.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3Alt} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills