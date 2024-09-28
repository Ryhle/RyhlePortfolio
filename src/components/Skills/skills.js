/*THIS IS CODED BY: RYHLE NODNYLSON GUINTO - 301356103 September 28, 2024
FILE NAME: skills.js*/
import React from 'react'
import './skills.css'
import AI from '../../assets/ai.png'
import Data from '../../assets/data.png'
import Dev from '../../assets/dev.png'
const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a passionate AI Software Developer with two years epxerience in the industry in creating user-friendly AI-powered software. I have a strong understanding of AI techniques and frameworks such as TensorFlow and Torch, as well as API development for multi-environment applications</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={AI} alt='AI' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>AI Development</h2>
                    <p>Python, TensorFlow, PyTorch, NLP, Image Classification, LLM, Machine Translation</p>
                </div>
                </div>
            <div className='skillBar'>
                <img src={Data} alt='Data' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Data Science</h2>
                    <p>Machine Learning, Data Visualizzation, Statistics, Storytelling</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={Dev} alt='Dev' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Software Development</h2>
                    <p>Python, C#, Java, SQL, MongoDB, Full-Stack Development, Git, Automation </p>
            </div>
                </div>
        </div>
    </section>
  );
}

export default Skills