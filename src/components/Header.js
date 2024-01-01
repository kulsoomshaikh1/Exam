// Navbar.js
import React from 'react';
import './header.css';
import { Header } from 'react-bootstrap/lib/Modal';

const header = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <span className="company-name">Grace</span>
        <a href="#" className="nav-link" style={{ color: '#024E82' }}>
          Home
        </a>
        <a href="#" className="nav-link" style={{ color: 'black' }}>
          About
        </a>
        <a href="#" className="nav-link" style={{ color: 'black' }}>
          Contact Us
        </a>
      </div>
      <div className="right-section">
        <button className="nav-btn">Cart</button>
        <button className="nav-btn">User</button>
        <div className="menu-icon">&#9776;</div>
      </div>
    </nav>
  );
};

export default Header;
