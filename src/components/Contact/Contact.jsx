import React, {useRef} from 'react'
import './Contact.css'
import {FaLocationDot} from 'react-icons/fa6'
import {FaPhoneAlt} from 'react-icons/fa'
import {MdMarkEmailRead} from 'react-icons/md'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  //   var params = {
  //     from_name: document.querySelector("#name").value,
  //     email: document.querySelector("#email").value,
  //     phone: document.querySelector("#phone").value,
  //     message: document.querySelector("#message").value,
  // };

    emailjs.sendForm('service_2rewuqr', 'template_g52vhrc', form.current, 'oShe7g55firgwWZDP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='flexCenter'>
      <div className="c-container">
        <div className="content">
          <div className="left-side" data-aos='fade-right'>
            <div className="address details">
              <FaLocationDot size={25} color='#3e2093'/>
              <div className="topic">Address</div>
              <div className="text-one">Bangalore,</div>
              <div className="text-two">Karnataka</div>
            </div>
            <div className="phone details">
              <FaPhoneAlt size={25} color='#3e2093'/>
              <div className="topic">Phone</div>
              <div className="text-one">+91 8340541318</div>
              <div className="text-two">+91 8678079185</div>
            </div>
            <div className="email details">
              <MdMarkEmailRead size={25} color='#3e2093'/>
              <div className="topic">Email</div>
              <div className="text-one">magneticbrains18@gmail.com</div>
              <div className="text-two">nayakp0604@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text" data-aos='fade-left'>Send us a message</div>
            <p data-aos='fade-down'>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="input-box" data-aos='fade-left'>
                <input type="text" name='user_name' placeholder="Enter your name"/>
              </div>
              <div className="input-box" data-aos='fade-left'>
                <input type="text" name='user_email' placeholder="Enter your email"/>
              </div>
              <div className="input-box" data-aos='fade-left'>
                <input type="tel" name='user_phone' placeholder="Enter your phone"/>
              </div>
              <div className="input-box message-box" >
                <textarea cols="30" name='message' rows="10" placeholder='Enter Your Message'></textarea>
              </div>
              <div className="c-button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact