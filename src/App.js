import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutSkills from './components/AboutSkills';
import Contact from './components/Contact';
import MyWorkSection from './components/MyWork/MyWorkSection';
import './App.scss';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about-skills', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px 0px 0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout activeSection={activeSection}>
      <main>
        <section id="home" className="home">
          <Home />
        </section>
        <section id="about-skills" className="about-skills">
          <AboutSkills />
        </section>
        <section id="projects" className="projects">
          <MyWorkSection />
        </section>
        <section id="contact" className="contact">
          <Contact />
        </section>
      </main>
    </Layout>
  );
}

export default App;