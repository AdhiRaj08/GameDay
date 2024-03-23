import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div>
        <nav>
            <Link to = 'main' className = 'logo'>
                <img id='logo' src={logo} alt="logo" />
                <span className='nav-icon'>RIDERS  REPUBLIC</span>
            </Link>
            <ul className='menu'>
                <li><Link to = "mai" smooth={true} duration={500}>Home</Link></li>
                <li><Link to = "box" smooth={true} duration={500}>Purchase</Link></li>
                <li><Link to = "foote" smooth={true} duration={500}>Contact Us</Link></li>
                <li><Link to = "about" smooth={true} duration={500}>About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar;
