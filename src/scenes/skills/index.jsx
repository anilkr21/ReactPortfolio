import React from 'react'
import { motion, transform, useScroll} from "framer-motion";
import Image1 from '../../assets/HTML.png';
import CSS from '../../assets/css3.png';
import Boootstrap from '../../assets/Bootstrap_logo.png';
import JS from '../../assets/Javascript.png';
import ReactIcon from '../../assets/React-icon.png';
import PS from '../../assets/Photoshop_CC_icon.png';
import MuiImage from '../../assets/Logo_material_design.svg.png';
import Ai from '../../assets/Adobe_Illustrator_CC_icon.png';
import Figma from '../../assets/figma-app-logo.png';

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ image, hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
 

    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <img src={image} alt="Fruit" className="fruit-image" />
        <div className="color-container">
          <div className="color-indicator" style={{ background: hue(hueA) }} />
          <div className="color-indicator" style={{ background: hue(hueB) }} />
        </div>
      </motion.div>
    </motion.div>
  );
}
const images = [
  [Image1,],
  [CSS, ],
  [Boootstrap, ],
  [JS, ],
  [ReactIcon, ],
  [PS,],
  [MuiImage, ],
  [Ai, ],
  [Figma, ],
];



const skills = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { scrollYProgress } = useScroll();

  return (
  
      <motion.div id='skills'
      style={{ scaleX: scrollYProgress }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        
      >
        <motion.div 
        
          initial={{y: 50}}
          animate={{ y: [-100 , 0] }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2}}
        className='skills-styles'   >
            <div id='skills' className='skills-header'>
              <h1 >Skills</h1>
              <h4 >Here are some of my skills on which i have been working on for the past few months.</h4>
            </div>
              {images.map(([image, hueA, hueB]) => (
              <Card image={image} hueA={hueA} hueB={hueB} key={image} />
            ))}
              
        </motion.div>
        </motion.div>
   

    
  )
}

export default skills
