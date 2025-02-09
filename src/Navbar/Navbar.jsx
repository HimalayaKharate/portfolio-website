import styles from "./Navbar.module.css";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

export default function Navbar({url}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const now = new Date().getHours();
  var a = document.querySelector("nav ul li a");
  var color = "var(--prussian-blue)";
  if ((now >= 0 && now < 4) || (now >= 20 && now <= 23)) {
    color = "white";
  }

  return (
    <>
      <nav className={styles.navbar}>
        <h1 class={styles.logo}>Portfolio</h1>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className={`${styles.navMenu} ${menuOpen ? styles.open : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href={url} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
