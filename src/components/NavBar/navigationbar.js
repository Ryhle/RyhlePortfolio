/*THIS IS CODED BY: RYHLE NODNYLSON GUINTO - 301356103 September 28, 2024
FILE NAME: navigationbar.js*/
import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'
const NavBar = () => {
    const[showMenu, setShowMenu] = useState(false);
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
            <img src={contactImg} alt='contactImg' className='desktopMenuImg'/>Contact Me</button>
            <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link className='listItem' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Home</Link>
                <Link className='listItem' to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>About Me</Link>
                <Link className='listItem' to='works' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link className='listItem' to='services' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Services</Link>
                <Link className='listItem' to='contact' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
    </nav>
  )
}

export default NavBar