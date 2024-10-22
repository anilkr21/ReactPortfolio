import React, {useEffect, useRef} from 'react';
import BG from '../../assets/bag-01.png'
import { color, motion , useInView, useAnimation} from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Bio } from '../../data/constants';

function Home() {

  return (
    <div  id='home' className='hero' style={{marginTop: "50px"}}>
      <div className='home-styled'>
            <img className='home-image' src={BG} alt="bg-image" />
            <div className='home-data '>
                <motion.div 
                
                  initial={{opacity: 0, x: -100}}
                  animate={{opacity: 1, x: [-50 ,150, 50]}}
                  transition={{duration: 0.5 , delay: 1.5}}
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
                  initial={{opacity: 0, y: 50}}
                  animate={{opacity: 1, y: [ 50,  -5]}} 
                  transition={{duration: 0.5 , delay: 2}}
                  className='home-details-styled'
                >
                    <h1 className='name-styled'>Hi, I am <br/>Anil Kumar Gangarapu</h1><br/>
                    <h2 >UI/UX Developer & Designer</h2><br/>
                    <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
                    <div style={{display:"flex", alignItems:"center", justifyContent: "space-around", gap:"20px", height:"auto",marginTop:"20px", width:"100%"}}>
                      <LinkedInIcon onClick={()=>{ window.open(Bio.linkedin, '_blank');}} target="display" sx={{fontSize: "50px", color:"white" }} /> 
                      <GitHubIcon onClick={()=>{ window.open(Bio.github, '_blank');}}  sx={{fontSize: "50px", color:"white" }}/>
                      <InstagramIcon onClick={()=>{ window.open(Bio.insta, '_blank');}} sx={{fontSize: "50px", color:"white" }}/>
                    </div>
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