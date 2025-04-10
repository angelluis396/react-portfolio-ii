import Sidebar from '../Sidebar';
import TopMenu from '../TopMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.scss';

const Layout = ({ children, activeSection }) => {
  return (
    <div className="App">
      <Sidebar activeSection={activeSection} />
      <TopMenu activeSection={activeSection} />
      <div className="page">
        {children}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-blurb">
              <h3>Angel Alicea, Software Engineer</h3>
              <p>Passionate Problem Solver</p>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/angel-alicea-iii/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/angelluis396" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
                  </a>
                </li>
                {/* Optional third icon */}
                {/* <li>
                  <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <p>© Copyright 2025 . Made by Angel Alicea</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;