import { useState } from "react";
import "../Css/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <nav className="navbar">
      <div className="nav-container">
    
        <h4>Task Management</h4>

      
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

       
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <GiHamburgerMenu className="hamburger-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;