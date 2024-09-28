import React from 'react'
import Portfolio1 from '../../assets/dummy.png'
import Portfolio2 from '../../assets/dummy.png'
import Portfolio3 from '../../assets/dummy.png'
import Portfolio4 from '../../assets/dummy.png'
import './works.css'
const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">Some Description You Know The Vibes</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt='Portfolio1' className="worksImg"/>
            <iframe className="worksImg" width="420" height="315" src="https://www.youtube.com/embed/MZpmvBd717c?si=5DoXo9EDautA4AXt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className="worksImg" width="420" height="315" src="https://www.youtube.com/embed/ryDJxNWFnSc?si=EqGQhwX0z1mB2bV5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className="worksImg" width="420" height="315" src="https://www.youtube.com/embed/MzFnXnINP8s?si=xRLnxgcDoZG7AVn7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <button className='workBtn'>See More</button> 
    </section>
  )
}

export default Works