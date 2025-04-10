import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import profileImage from '../../assets/images/profile.jpg'; 

const TopMenu = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="top-menu">
      <div className="profile-container">
        <img src={profileImage} alt="Angel Alicea" className="profile-image" />
        <span className="profile-name">Angel Alicea</span>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a href="#home" onClick={toggleMenu}>Home</a>
        </li>
        <li className={activeSection === 'about-skills' ? 'active' : ''}>
          <a href="#about-skills" onClick={toggleMenu}>About</a>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;