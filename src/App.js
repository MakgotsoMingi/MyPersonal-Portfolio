import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Skills from './Components/Skills';
import About from './Components/About';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Hero from './Components/Hero';
import Contact from './Components/ContactMe';


function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <hr style={{ border: "1px solid  #105e6c", width:"50%",margin:"20px auto" }} />
     <Education/>
      <Skills/>
      <hr style={{ border: "1px solid  #105e6c ",width:"50%",margin:"20px auto" }} />
    <Projects/>
      <hr style={{ border: "1px solid #105e6c",width:"50%",margin:"20px auto" }} />
     <Contact/>
      <Footer />
    </>
  );
}
export default App