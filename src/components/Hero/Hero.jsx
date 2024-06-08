import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile_img.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className='hero-profile-img'>
        <img src={profile_img}/>
      </div>
        
        <h1><span>I'am Kartik Kesbhat,</span> fullstack developer based in India.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid non exercitationem doloribus, sapiente ratione quaerat aperiam eius doloremque nam voluptas?</p>
        <div className="hero-action">
            <div className="hero-connect">
              <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
            </div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}
