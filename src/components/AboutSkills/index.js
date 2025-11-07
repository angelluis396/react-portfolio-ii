import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava,
  faJsSquare,
  faAws,
  faJira,
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
          I got my start in tech during college, designing Canvas courses for professors with HTML and CSS. A CIS elective where I built a simple JavaScript 
          app sealed the deal, I was hooked!<br/>
          <br/>

          After graduating, I joined a full-stack bootcamp, learned to build web apps end-to-end, and even did some freelance work during the pandemic. 
          That experience led me to a J.P. Morgan hackathon, which turned into a full-time engineering role.<br/>
          <br/>

          Over the next few years, I grew from Software Engineer I to II, shipping production code and collaborating closely with product managers. Along the 
          way I realized my true passion, a love for connecting the dots between technical work and product vision.<br/>
          <br/>

          Outside of work, I’m all about family, staying active competing in body building competitions, and shredding on my guitar. I thrive on collaboration and am excited 
          to bring my skills to a team that’s pushing the envelope. Want the full story? Click below!
        </p>
  );
  const fullStory = (
    <div className="full-story">
          <p>
            My journey into tech started back in college, when I was working part-time doing web development. I helped professors design Canvas courses using a bit of 
            HTML and CSS, nothing fancy, but it got me curious. Around that same time, I took a CIS elective where I built a simple app with JavaScript, and that’s 
            when it really clicked for me. I loved the idea of bringing ideas to life through code.
          </p>
          <p>
            Looking back, I realize my curiosity for tech started long before college. As a kid, I loved customizing my Myspace page with HTML and CSS to show more of 
            my personality, and I used to hack my iPod touches just to unlock new themes and apps that weren’t available on iOS. I didn’t realize it then, but those small 
            moments of curiosity were the start of something bigger.
          </p>
          <p>
            After finishing my undergraduate degree, I enrolled in a full-stack coding bootcamp, where I learned to develop web applications from front to back using 
            agile methodologies. I gained hands-on experience with backend, frontend, and database technologies, and learned how to design mockups and MVPs.
          </p>

          <p>
            Graduating during the pandemic wasn’t easy, so I did some freelance work for small businesses to keep learning and stay sharp. When things started to pick 
            back up, I joined a J.P. Morgan hackathon with a team of five developers. It was an incredible experience and my performance there led to a full-time offer.
          </p>

          <p>
            I spent two years in J.P. Morgan’s Emerging Software Engineer Program, where I worked closely with senior engineers to learn the software development lifecycle 
            and ship production code. After graduating from the program, I was promoted from a SEP to a Software Engineer I, and later, a Software Engineer II. While I 
            enjoyed the technical challenges of engineering, I began to realize that my strengths extended beyond code.
          </p>

          <p>
            Working alongside Product Managers and Scrum Masters, I discovered a passion for product management. Leading agile ceremonies like sprint reviews, backlog 
            refinements, and daily standups gave me opportunities to collaborate with cross-functional teams, translate technical details for stakeholders, and 
            contribute to shaping product direction. That experience helped me recognize that product management would allow me to combine my technical background with 
            my communication, leadership, and problem-solving skills.
          </p>

          <p>
            Outside of tech, I’m a dedicated family man who works hard and loves staying active, whether I’m lifting weights, exploring the outdoors, or playing 
            my electric guitar. These passions challenge me and help me stay grounded while keeping my creativity alive.
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
                  <FontAwesomeIcon icon={faJira} color="#5ED4F4" />
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