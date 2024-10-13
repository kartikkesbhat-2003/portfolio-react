import React from 'react'
import './Hero.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
import '../../../src/index.css'

export const Hero = () => {
  return (
    <header className="hero">

        <div className='hero-title'>
            <p className='hero-greeting'>Hey there!, I'm-</p>
            <h1 className='hero-name'>Kartik Kesbhat.</h1>
        </div>

        <h2 className='hero-subtitle text-large'><span>Web Developer.</span>A self-taught developer with an interest in Computer Science.</h2>

        <div className='hero-specilization'>
            <p>🚀 Currently specializing in Frontend (React.js)</p>
            <p>⚡ Frontend Engineer at GGL</p>
        </div>

        <div className='social-links'>
            <Link to="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <button className='social-button'>
                <FaGithub className='social-icon' />
                Github
                </button>
            </Link>

            <Link to="https://linkedin.com/in/yourusername" target="_blank">
                <button className='social-button'>
                <FaLinkedin className='social-icon' />
                LinkedIn
                </button>
            </Link>

            <Link to="mailto:youremail@example.com">
                <button className='social-button'>
                <MdEmail className='social-icon' />
                Email
                </button>
            </Link>
        </div>



                {/* <div className="hero-img">
                    <img src={profile_img} alt="Your Photo"/>
                </div>
                <h1 className="hero-heading"><span>I'am Kartik Kesbhat,</span> fullstack developer based in India.</h1>
                <p className="hero-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam repellat recusandae sunt, possimus molestias sapiente?</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary" >Contact me</a>
                    <a href="" className="btn btn-secondary">Resume</a>
                </div> */}
    </header>
  )
}