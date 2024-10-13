import React from 'react'
import profile from '../../assets/kartik.jpg'
import './About.css'

export const About = () => {
  return (
    <div className='about'>
        <div className='about-content'>
            <h2 className='about-heading'>⚡ About Me</h2>
            <p className='about-paragraph'>
                Hey! I'm Abdul Rahman, I've been close to a computer since an early age, and been passionate about it ever since.
            </p>
            <p className='about-paragraph'>
                I really liked to build stuff using no-code tools back in 2010, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies, and had the privilege to work in a Recruitment Company and a SaaS Company. I'm interested in building something awesome with code and automating tasks with code, currently focused on Web & Mobile Development, Open Source, and Competitive Programming.
            </p>
            <p className='about-paragraph'>
                When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play basketball! 🏀
            </p>
        </div>
        <div className='about-image-container'>
            <img src={profile} alt="Abdul Rahman's Profile" className='about-image'/>
        </div>
    </div>

  )
}
