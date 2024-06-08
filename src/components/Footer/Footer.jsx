import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">

            <div className="footer-top-left">
                <img src={footer_logo} />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, molestias!</p>
            </div>

            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt='' />
                    <input type="email" placeholder='Enter your email' />
                </div>

                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Kartik Kesbhat. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p> 
            </div>
        </div>
    </div>
  )
}