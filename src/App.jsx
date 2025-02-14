import { Routes, Route } from "react-router-dom"; 
import React from "react";
import Example from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
// import Scroling from './Scroling.jsx';
import Motivation from './Motivation.jsx';
import Me from './Me.jsx';
import WhatIdo from './whatIdo.jsx';
import Pic from './pic.jsx';
import Contact from './contact.jsx';
import Projects from './Projects.jsx';
import DispCont from "./DispCont.jsx";
// import ScrambleText from './Scrumble.jsx';

function App() {
  return(
      <Routes>
      <Route path="/DispCont" element={<DispCont />} />
      <Route path="/" element={
        <>
          <Example/>
          <Home/>
          <Motivation/>
          <Me/>
          <Pic/>
          <WhatIdo/>
          <Projects/>
          <Contact/>
          <Footer/>
        </>
      } />
    </Routes>
  );
}

export default App