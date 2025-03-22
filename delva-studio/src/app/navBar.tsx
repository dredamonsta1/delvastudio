import React from "react";
import styles from "./navBar.module.css";





export default function NavBar() {
  return (
      <nav className={styles.navBar}>
      <ul>
        {/* <li>
          <a href="#home"><h1>Delva Studio</h1></a>
        </li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}