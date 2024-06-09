import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from "../../assets/profile_img.svg"

export const About = () => {
  return (
    <div id='about' className='about'>
       <div className="services-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img}/>
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe ipsa natus voluptatum repudiandae iste, consectetur eum itaque rerum voluptate odit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nihil recusandae! Inventore facere quas distinctio?</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p> 
                        <div><hr style={{width : "50%"}}/></div>
                    </div>
                    <div className="about-skill">
                        <p>ReactJS</p>
                        <div><hr style={{width : "90%"}}/></div>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p>
                        <div><hr style={{width : "70%"}}/></div>
                    </div>
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <div><hr style={{width : "60%"}}/></div>
                    </div>
                </div>
            </div>
        </div>

        <div className="about-achievements">
            <div className="achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIANCE </p>
            </div>
            <hr/>
            <div className="achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}
