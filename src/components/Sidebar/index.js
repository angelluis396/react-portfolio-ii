import { useEffect } from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  useEffect(() => {
    const navBar = document.querySelector('.nav-bar');
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (window.innerWidth <= 768) {
        if (scrollTop > lastScrollTop && scrollTop > 50) {
          navBar.classList.add('hidden');
        } else {
          navBar.classList.remove('hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="nav-bar">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/angel-alicea-iii/"
            target="_blank"
            rel="noreferrer"
            data-text="Linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" />
            <span className="link-label">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/angelluis396"
            target="_blank"
            rel="noreferrer"
            data-text="Github"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon" />
            <span className="link-label">Github</span>
          </a>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1J68l_68vIIz_kTCxe-KS4cUc-tp_46p4Un2qDeXLZSo/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            data-text="Case Studies"
          >
            <FontAwesomeIcon icon={faBook} color="#4d4d4e" className="anchor-icon" />
            <span className="link-label">Case Studies</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;