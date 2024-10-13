import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuref = useRef();

  const openMenu = () => {
    menuref.current.style.right="0"
  }

  const closeMenu = () => {
    menuref.current.style.right="-350px"
  }
  

  return (
    <div className="navbar">

      <div className="logo"><span>&#123;</span> k <span>&#125;</span></div>

      <GiHamburgerMenu onClick={openMenu} className="nav-mob-open" />

      <ul ref={menuref} className="nav-menu">

        <img  />
        <IoClose onClick={closeMenu} className="nav-mob-close" />

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p
              className={menu === "home" ? "active-menu" : ""}
              onClick={() => {
                setMenu("home");
              }}
            >
              Home
            </p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              className={menu === "about" ? "active-menu" : ""}
              onClick={() => {
                setMenu("about");
              }}
            >
              About me
            </p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p
              className={menu === "services" ? "active-menu" : ""}
              onClick={() => {
                setMenu("services");
              }}
            >
              Services
            </p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#portfolio">
            <p
              className={menu === "portfolio" ? "active-menu" : ""}
              onClick={() => {
                setMenu("portfolio");
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              className={menu === "contact" ? "active-menu" : ""}
              onClick={() => {
                setMenu("contact");
              }}
            >
              Contact
            </p>
          </AnchorLink>
        </li>

      </ul>

    </div>
  );
};