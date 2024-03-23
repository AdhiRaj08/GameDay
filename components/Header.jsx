import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Purchase from './Purchase';
import Contact from './Contact';
import backimg from '../images/FREESTYLIN_FINAL_LANDSCAPE_1920X1080_JPG-9928423d535d3d18f841.jpg';

const backgroundStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1, 
  backgroundImage: `url(${backimg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'blur(3px)'
};
function Header () {
  return (
    <div id = "main">
      <div style={backgroundStyle} id = "img"/>
        <Navbar />
        <Home />
        <About />
        <Purchase />
        <Contact />
    </div>
  )
}

export default Header;