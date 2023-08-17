import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { Card } from "./card";
import './index.scss'
import './index.css'

import 'animate.css';
import projImg1 from "../../assets/images/project-img3.png";
import projImg2 from "../../assets/images/project-img2.png";


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
        title: "PJ 1",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "PJ 2",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "PJ 3",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "PJ 4",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "PJ 5",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "PJ 6",
        description: "Design & Development",
        imgUrl: projImg2,
      }
    ];
  
    const backEndProjects = [
      {
        title: "PJ 7",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "PJ 8",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      {
        title: "PJ 9",
        description: "Design & Development",
        imgUrl: projImg2,
      },
      ,
      {
        title: "PJ 10",
        description: "Design & Development",
        imgUrl: projImg1,
      },
      {
        title: "PJ 11",
        description: "Design & Development",
        imgUrl: projImg2,
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
                          <Nav.Link eventKey="first">Front-End</Nav.Link>
                        </Nav.Item>
    
                        <Nav.Item>
                          <Nav.Link eventKey="second">Back-End</Nav.Link>
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
          <Loader type="pacman" />
          </div>  
        </>
      )
      
}
export default MyWork