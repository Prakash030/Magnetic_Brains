import React from 'react'
import './Services.css'
import '../Home/Home.css'
import { GiArchiveResearch, GiThink, GiBurningBook, GiComputerFan, GiHypodermicTest, GiSettingsKnobs } from 'react-icons/gi'


const Services = () => {
  return (
    <div>
      <div className="image-container" >
        <img src="./Services/img1.avif" alt="" data-aos='fade-out'/>
      </div>
      <div className="paddings flexCenter innerWidth s-container">
        <div className="s-info">
          <h2 style={{ marginBottom: '2rem' }} data-aos='fade-out'>Web Development Services</h2>
          <p data-aos='fade-up'>A highly interactive and fully-functional website is needed for your business to keep it on the right track. Be it increasing the brand name, helping sustain the fast-paced competition. Highlighting products and services among customers, or increasing sales and revenue, a website serves your business in multiple ways.
            <br /> <br />
            As a web development company in Bangalore, we are a group of creative web developers who are versatile in developing various websites leveraging different CMS platforms. We perform quality coding work to make your website high-performing and business-friendly. We create a website that promotes your products and increases sales, and ROI.
          </p>
        </div>

        <div className="flexCenter s-services">
          <h2 style={{ color: 'white' }} data-aos='fade-down'>What We Provide To Build Efficient Websites</h2>
          {/* <img src="./home/pic2.png" alt="" /> */}
          <div className='s-outer'>
            <div className="flexColStart s-contain" data-aos='fade-right'>
              <div className="s-left">High Quality</div>
              <div className="s-right">We provide high-quality website development services on various platforms.</div>
            </div>

            <div className="flexColStart s-contain" data-aos='fade-right'>
              <div className="s-left">Affordable prices</div>
              <div className="s-right">We develop Websites at affordable prices for our clients.</div>
            </div>

            <div className="flexColStart s-contain" data-aos='fade-right'>
              <div className="s-left">Mobile compatibility</div>
              <div className="s-right">We develop the code in a compatible way, where people can access the site through any kind of device.</div>
            </div>

            <div className="flexColStart s-contain" data-aos='fade-right'>
              <div className="s-left">Browser consistency</div>
              <div className="s-right">We verify through every browser to make sure that it will be compatible with cross platforms.</div>
            </div>

            <div className="flexColStart s-contain" data-aos='fade-right'>
              <div className="s-left">Usable forms</div>
              <div className="s-right">Efficient coding in usable forms makes the site collect refined data from the perfect end users.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="s-process">
        <div className="paddings innerWidth p-container">
          <h2 className='primaryText' style={{ textAlign: "center" }}>Technologies -<span style={{ color: "var(--black)" }}>- We Use!!</span></h2>
          <div className="flexCenter s-container">
            <div className="flexColCenter s-card" data-aos='fade-left'>
              <img src="./Services/html.png" alt="" />
            </div>

            <div className="flexColCenter s-card" data-aos='fade-left'>
              <img src="./Services/css.png" alt="" />
            </div>

            <div className="flexColCenter s-card" data-aos='fade-left'>
              <img src="./Services/js.png" alt="" />
            </div>

            <div className="flexColCenter s-card" data-aos='fade-left'>
              <img src="./Services/react.png" alt="" />
            </div>
            <div className="flexColCenter s-card" data-aos='fade-left'>
              <img src="./Services/mongo.png" alt="" style={{ width: '200px', height: '100px' }} />
            </div>
            <div className="flexColCenter s-card" data-aos='fade-left'>
              <img src="./Services/mysql.png" alt="" style={{ width: '200px', height: '80px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services