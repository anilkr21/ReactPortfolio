// import React from 'react'

// const Projects = () => {
//   return (
//     <div className='projects-styled' >
//        <div className='projects-header'>
//           <h1 >Skills</h1>
//           <h4 >Here are some of my skills on which i have been working on for the past few months.</h4>
//         </div>
//     </div>
//   )
// }

// export default Projects;

import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './Projects.js'
import ProjectCard from '../cards/ProjectCards.jsx'
import { projects } from '../../data/constants.js'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'react app' ?
            <ToggleButton active value="react app" onClick={() => setToggle('react app')}>React APP'S</ToggleButton>
            :
            <ToggleButton value="react app" onClick={() => setToggle('react app')}>React APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'figma' ?
            <ToggleButton active value="figma" onClick={() => setToggle('figma')}>Figma & PS Designs</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('figma')}>Figma & PS Designs </ToggleButton>
          }
          <Divider />
          {toggle === 'HTML' ?
            <ToggleButton active value="HTML" onClick={() => setToggle('HTML')}>HTML & CSS And JS</ToggleButton>
            :
            <ToggleButton value="HTML" onClick={() => setToggle('HTML')}>HTML & CSS And JS</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
              {projects
                  .filter((project) => toggle === 'all' || project.category === toggle)
                  .map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
              ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
