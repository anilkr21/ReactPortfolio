import { motion } from 'framer-motion';
import { List, MagnifyingGlass } from 'phosphor-react';
import React, { useState } from 'react';


const links = [
  {id:1 , name: 'HOME' ,refKey: 'homeRef' },
  {id:2 , name: 'ABOUT', },
  {id:3 , name: 'SKILLS' ,  refKey: 'skillsRef'},
  {id:4 , name: 'WORKS',  refKey: 'projectsRef'},
  {id:5 , name: 'DOWNLOAD RESUME'},
];

function Navbar({ scrollToSection, refs }) {

  const [activeLinkId, setActiveLinkId] = useState(null);

  const handleLinkClick = (id, refKey) => {
    setActiveLinkId(id);
    scrollToSection(refs[refKey]);
  };

  return (
    <motion.nav 
      className='navbar-styled'
      initial={{opacity: 0, y: -100 }}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 1}}
      >
      <h2 className='logo'> WhyAnilKumar</h2>
      <div className='links-styled'>
        <div className='link'>
          {
            links.map((link) => ( 
              <span 
                key={link.id}
                className={activeLinkId === link.id ? 'active' : ''}
                onClick={() => handleLinkClick(link.id , link.refKey)}
              >
                  {link.name}
              </span>
            ))
            
          }
          <motion.button className='Button'  whileHover={{ scale: 1.2 }}
             onHoverStart={e => {}}
             onHoverEnd={e => {}}>
            Get in touch
          </motion.button>
          
        </div>
      </div>
    
    </motion.nav>
  )
}



export default Navbar

// html {
//   scroll-behavior: smooth;
// }