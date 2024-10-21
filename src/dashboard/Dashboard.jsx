import React, { useRef } from 'react';
import Home from '../scenes/home/Home'
import Skills from '../scenes/skills/index'
import Projects from '../scenes/projects'
import Navbar from '../scenes/global/Navbar';


 const Dashboard = () => {

    // Create refs for each section
    const homeRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
  
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
      <Navbar scrollToSection={scrollToSection} refs={{ homeRef, skillsRef, projectsRef }} />
      
      <div ref={homeRef}>
        <Home />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  )
}

export default Dashboard;