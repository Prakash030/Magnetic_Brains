  import React from 'react'
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import { sliderSettings } from "../../utils/common";
// import 'swiper/css'
import './Home.css'
import { useNavigate } from "react-router-dom";
import { GiArchiveResearch, GiThink, GiBurningBook, GiComputerFan, GiHypodermicTest, GiSettingsKnobs} from 'react-icons/gi'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="home-wrapper">
      <div className="image-container">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* <SwiperSlide><img src="./hero/gallery.png" alt="" /></SwiperSlide> */}
        <SwiperSlide><img src="./hero/pic1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./hero/pic2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./hero/pic3.png" alt="" /></SwiperSlide>
      </Swiper>
      </div>

      <div className="paddings innerWidth welcome">
        <h2 className='primaryText' style={{ textAlign: "center" }} data-aos='fade-in-out'>Welcome to <span style={{ color: "var(--black)" }}>Magnetic Brains</span></h2>

        <div className="flexCenter home-container">
          {/* Left Side */}
          <div className="leftSide" data-aos='fade-right'>
            <p className='secondaryText'>Welcome to <em style={{fontWeight:'bold'}}>Magnetic Brains</em>, where innovation meets <br />
             web development excellence! We are a cutting-edge <br />
              startup company passionate about crafting immersive digital<br />
              experiences that elevate your online presence.<br />
              Specializing in bespoke website development, our team <br />
              of skilled developers, designers, and tech enthusiasts are <br />
              dedicated to bringing your vision to life. Whether you need <br />
               a sleek business site, a dynamic e-commerce platform, or a <br />
               captivating portfolio, we tailor solutions to match your unique needs.</p>

            <button onClick={() => navigate("/contact")} className="button" data-aos='zoom-in'>
              Conatct Me
            </button>
          </div>

          {/* Right Side */}
          <div className="rightSide" data-aos='fade-left'>
            <img src="./home/pic1.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="home-services" data-aos='fade-up'>
        <h2 className='primaryText' style={{ textAlign: "center" }}>Our <span style={{ color: "var(--black)" }}>Services</span></h2>
        <div className="flexCenter home-container">
          {/* Left Side */}

          <div className="service-rightSide">
            <img src="./home/pic2.png" alt="" />
          </div>

          {/* Right Side */}
          <div className=" leftSide">
            <p className='secondaryText' style={{ color: "black", fontWeight: "500" }}>At <em style={{fontWeight:'bold'}}>Magnetic Brains</em>, we offer a comprehensive range of web development services tailored to meet your diverse digital needs. Our expertise includes creating visually appealing and user-friendly websites, dynamic e-commerce platforms, responsive mobile applications, and robust content management systems. We excel in customizing solutions to match your brand identity, ensuring seamless integration of cutting-edge technologies. From intuitive UI/UX design to robust back-end development, we provide end-to-end services that guarantee a captivating online presence. Elevate your business with our innovative web solutions and drive unparalleled success in the digital realm.</p>

            <button onClick={() => navigate("/service")} className="button" data-aos='zoom-out'>
              Checkout Services
            </button>
          </div>
        </div>
      </div>

        <div className="home-process">
          <div className="paddings innerWidth p-container">
            <h2 className='primaryText' style={{ textAlign: "center" }}>Our <span style={{ color: "var(--black)" }}>Work Process</span></h2>
            <div className="flexCenter container ">
              <div className="flexColCenter card animate" data-aos='fade-up'>
                <GiArchiveResearch style={{color:'#fff'}} size={60} />
                <span>Research</span>
              </div>

              <div className="flexColCenter card" data-aos='fade-up'>
                <GiThink style={{color:'#ffbf00'}} size={60} />
                <motion.span
                initial={{y: "2rem", opacity:0}}
                animate={{y:0, opacity:1}}
                transition={{
                    duration:2,
                    type: "spring"
                }}>Planning</motion.span>
              </div>

              <div className="flexColCenter card" data-aos='fade-up'>
                <GiBurningBook style={{color:'brown'}} size={60} />
                <span>Design</span>
              </div>

              <div className="flexColCenter card" data-aos='fade-up'>
                <GiComputerFan style={{color:'yellow'}} size={60} />
                <span>Implementation</span>
              </div>
              <div className="flexColCenter card" data-aos='fade-up'>
                <GiHypodermicTest style={{color:'green'}} size={60} />
                <span>Testing and <br /> Deployment</span>
              </div>
              <div className="flexColCenter card" data-aos='fade-up'>
                <GiSettingsKnobs style={{color:'violet'}} size={60} />
                <span>Maintainance</span>
              </div>
            </div>
          </div>
        </div>
    </section>

  )
}

export default Home

