import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faJsSquare,
  faAws,
  faPython,
  faFigma,
  faAtlassian,
} from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import './stars.scss'

const AboutSkills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const introBlurb = "I’m Angel Alicea, a software engineer driven by a passion for solving tough problems and delivering meaningful solutions. My journey in tech has been driven by curiosity and a desire to make a difference.";
  const shortBlurb = (
        <p>
          I’ve always been curious about tech, starting with early experiments in coding and later exploring cybersecurity during my master’s. When life took a 
          turn during COVID, I shifted gears into software engineering, eventually landing as a backend engineer. There, I grew to love the teamwork behind 
          building and refining systems, which sparked my interest in product management as a way to merge tech with creative problem-solving. <br/>
          <br/>
          Outside of work, I’m all about family, staying active, and strumming my guitar to a mix of country and metal. I thrive on collaboration and am excited 
          to bring my skills to a team that’s pushing the envelope. Want the full story? Click below!
        </p>
  );
  const fullStory = (
    <div className="full-story">
          <p>
            Tech has always been my playground—whether I was tweaking HTML/CSS on MySpace to create pages that felt like ‘me’ or jailbreaking iPod Touches to 
            make them do what I wanted, I learned early on how to use technology to bring my visions to life. That curiosity grew while pursuing my 
            master’s degree in Homeland Security, where I learned about cybersecurity threats. When COVID hit and paused my studies, I switched gears and jumped 
            into a full-stack software engineering boot camp to learn more about coding. Upon graduating, I landed some contract web dev gigs, which showed me 
            what a software engineer’s day-to-day is really like—way different from those polished YouTube videos. That experience paved the way for a full-time 
            job as a backend software engineer.
          </p>
          <p>
            As a backend engineer, I specialized in creating robust APIs, optimizing CI/CD pipelines, leading application deployments, and developing features 
            such as enhanced time frames for the spending summary microservice in the Chase mobile app. These responsibilities not only sharpened my technical 
            skills but also deepened my appreciation for the Software Development Life Cycle (SDLC). Coming from a non-traditional tech background, I was hooked 
            by how collaborative the Software Development Life Cycle (SDLC) turned out to be. As an engineer, I got a front-row seat to the impact roles like 
            agility leads and product managers had on the software development life cycle. That exposure opened my eyes to product management, which would be a 
            good way to utilize both my tech skills and natural ability to collaborate and understand people. I enjoy building solutions that work for both users 
            and the business, mixing creative problem-solving with a focus on results.
          </p>
          <p>
            I’m driven by discipline and curiosity, constantly honing my problem-solving abilities. I believe technology, particularly AI, is a force for good 
            with the potential to transform the world like the printing press or the internet did. I’m excited to watch that future unfold and to help shape it 
            along the way.
          </p>
          <p>
            Outside of tech, I’m a dedicated family man who works hard and loves staying active—whether I’m lifting weights, exploring the outdoors, or shredding 
            on my electric guitar. My music taste runs the gamut from country to thrash metal, which mirrors my versatile approach to both life and work. These 
            passions help me stay grounded and keep my creativity alive.
          </p>
          <p>
            I’m a collaborative team player at heart, eager to bring my tech and creative problem-solving skills to a forward-thinking company—whether in product 
            management, DevOps, or cybersecurity. Let’s build something meaningful together!
          </p>
    </div>
  );

  return (
    <>
      <div className="container about-skills-page">
        <div className="intro">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p className="intro-blurb">{introBlurb}</p>
        </div>

  
        <div className="content">
          <div className="get-to-know-me">
            <h2>Get to Know Me</h2>
            <div className="blurb-content">
              {isExpanded ? fullStory : <p>{shortBlurb}</p>}
            </div>
            <button onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="skills">
            <h2>Skills</h2>
            <div className="stage-cube-cont">
              {/* <div id='stars'></div>
              <div id='stars2'></div>
              <div id='stars3'></div> */}
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faJava} color="#DD0031" />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faAws} color="#F06529" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faFigma} />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faAtlassian} color="#EC4D28" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default AboutSkills;