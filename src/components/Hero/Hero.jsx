import React from 'react'
import './Hero.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'
import { SocialBtn } from '../Common/SocialBtn'
import '../../../src/index.css'

export const Hero = () => {
  return (
    <header className="hero" id='home'>

        <div className='hero-title'>
            <p className='hero-greeting'>Hey there!, I'm-</p>
            <h1 className='hero-name'>Kartik Kesbhat.</h1>
        </div>

        <h2 className='hero-subtitle text-large'><span>Web Developer.</span>A self-taught developer with an interest in Computer Science.</h2>

        <div className='hero-specilization'>
            <p>🚀 Currently specializing in Fullstack (JavaScript)</p>
            <p>⚡ Web Development Intern at DC Info Tech</p>
        </div>

        <div className='social-links'>

            <SocialBtn link="https://github.com/kartikkesbhat-2003" icon={FaGithub} text="Github" />

            <Link to="https://www.linkedin.com/in/kartik-kesbhat/" target="_blank">
                <button className='social-button'>
                <FaLinkedin className='social-icon' />
                LinkedIn
                </button>
            </Link>

            <Link to="mailto:kkesbhat1601@gmail.com">
                <button className='social-button'>
                <MdEmail className='social-icon' />
                Email
                </button>
            </Link>
        </div>
    </header>
  )
}