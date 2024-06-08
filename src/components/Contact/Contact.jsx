import React from 'react';
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import { toast } from 'react-toast';

export const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5fdcbac2-35b4-4872-b5ed-7e80fd225de4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          toast.success(res.message)
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>

        <div className="contact-section">

            <div className="contact-left">

                <h1>Let's talk</h1>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, eius?</p>

                <div className="contact-details">

                    <div className="contact-detail">
                        <img src={mail_icon} /> <p>KARTIKKESBHAT2003@GMAIL.COM</p>
                    </div>

                    <div className="contact-detail">
                        <img src={location_icon} /> <p>+91 885 698 7832</p>
                    </div>

                    <div className="contact-detail">
                        <img src={call_icon} /> <p>Pune, Maharashtra</p>
                    </div>

                </div>

            </div>

            <form onSubmit={onSubmit} action="" className="contact-right">

                <label htmlFor='' >Your name</label>
                <input type='text' placeholder='Enter your name' name='name' />

                <label htmlFor='' >Your email</label>
                <input type='email' placeholder='Enter your email' name='email' />

                <label>Write your message here</label>
                <textarea name='message' rows="8" placeholder='Enter your message' />

                <button type='submit' className='contact-submit' >Submit now</button>

            </form>

        </div>
    </div>
  )
}
