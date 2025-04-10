import { useEffect, useState } from 'react';
// import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-a-3.png';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['n', 'g', 'e', 'l', ','];
  const jobArray = [
    'S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ',
    'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

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
          </h1>
          <h2>Secure Systems Builder / Perpetual Problem Solver / Thrash Metal & Hiking Enthusiast</h2>
          <a href="#contact" className="flat-button">
            CONTACT ME
          </a>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  );
};

export default Home;