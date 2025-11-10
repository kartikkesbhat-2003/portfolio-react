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
            <div className='hero-content'>
                <div className='hero-status'>
                    <span className='status-light' aria-hidden />
                    <span>Available for freelance</span>
                    <span className='hero-divider'>•</span>
                    <span>Maharashtra, IND · UTC+5:30</span>
                </div>

                <p className='hero-greeting'>Hey there! 👋</p>
                <h1 className='hero-heading'>I'm Kartik, a product-minded developer crafting user-centric experiences.</h1>
                <p className='hero-description'>I bring ideas to life with clean code, thoughtful interaction design, and a passion for emergent web technologies.</p>

                <div className='hero-tags'>
                    <span>Fullstack JavaScript</span>
                    <span>Interaction Design</span>
                    <span>Accessibility-first</span>
                </div>

                <div className='hero-actions'>
                    <Link className='primary-cta' to='mailto:kkesbhat1601@gmail.com'>Say Hello! 🔥</Link>
                    <div className='social-links'>
                        <SocialBtn link="https://github.com/kartikkesbhat-2003" icon={FaGithub} text="Github" />
                        <SocialBtn link="https://www.linkedin.com/in/kartik-kesbhat/" icon={FaLinkedin} text="LinkedIn" />
                        <SocialBtn link="mailto:kkesbhat1601@gmail.com" icon={MdEmail} text="Email" />
                    </div>
                </div>
            </div>

            <aside className='hero-profile'>
                <div className='profile-card'>
                    <div className='profile-avatar'>
                        <span>K</span>
                    </div>
                    <div className='profile-meta'>
                        <h3>Kartik Kesbhat</h3>
                        <p>Full Stack Developer</p>
                    </div>
                    <div className='profile-tags'>
                        <span>Frontend</span>
                        <span>Backend</span>
                    </div>
                </div>
            </aside>
        </header>
    )
}