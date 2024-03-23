import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({duration: 2000,
      disable: 'mobile',
      mirror: true
    });
  }, []);
  return (
    <div data-aos = "fade-down" >
        <div className="about">
            <h2>About Us</h2>
            <p id = "para">Introducing <span id = "special">Skater Republic</span>, the thrilling upcoming arcade game that puts 
                you right in the heart of a dynamic skateboarding adventure! Explore 
                expansive skateparks, bustling cityscapes, and renowned real-life locations for 
                an immersive experience like no other. Featuring intuitive controls, a 
                sophisticated trick system, and a compelling progression framework, players 
                will find themselves immersed in a world where every achievement feels truly 
                gratifying. Keep an eye out as we work diligently to bring this extraordinary 
                gaming experience to life.<p style = {{paddingBottom:'2px'}}/>You right in the heart of a dynamic skateboarding adventure! Explore 
                expansive skateparks, bustling cityscapes, and renowned real-life locations for 
                an immersive experience like no other. Featuring intuitive controls, a 
                sophisticated trick system, and a compelling progression framework, players 
                will find themselves immersed in a world where every achievement feels truly 
                gratifying. Keep an eye out as we work diligently to bring this extraordinary 
                gaming experience to life.</p>
        </div>
    </div>
  )
}

export default About;
