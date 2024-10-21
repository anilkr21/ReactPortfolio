import React, { useState } from "react";
import {Routes, Route,BrowserRouter, useLocation } from "react-router-dom"
import { darkTheme, lightTheme } from './utils/Themes'
import Home from "./scenes/home/Home";
import '../src/style/Global.scss';
import Sidebar from "./scenes/global/Sidebar";
import Navbar from "./scenes/global/Navbar";
import  Dashboard  from './dashboard/Dashboard'
import styled, { ThemeProvider } from "styled-components";
import ProjectDetails from '../src/scenes/ProjectDetails'
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <div className="app-styled">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard /> } />
          
        </Routes>
        {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
