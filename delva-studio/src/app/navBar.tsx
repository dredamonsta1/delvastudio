import React from "react";





export default function NavBar() {
  return (
    <nav className="nav-bar">
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