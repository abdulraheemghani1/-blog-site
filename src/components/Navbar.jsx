import React, { useState } from "react";
import "../CssFiles/Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Brand Name */}
        <div className="navbar-brand">MyApp</div>

        {/* Hamburger Menu for Mobile */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "open" : "..."}`}></span>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isMenuOpen ? "active" : "..."}`}>
          <li>
            <a href="#home" className="navbar-link">
              Home
            </a>
          </li>
          <li>
            <a href="#profile" className="navbar-link">
              Profile
            </a>
          </li>
          <li>
            <a href="#dashboard" className="navbar-link">
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;






// import React, { useState } from "react";
// import "../CssFiles/Navbar.css"; // Import the CSS file for styling

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo or Brand Name */}
//         <div className="navbar-brand">MyApp</div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="navbar-toggle" onClick={toggleMenu}>
//           <span className={`hamburger ${isMenuOpen ? "open" : ""}`}></span>
//         </div>

//         {/* Navbar Links */}
//         <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
//           <li>
//             <a href="#home" className="navbar-link">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#profile" className="navbar-link">
//               Profile
//             </a>
//           </li>
//           <li>
//             <a href="#dashboard" className="navbar-link">
//               Dashboard
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;