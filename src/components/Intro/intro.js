import React from 'react'
import './intro.css'
import bg from "../../assets/ME.gif"
import { Link } from 'react-scroll'
import btnImg from '../../assets/hireme.png'
const Intro = () => {
  return(
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Ryhle</span><br/>AI Software Developer</span>
            <p className='introPara'>I am a Data-driven Software Developer with experience <br/>in AI Research and Data Science</p>
            <a href='https://www.linkedin.com/in/ryhlenguinto/'><button className="btn"><img src={btnImg} alt='hireme' className='btnImg'/>Hire Me!</button></a>
        </div>
        <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}
export default Intro