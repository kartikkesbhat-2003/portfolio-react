import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleSetMenu = (value) => {
    setMenu(value);
    closeMenu();
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <span>&#123;</span> k <span>&#125;</span>
        </div>

        {menuOpen ? (
          <IoClose onClick={toggleMenu} className="nav-mob-toggle" />
        ) : (
          <GiHamburgerMenu onClick={toggleMenu} className="nav-mob-toggle" />
        )}

        <ul className="nav-menu">
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#home">
              <p
                className={menu === "home" ? "active-menu" : ""}
                onClick={() => setMenu("home")}
              >
                Home
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p
                className={menu === "about" ? "active-menu" : ""}
                onClick={() => setMenu("about")}
              >
                About
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#experience-skills">
              <p
                className={menu === "experience-skills" ? "active-menu" : ""}
                onClick={() => setMenu("experience-skills")}
              >
                Experience & Skills
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              <p
                className={menu === "work" ? "active-menu" : ""}
                onClick={() => setMenu("work")}
              >
                Work
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p
                className={menu === "contact" ? "active-menu" : ""}
                onClick={() => setMenu("contact")}
              >
                Contact
              </p>
            </AnchorLink>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <ul>
              <li>
                <AnchorLink className="anchor-link" offset={50} href="#home">
                  <p
                    className={menu === "home" ? "active-menu" : ""}
                    onClick={() => handleSetMenu("home")}
                  >
                    Home
                  </p>
                </AnchorLink>
              </li>

              <li>
                <AnchorLink className="anchor-link" offset={50} href="#about">
                  <p
                    className={menu === "about" ? "active-menu" : ""}
                    onClick={() => handleSetMenu("about")}
                  >
                    About
                  </p>
                </AnchorLink>
              </li>

              <li>
                <AnchorLink className="anchor-link" offset={50} href="#experience-skills">
                  <p
                    className={menu === "experience-skills" ? "active-menu" : ""}
                    onClick={() => handleSetMenu("experience-skills")}
                  >
                    Experience & Skills
                  </p>
                </AnchorLink>
              </li>

              <li>
                <AnchorLink className="anchor-link" offset={50} href="#work">
                  <p
                    className={menu === "work" ? "active-menu" : ""}
                    onClick={() => handleSetMenu("work")}
                  >
                    Work
                  </p>
                </AnchorLink>
              </li>

              <li>
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                  <p
                    className={menu === "contact" ? "active-menu" : ""}
                    onClick={() => handleSetMenu("contact")}
                  >
                    Contact
                  </p>
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
