import React from 'react'
import './About.css'
import { GiArchiveResearch, GiThink, GiBurningBook, GiComputerFan, GiHypodermicTest, GiSettingsKnobs} from 'react-icons/gi'


const About = () => {
  return (
    <div>
      <div className="about-img-container" data-aos='fade-in'>
        <img src="./hero/img1.jpg" alt="" />
      </div>
      <h2 data-aos='fade-in-out'>Magnetic Brains</h2>
      <div className="paddings flexCenter innerWidth about-container">
        <div className="about-left" data-aos='fade-down'>
          <span>Welcome to <em style={{fontWeight:'bold'}}>Magnetic Brains</em>, where creativity converges with technology to redefine the digital landscape. Founded on the principles of innovation and expertise, we are a passionate team of web developers, designers, and strategists dedicated to crafting exceptional online experiences. Our journey began with a vision: to empower businesses and individuals with cutting-edge websites that not only captivate audiences but also drive meaningful engagement. At our company, we pride ourselves on our ability to blend artistic flair with technical prowess. Whether you are a startup dreaming of a unique online identity or an established enterprise seeking a digital makeover, we are here to transform your ideas into reality. With a focus on user-centric design, seamless functionality, and scalable solutions, we embark on every project with enthusiasm and commitment. Our mission is to not just meet but exceed your expectations, delivering websites that resonate with your brand essence and leave a lasting impression. Join us on this digital journey, and let's create something extraordinary together.</span>
        </div>
        <div className="about-right" data-aos='fade-down'>
          <img src="./hero/logoFull.png" alt="" />
        </div>
      </div>

      <div className="home-process">
        <div className="paddings innerWidth p-container">
          <h2 className='primaryText' style={{ textAlign: "center" }}>Our <span style={{ color: "var(--black)" }}>Ethical Principles</span></h2>
          <div className="flexCenter container">
            <div className="flexColCenter card" data-aos='fade-down'>
              <GiArchiveResearch style={{color:'#fff'}} size={60} />
              <span>Transparency</span>
            </div>

            <div className="flexColCenter card"  data-aos='fade-down'>
              <GiThink style={{color:'#ffbf00'}} size={60} />
              <span>Confidentiality</span>
            </div>

            <div className="flexColCenter card" data-aos='fade-down'>
              <GiBurningBook style={{color:'brown'}} size={60} />
              <span>Privacy</span>
            </div>

            <div className="flexColCenter card" data-aos='fade-down'>
              <GiComputerFan style={{color:'yellow'}} size={60} />
              <span>TimelyDelivery</span>
            </div>
            <div className="flexColCenter card" data-aos='fade-down'>
              <GiHypodermicTest style={{color:'green'}} size={60} />
              <span>Professionalism</span>
            </div>
            <div className="flexColCenter card" data-aos='fade-down'>
              <GiSettingsKnobs style={{color:'violet'}} size={60} />
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About