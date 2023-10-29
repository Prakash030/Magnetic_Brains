import React from 'react'
import { useNavigate } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
          <div className="f-logo">'
            <img src="./header/logo.png" alt="" />
          </div>
          <div className="flexColCenter f-left">
            <h3>Quick Links</h3>
              <span onClick={()=>navigate('/')}>Home</span>
              <span onClick={()=>navigate('/about')}>About US</span>
              <span onClick={()=>navigate('/service')}>Our Services</span>
              <span onClick={()=>navigate('/portfolio')}>Portfolio</span>
              <span onClick={()=>navigate('/contact')}>Contact Us</span>
          </div>
          <div className="flexColCenter f-right">
            <h3>Contact Info</h3>
            <span>Lorem ipsum, dolor sit amet <br />consectetur adipisicing elit.<br/> Quasi, impedit!</span>
            <span style={{color:'brown'}}>Phone: 1234567890</span>
            <span style={{color:'brown'}}>Phone: 1234567890</span>
          </div>
          <div className="copyright">
            <span>© 2023 . All Rights Reserved by Magnetic Brains.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer