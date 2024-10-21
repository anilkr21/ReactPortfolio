import React from 'react';
import BG from '../../assets/bag-01.png'
import { motion } from 'framer-motion';
function Home() {
  return (
    <div className='hero'>
      <div className='home-styled'>
            <img className='home-image' src={BG} alt="bg-image" />
            <div className='home-data '>
                <motion.div 
                  initial={{opacity: 0, x: -100}}
                  animate={{opacity: 1, x: [-50 ,150, 50]}}
                  transition={{duration: 0.5 , delay: .75}}
                  className='home-data-left'
                >
                  <h4>/01</h4>
                  <div className='lines'>
                    <span />
                  </div>
                  <p>Work Collection</p>
                  <span>Active Collection</span>
                  <span>Passive Collection</span>
                </motion.div>

                <motion.div 
                  initial={{opacity: 0, x: 50}}
                  animate={{opacity: 1, x: [ 40, -100, -5]}}
                  transition={{duration: 0.5 , delay: .75}}
                  className='home-details-styled'
                >
                    <h1 className='name-styled'>Hi, I am <br/>Anil Kumar Gangarapu</h1><br/>
                    <h2 >UI/UX Developer & Designer</h2><br/>
                    <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                </motion.div>
            </div>
      </div>
      <div className='skillsPage'>
        <div >

        </div>
      </div>
    </div>

  )
}

export default Home