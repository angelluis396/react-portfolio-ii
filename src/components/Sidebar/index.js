import './index.css';
import { useState } from 'react'
import LogoS from '../../assets/images/logo-a-full-height-full-width.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faGears,
  faLaptopCode,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = (initialState) => {
  const [showNav, setShowNav] = useState(!initialState);

  const handleClick = () => {
    setShowNav(!showNav)
  }

  return (
    <div className="nav-bar">

      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="angel" />
      </Link>
      <nav className={showNav ? 'en show' : ''}>

        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink 
          activeclassname="active"
          className="skills-link"
          to="/skills"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faGears} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="projects-link"
          to="/projects"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/angel-alicea-iii/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/angelluis396"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={handleClick}
          
          icon={faBars}
          size="3x"
          className='hamburger-icon' />
     
    </div>
  )
}

export default Sidebar