import React from 'react';
import discord from '../images/discord.png';
import {Link} from 'react-scroll';
import logo from '../images/logo.png'
import icon1 from '../images/skaters.jpg';
import icon2 from '../images/images (1).png';
import icon3 from '../images/strip.webp';

function Contact() {
  return (
    <div>
    <div id = "foot">
        <div className="upper">
            <h5>Join The Community</h5>
            <p id = "sub">The offical Riders Republic Forum.<br/>
                Discover RR!!
            </p>
            <div className="btn" >
                <a href="https://discord.com">
                <p id = "join" >JOIN </p></a>
                <img id = "discord" src = {discord} alt = "discord" />
                
            </div>
        </div>
    </div>
    <div className="lower">
        <img id='logo1' src={logo} alt="logo" style = {{ marginLeft: '30px', width: '6%', height:'5%', marginTop: '40px'}} />
      <div style = {{display: 'block'}}>
      <h3 id = "title">RIDERS REPUBLIC</h3>
      <ul className='foote'>
        <li><Link to = "Heading" smooth={true} duration={500}>Home</Link></li>
        <li><Link to = "box" smooth={true} duration={500}>Shop</Link></li>
        <li><Link to = "about" smooth={true} duration={500}>FAQ</Link></li>
      </ul>
      </div>
    </div>
    <div className="last" style = {{ display: 'block', backgroundColor: 'black'}}>
        <hr style={{ marginTop: '0', marginLeft: '140px',  marginRight: '40px' ,marginBottom: '12px'}} />
        <div style={{display: 'flex', marginBottom: '0px'}}>
          <img src={icon1} style = {{ width: '42px', height: '39px', borderRadius: '37px', marginLeft: '160px' }} alt="" />
          <img src={icon2} style = {{ width: '50px', height: '39px', borderRadius: '37px', marginLeft: '20px'}} alt="" />
          <img src={icon3} style = {{ width: '180px', height: '39px', borderRadius: '37px', marginLeft: '63%'}} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Contact;