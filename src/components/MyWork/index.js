import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faBook } from '@fortawesome/free-solid-svg-icons';

const MyWork = ({ name, description, urls, image }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        {image && <img src={image} alt={`${name} screenshot`} className="project-image" />}
      </div>
      
      <h2>{name}</h2>
      <p>{description}</p>

      <div className="links">
        {urls.map((url, index) => {
          if (url.text.toLowerCase() === 'github') {
            return (
              <a key={index} href={url.link} target="_blank" rel="noopener noreferrer" title="GitHub" className="link-item">
                <FontAwesomeIcon icon={faGithub} className="link-icon" />
                <span className="link-label">Github</span>
              </a>
            );
          } else if (url.text.toLowerCase() === 'demo' || url.text.toLowerCase() === 'website') {
            return (
              <a key={index} href={url.link} target="_blank" rel="noopener noreferrer" title="Live Site" className="link-item">
                <FontAwesomeIcon icon={faGlobe} className="link-icon" />
                <span className="link-label">Demo</span>
              </a>
            );
          } else if (url.text.toLowerCase() === 'case study') {
            return (
              <a key={index} href={url.link} target="_blank" rel="noopener noreferrer" title="Case Study" className="link-item">
                <FontAwesomeIcon icon={faBook} className="link-icon" />
                <span className="link-label">Case Study</span>
              </a>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default MyWork;