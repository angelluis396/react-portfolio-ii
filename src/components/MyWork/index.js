import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { Card } from "./card";
import './index.scss'
import './index.css'

import 'animate.css';
import projImg1 from "../../assets/images/project-img1.png";
import projImg2 from "../../assets/images/project-img2.png";
import projImg3 from "../../assets/images/project-img3.png";
import projImg4 from "../../assets/images/project-img4.png";
import oldProjImg1 from "../../assets/images/old-project-img1.png";
import oldProjImg2 from "../../assets/images/old-project-img2.png";
import oldProjImg3 from "../../assets/images/old-project-img3.png";








import Loader from 'react-loaders'
import TrackVisibility from 'react-on-screen';
import AnimatedLetters from '../AnimatedLetters'

const MyWork = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }, [])
  
    const frontEndProjects = [
      {
        title: "AngelGPT",
        description: "A clone of the famous (...or infamous) ChatGPT called AngelGPT!",
        imgUrl: projImg1,
        link: "https://github.com/angelluis396/react-angelgpt",
        liveDemoLink: "" 
      },
      {
        title: "Spensy Tracker",
        description: "Tired of always losing track of what you and your partner spent money on?! Look no further then Spensy, your daily expense tracker!",
        imgUrl: projImg2,
        link: "https://github.com/angelluis396/expense-tracker-nextjs",
        liveDemoLink: "https://lively-paletas-621983.netlify.app/" 
      },
      {
        title: "Divide and Dine",
        description: "A Next js app that gives you and old school feel. Makes it easier than ever to split the bill with your friends. No need to do pesky math anymore with the help of Divde and Dine!",
        imgUrl: projImg3,
        link: "https://github.com/angelluis396/divide-and-dine",
        liveDemoLink: "https://tiny-florentine-0677b3.netlify.app/" 
      },
      {
        title: "Quizy AI",
        description: "This is a Next.js application that utilizes chatGPT to generate quiz questions based on a topic you give it. This application allows you to sign in with gmail and gives you the option to choose between multiple choice questions or open ended questions",
        imgUrl: projImg4,
        link: "https://github.com/angelluis396/quizy-ai",
        liveDemoLink: "" 
      }
    ];
  
    const backEndProjects = [
      {
        title: "FitPad",
        description: "Full-Stack Javascript app that allow users to effortlessly keep track of their weight lifting sessions. This application was built for a user who would like to keep track of their exercise data. ",
        imgUrl: oldProjImg3,
        link: "https://gist.github.com/angelluis396/8635a80457835309a1827c9fe8e9d46e",
      },
      // {
      //   title: "Python Automation",
      //   description: "Design & Development",
      //   imgUrl: oldProjImg2,
      //   link: "https://github.com/angelluis396/pythonAutomation",
      // },
      {
        title: "Matrix Quiz",
        imgUrl: oldProjImg1,
        description: "A quiz application created with jQuery which tests a users knowledge of the Matrix Films.",
        link: "https://github.com/angelluis396/Mason_Angel_Quiz_App",
        liveDemoLink: "https://thinkful-ei-iguana.github.io/Mason_Angel_Quiz_App/" 
      },
      {
        title: "Frenmo",
        description: "Full-Stack JavaScript App that allow users to send virtual coupons to friends and family. I acted as the project manager on a team of five developers led by one senior developer.",
        imgUrl: oldProjImg2,
        link: "https://gist.github.com/angelluis396/9bc42fbfbb49f381e0314b9e0a8df4fe",
      }
    ];

    return (
        <>
        <div className="container projects-page">
          <Container className="grid-wrapper">
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div id="animatedArea" className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h1>
                      <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['P', 'r', 'o', 'j', 'e', 'c ', 't', 's']}
                        idx={15}
                      />
                    </h1> 
                
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">  
                      <Nav variant="pills" className="nav-pills " id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Recent</Nav.Link>
                        </Nav.Item>
    
                        <Nav.Item>
                          <Nav.Link eventKey="second">Old</Nav.Link>
                        </Nav.Item>
                      </Nav>
    
                      <Tab.Content id="grid-item" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row className="test-row">
                            {
                              frontEndProjects.map((frontEndProjects, index) => {
                                return (
                                  <Card
                                    key={index}
                                    {...frontEndProjects}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
      
                        <Tab.Pane eventKey="second">
                          <Row className="test-row">
                            {
                              backEndProjects.map((backEndProjects, index) => {
                                return (
                                  <Card
                                    key={index}
                                    {...backEndProjects}
                                  />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>

                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
          </Container>
          </div>
          <Loader type="pacman" />  
        </>
      )
      
}
export default MyWork