import React, { useEffect, useState } from 'react';
import MyWork from '../index';
import AnimatedLetters from '../../AnimatedLetters';
import './index.scss';
import metallicaProjectImg from "../../../assets/images/metallicaProjectImg.jpg";
import projImg2 from "../../../assets/images/project-img2.png";
import projImg3 from "../../../assets/images/project-img3.png";
import quizyAiProjectImg from "../../../assets/images/quizyAiProjectImg.jpg";

const MyWorkSection = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const projects = [
    {
      name: "Divide & Dine",
      description: "Divide and Dine is a simple, no-frills app designed to take the stress out of splitting restaurant bills.",
      urls: [
        { text: "Demo", link: "https://tiny-florentine-0677b3.netlify.app/" },
        { text: "GitHub", link: "https://github.com/angelluis396/divide-and-dine" },
        { text: "Case Study", link: "https://docs.google.com/document/d/1MLVxfwEqZ1opPeEcgMiea0KNxXbVOJd_Fv1Ee67j6tY/edit?tab=t.0" },
      ],
      image: projImg3
    },
    {
      name: "Quizy-AI",
      description: "This is a Next.js application that utilizes chatGPT to generate quiz questions based on a topic you give it.",
      urls: [
        { text: "Demo", link: "https://quizy-ai.vercel.app/" },
        { text: "GitHub", link: "https://github.com/angelluis396/quizy-ai" },
        { text: "Case Study", link: "https://docs.google.com/document/d/1JHt3TnpAwgI1iIux1yurfio_yIZE5ic6E360VvqxTmE/edit?usp=sharing" }
      ],
      image: quizyAiProjectImg
    },
    {
      name: "Spensy Tracker",
      description: "Tired of always losing track of what you and your partner spent money on?! Look no further then Spensy, your daily expense tracker!",
      urls: [
        { text: "Demo", link: "https://lively-paletas-621983.netlify.app/" },
        { text: "GitHub", link: "https://github.com/angelluis396/expense-tracker-nextjs" },
        { text: "Case Study", link: "https://docs.google.com/document/d/1cICKU_vYKWxZySUdkaJc0AdwWG7U9lkn8VF0c7FoOu8/edit?usp=sharing"},
      ],
      image: projImg2
    },
    {
      name: "Metallica Matching Game",
      description: "A basic memory matching game for Desktops and Tablets, where the user selects two cards, each displaying a metallica band member's image, in an attempt to find a match.",
      urls: [
        { text: "Demo", link: "http://my-metallica-matching-game.s3-website-us-east-1.amazonaws.com/" },
        { text: "GitHub", link: "https://github.com/angelluis396/codepipeline-s3-metallica-game" },
        { text: "Case Study", link: "https://docs.google.com/document/d/1D1SbvptKhceYQzhfjgosnW3enz1f_slryj1tGa2JgNk/edit?usp=sharing" },
      ],
      image: metallicaProjectImg
    },
    // {
    //   name: "Future Project",
    //   description: "Project Coming Soon",
    //   urls: [{ text: "Website", link: "https://screentimeconverter.com" }],
    //   image: projImg1
    // },
    // {
    //   name: "Future Project",
    //   description: "Project Coming Soon",
    //   urls: [{ text: "Website", link: "https://screentimeconverter.com" }],
    //   image: projImg1
    // }
  ];

  return (
    <section className="projects-section">
      <h1>
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
          idx={15}
        />
      </h1> 
      <div className="projects-grid">
        {projects.map((project, index) => (
          <MyWork key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default MyWorkSection;