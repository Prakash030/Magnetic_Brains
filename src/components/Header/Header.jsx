// Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <section className="h-wrapper">
      <div className="padddings innerWidth flexSpaceBtn h-container">
        <NavLink to='/'>
          <img className='h-image' src="./header/logo.png" alt="" data-aos='fade-in'/>
        </NavLink>
        <div className={`h-menu ${menuActive ? 'active' : ''}`}>
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul>
            <li>
              <NavLink to='/' onClick={toggleMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' onClick={toggleMenu}>About</NavLink>
            </li>
            <li>
              <NavLink to='/service' onClick={toggleMenu}>Services</NavLink>
            </li>
            <li>
              <NavLink to='/portfolio' onClick={toggleMenu}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to='/contact' onClick={toggleMenu}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Header;
