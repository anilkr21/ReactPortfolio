import React, { useRef } from 'react';
import Home from '../scenes/home/Home'
import Skills from '../scenes/skills/index'
import Projects from '../scenes/projects'
import Navbar from '../scenes/global/Navbar';
import Education from '../scenes/education';
import Footer from '../scenes/footer/Index';


 const Dashboard = () => {

    // Create refs for each section
    const homeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
  
    const scrollToSection = (sectionRef) => {
      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error('sectionRef is undefined or not attached to a DOM element');
      }
    };
  

  return (
    <div className='dashboard-styled'>
      {/* Pass scroll function and refs to Navbar */}
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, skillsRef, projectsRef,aboutRef }} />
      
      <div ref={homeRef}>
        <Home />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={aboutRef}>
        <Education />
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard;