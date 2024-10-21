import React from 'react'
import { motion, transform} from "framer-motion";
import Image1 from '../../assets/moon.png';


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
  ["🍊", ],
  ["🍋", ],
  ["🍐", ],
  ["🍏", ],
  ["🫐",],
  ["🍆", ],
  ["🍇", ],
];



const skills = () => {
  return (
    <div className='skills-styles'>
        <div className='skills-header'>
          <h1 >Skills</h1>
          <h4 >Here are some of my skills on which i have been working on for the past few months.</h4>
        </div>
          {images.map(([image, hueA, hueB]) => (
          <Card image={image} hueA={hueA} hueB={hueB} key={image} />
        ))}
          
    </div>

    
  )
}

export default skills
