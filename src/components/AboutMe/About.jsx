import React from 'react'
import profile from '../../assets/kartik.jpg'
import './About.css'

export const About = () => {
    return (
        <section className='about' id='about'>
        <div className='about-image-container'>
            <img src={profile} alt="Kartik Kesbhat" className='about-image'/>
        </div>
        <div className='about-content'>
            <h2 className='about-heading'>⚡ About Me</h2>
            <p className='about-paragraph'>
                Hey! I'm Kartik Kesbhat, but you can call me KK. My passion for technology began early, and I've been dedicated to coding and development ever since. 💻 Over the years, I've become skilled in various programming languages and technologies, with a strong focus on web 🌐 and mobile 📱 development.
            </p>
            <p className='about-paragraph'>
                Beyond coding, I'm an active member of the community. 🌟 I’ve led multiple initiatives at Prayas Youth Forum, where I take pride in organizing social activities that make a positive impact. My current interests are centered around web & mobile development, contributing to open-source projects 🌍, and tackling challenging problems in competitive programming. 🎯
            </p>
            <p className='about-paragraph'>
            When I'm not coding, you can find me gaming with friends 🎮, watching a show on Netflix 📺, or going for a relaxing walk to unwind. 🚶‍♂️
            </p>
        </div>
    </section>

  )
}



