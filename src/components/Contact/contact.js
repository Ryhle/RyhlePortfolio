/*THIS IS CODED BY: RYHLE NODNYLSON GUINTO - 301356103 September 28, 2024
FILE NAME: contact.js*/
import React, {useRef} from 'react'
import './contact.css'
import GFK from '../../assets/gfk.png'
import CGI from '../../assets/cgi.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import GitHub from '../../assets/github.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_n7c0icq', 'template_cgsd4kk', form.current, {
          publicKey: 'oRumXTRsLQzrPkmSD',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset();
            alert('Email Sent!')
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <section id="contactPage">
        <div id="services">
            <h1 className='contactPageTitle'>My Services</h1>
            <p className="serviceDesc">
                I have the opportunity to work with two IT Companies.
                This enabled me to be competent with the following services
            </p>
            <div className="serviceImgs">
                <div className="serviceFrame">
                    <img src={GFK} alt="GFK" className="serviceImg"/>
                    <div className="serviceText">AI/Data Analytics, Automation</div>
                </div>
                <div className="serviceFrame">
                    <img src={CGI} alt="CGI" className="serviceImg"/>
                    <div className="serviceText">AI/IT Consulting, Automation</div>
                </div>
            </div>
        </div>
        <div id="contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className="contactDesc">Please Fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name="from_name"/>
                <input type='email' className='email' placeholder='Your email' name="from_email"/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>  
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <a href='https://www.instagram.com/nodnylsonryhle/'><img src={Instagram} alt='Instagram' className='link'/></a>
                    <a href='https://www.linkedin.com/in/ryhlenguinto/'><img src={LinkedIn} alt='LinkedIn' className='link'/></a>
                    <a href='https://github.com/Ryhle'><img src={GitHub} alt='GitHub' className='link'/></a>
                </div>        
            </form>
        </div>
    </section>
  );
}

export default Contact
