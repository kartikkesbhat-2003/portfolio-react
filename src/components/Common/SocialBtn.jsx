import React from 'react'
import { Link } from 'react-router-dom';
import './SocialBtn.css';

export const SocialBtn = ({ link, icon: Icon, text }) => {
    return (
        <Link to={link} target="_blank" rel="noopener noreferrer">
          <button className="social-button">
            <Icon className="social-icon" />
            <p>{text}</p>
          </button>
        </Link>
      );
}
