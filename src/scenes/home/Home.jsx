import React from 'react';
import Image from "../../assets/moon.png";
import {Box} from "@mui/material";
import {Row} from "react-bootstrap"

function Home() {
  return (
    <Box>
        <Box height="100vh" width="100%" sx={{backgroundColor:"black", opacity: "0.9"}}>
            <img src={Image} alt="Moon" style={{height:"100%" , width:"80%", objectFit:"cover"}}/>
        </Box>
    </Box>
  )
}

export default Home