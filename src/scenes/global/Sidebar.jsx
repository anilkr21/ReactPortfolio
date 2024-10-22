import React from 'react';
import { List } from 'phosphor-react';
import {motion} from 'framer-motion';
import { Bio } from '../../data/constants';
const Sidebar = () => {
  return (
    <motion.aside 
      className='sidebar-styled'
      initial={{opacity: 0, x:-100}}
      animate={{opacity: 1, x: 0}}
      transition={{ duration : 0.5, delay :  .25}}
    >
      <div className='menu-btn'>
        <List  size={25}/>
      </div>

      <div className='social'>
        <span  onClick={()=>{ window.open(Bio.github, '_blank');}} >git</span>
        <span onClick={()=>{ window.open(Bio.linkedin, '_blank');}}>In</span>
        <span onClick={()=>{ window.open(Bio.insta, '_blank');}}>Inst</span>
      </div>
    </motion.aside>
  )
}

export default Sidebar
