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

  const introBlurb = "I’m Angel Alicea, a Product Manager driven by a passion for solving tough problems and delivering meaningful solutions. My journey in technology has been driven by curiosity and a desire to make a difference in the world while having fun.";
  const shortBlurb = (
        <p>
          I’ve always been fascinated by tech, from early coding experiments to learning about cybersecurity while pursuing my Master's. When life took a turn during COVID, 
          I pivoted to software engineering, eventually landing as a backend software engineer in the Finance industry. There, I grew to love the teamwork behind creating 
          features in an agile environment, igniting my passion for product management roles like defining roadmaps and driving cross-functional collaboration. <br/>
          <br/>
          Outside of work, I’m all about family, staying active, and shredding my guitar to a either country or metal. I thrive on collaboration and am excited 
          to bring my skills to a team that’s pushing the envelope. Want the full story? Click below!
        </p>
  );
  const fullStory = (
    <div className="full-story">
          <p>
            Tech has always been my playground—whether I was tweaking HTML/CSS on MySpace to create pages that felt like ‘me’ or jailbreaking iPod Touches to 
            make them do what I wanted, I learned early on how to use technology to bring my visions to life. That curiosity grew while pursuing my 
            master’s degree in Homeland Security, where I learned about cybersecurity threats. When the pandemic hit and paused my studies, I switched gears and jumped 
            into a full-stack software engineering boot camp to learn more about software development. Upon graduating, I did some free lance web development work before landing a 
            job as a backend software engineer.
          </p>
          <p>
          As a backend engineer at Chase, I built robust APIs, optimized CI/CD pipelines, led deployments, and developed features—like enhanced time frames for the 
          spending-summary microservice in the mobile app. These experiences honed my technical skills while deepening my respect for the full Software Development 
          Life Cycle (SDLC). Coming from a non-traditional background, I was surprised by how collaborative the SDLC proved to be. I saw firsthand the complexity 
          of modern systems and how cross-functional teams translate user needs into impactful features. Through hands-on work across every phase, I discovered where I 
          thrived most: planning, prioritization, and orchestration. Learning about product managers revealed a perfect fit—I could blend my strong soft skills and natural 
          organizational instincts with my technical expertise. I genuinely loved shaping direction and aligning teams. That’s when my passion for product management took 
          root, pointing me toward driving roadmaps, prioritizing backlogs, and leading end-to-end delivery with engineering, design, and stakeholders.
          </p>
          <p>
            I’m driven by discipline and curiosity, constantly honing my problem-solving abilities. I believe technology, particularly AI, is a force for good 
            with the potential to transform the world like the printing press or the internet did. I’m excited to watch that future unfold and to help shape it 
            along the way.
          </p>
          <p>
            Outside of tech, I’m a dedicated family man who works hard and loves staying active, whether I’m lifting weights, exploring the outdoors, or playing 
            my electric guitar. These passions help me stay grounded and keep my creativity alive.
          </p>
          <p>
            I’m a collaborative team player at heart, eager to bring my tech and creative problem-solving skills to a forward-thinking company. Let’s build something 
            meaningful together!
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