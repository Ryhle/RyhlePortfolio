import React from 'react'
import Portfolio1 from '../../assets/dummy.png'
import './works.css'
const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">These are the projects that I have done. These projects involve AI, NLP, Full-stack Development, GUI applications, and Automation using Python and C#</span>
        <div className='worksImgs'>
            <iframe className="worksImg" width="500" height="315" src="https://www.youtube.com/embed/PovhBPbkBmM?si=i0BL8PpG0SdSD7WL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className="worksImg" width="500" height="315" src="https://www.youtube.com/embed/MZpmvBd717c?si=5DoXo9EDautA4AXt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className="worksImg" width="500" height="315" src="https://www.youtube.com/embed/ryDJxNWFnSc?si=EqGQhwX0z1mB2bV5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className="worksImg" width="500" height="315" src="https://www.youtube.com/embed/MzFnXnINP8s?si=xRLnxgcDoZG7AVn7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <a href="https://github.com/Ryhle"><button className='workBtn'>See More</button></a>
    </section>
  )
}

export default Works