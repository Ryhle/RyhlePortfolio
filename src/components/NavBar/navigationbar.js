import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'
const NavBar = () => {
  return (
    <nav className="navbar">
        <img src={logo} alt="logo"/>
        <div className="desktopMenu">
            <Link className='desktopMenuListItem' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            <Link className='desktopMenuListItem' to='skills' spy={true} smooth={true} offset={-100} duration={500}>About Me</Link>
            <Link className='desktopMenuListItem' to='works' spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link>
            <Link className='desktopMenuListItem' to='services' spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
            <img src={contactImg} alt='contactImg' className='desktopMenuImg'/>Contact Me
        </button>
    </nav>
  )
}

export default NavBar