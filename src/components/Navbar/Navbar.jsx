import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

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

      <img src={logo} />

      <img src={menu_open} onClick={openMenu} className="nav-mob-open" />

      <ul ref={menuref} className="nav-menu">

        <img onClick={closeMenu} src={menu_close} className="nav-mob-close" />

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

      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>

    </div>
  );
};
