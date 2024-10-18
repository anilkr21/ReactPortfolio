import React from "react";
import {Routes, Route,BrowserRouter, useLocation } from "react-router-dom"
import Home from "./scenes/home/Home";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
