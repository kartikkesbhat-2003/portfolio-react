import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile_img.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Hero = () => {
  return (

    <header className="hero">
                <div className="hero-img">
                    <img src={profile_img} alt="Your Photo"/>
                </div>
                <h1 className="hero-heading"><span>I'am Kartik Kesbhat,</span> fullstack developer based in India.</h1>
                <p className="hero-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam repellat recusandae sunt, possimus molestias sapiente?</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary" >Contact me</a>
                    <a href="" className="btn btn-secondary">Resume</a>
                </div>
    </header>
  )
}
