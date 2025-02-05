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
// import ScrambleText from './Scrumble.jsx';

function App() {
  return(
    <>
      <Example/>
      <Home/>
      {/* <Scroling/> */}
      <Motivation/>
      <Me/>
      <Pic/>
      <WhatIdo/>
      <Projects/>
      <Contact/>
      {/* <ScrambleText/> */}
      <Footer/>
    </>
  );
}

export default App