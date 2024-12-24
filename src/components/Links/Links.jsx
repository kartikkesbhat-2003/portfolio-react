import React from "react";
import "./Links.css"; // Assuming external CSS for styling
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // React Icons library
import { SiCodechef, SiLeetcode } from "react-icons/si"; // Specific platform icons
import codechefLogo from '../../assets/links/codechefLogo.svg';
import codingninjasLogo from '../../assets/links/codingninjasLogo.svg';
import leetcodeLogo from '../../assets/links/leetcodeLogo.svg';
import githubLogo from '../../assets/links/githubLogo.svg';
import linkedinLogo from '../../assets/links/linkedinLogo.svg';


export const Links = () => {

  const links = [
    { name: "GitHub", url: "https://github.com/KartikKesbhat-2003", icon: githubLogo },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kartik-kesbhat/", icon: linkedinLogo },
    { name: "Leetcode", url: "https://leetcode.com/u/kartikkesbhat/", icon: leetcodeLogo },
    { name: "CodingNinjas", url: "https://www.naukri.com/code360/profile/KnownasKK", icon: codingninjasLogo },
    { name: "Codechef", url: "https://www.codechef.com/users/kartikkeshbhat", icon: codechefLogo },
  ];

  return (
    <section className="links-section" id="contact">
      <h1>🤝 Connect with Me</h1>
      <div className="links-container">
        {links.map((link, index) => (
          <div className="link-item-container">
            <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-item"
          >
            <img src={link.icon} alt={`${link.name} Icon`} className="link-icon" />
          </a>
          </div>
          
        ))}
      </div>
    </section>
  );
}
