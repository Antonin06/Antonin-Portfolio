import React from 'react';
import Navigation from './Components/Navigation';
import Landing from './Components/Landing';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { motion } from 'framer-motion';
import "./Assets/Css/Core/App.css";
import "./Assets/Css/Core/Cursor.css";
// import CustomCursor from './Components/Custom_Cursor';

const App = () => {

  
  return (
    <>
    {/* <CustomCursor/> */}
  <motion.div
    initial={{ opacity: 0, backgroundColor: "#000" }}
    animate={{ opacity: 1, backgroundColor: "#000" }}
    transition={{ duration: 1, backgroundColor: "#000" }}
    exit={{ opacity: 0 }}
  >
    <Landing/>   
    <Navigation/>
    <About/>
    <Projects/>

    <Contact/>
    {/* <Footer/> */}
  </motion.div>
  </>
  );
}
export default App;
