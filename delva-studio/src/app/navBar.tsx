// import React from "react";
// import styles from "../components/Navbar.module.css";





// export default function NavBar() {
//   return (
//       <nav className={styles.navBar}>
//       <ul>
//         <li>
//           <a href="#home"><h1>Delva Studio</h1></a>
//         </li>
//         <li>
//           <a href="#portfolio">Portfolio</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full top-0 z-50 px-6 py-4 bg-white/80 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-light">
          Delva Studio Andre
        </Link>
        <div className="flex gap-8 text-sm">
          <Link
            to="/"
            className={`hover:opacity-100 transition-opacity ${
              location.pathname === '/' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            Photography
          </Link>
          <Link
            to="/about"
            className={`hover:opacity-100 transition-opacity ${
              location.pathname === '/about' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`hover:opacity-100 transition-opacity ${
              location.pathname === '/contact' ? 'opacity-100' : 'opacity-50'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;