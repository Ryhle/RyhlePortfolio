import React from 'react'
import './contact.css'
import GFK from '../../assets/gfk.png'
import CGI from '../../assets/cgi.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import GitHub from '../../assets/github.png'
import { Link } from 'react-scroll'
const Contact = () => {
  return (
    <section id="contactPage">
        <div id="services">
            <h1 className='contactPageTitle'>My Services</h1>
            <p className="serviceDesc">
                I have the opportunity to work with two IT Companies.
                This enabled me to be competent with the following services
            </p>
            <div className="serviceImgs">
                <img src={GFK} alt="" className="serviceImg"/>
                <img src={CGI} alt="" className="serviceImg"/>
            </div>
        </div>
        <div id="contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className="cpmtactDesc">Please Fill out the form below to discuss any work opportunities</span>
            <form className='contactForm'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>  
                <button className='submitBtn' type='submit' value="Send">Submit</button>
                <div className='links'>
                    <a href='https://www.instagram.com/nodnylsonryhle/'><img src={Instagram} alt='Instagram' className='link'/></a>
                    <a href='https://www.linkedin.com/in/ryhlenguinto/'><img src={LinkedIn} alt='LinkedIn' className='link'/></a>
                    <a href='https://github.com/Ryhle'><img src={GitHub} alt='GitHub' className='link'/></a>
                </div>        
            </form>
        </div>
    </section>
  )
}

export default Contact