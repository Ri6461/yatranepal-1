import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // We will create this or use styled-components if preferred, but plain CSS is fine for now

const Navbar = ({ isLoggedIn }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar glass-panel">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          Yatra Nepal
        </Link>

        <div className={`navbar-menu ${isOpen ? "is-open" : ""}`}>
          <Link to="/" className={`navbar-link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/packages" className={`navbar-link ${isActive("/packages") ? "active" : ""}`}>
            Packages
          </Link>
          <Link to="/about" className={`navbar-link ${isActive("/about") ? "active" : ""}`}>
            About
          </Link>
          <Link to="/contact" className={`navbar-link ${isActive("/contact") ? "active" : ""}`}>
            Contact
          </Link>
          
          {!isLoggedIn ? (
            <>
              <Link to="/login" className={`navbar-link ${isActive("/login") ? "active" : ""}`}>
                Login
              </Link>
              <Link to="/register" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Sign Up
              </Link>
            </>
          ) : (
             <Link to="/profile" className={`navbar-link ${isActive("/profile") ? "active" : ""}`}>
                Profile
              </Link>
          )}
        </div>
        
         <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
