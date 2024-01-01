import React from 'react';
import './header.css'; // Import the CSS file
import { Header } from 'react-bootstrap/lib/Modal';

const Header = () => {
  return (
    <nav className="navbar">
      <div>
        <a href="#" className="company-name">
          Grace
        </a>
      </div>
      <div>
        <a href="#" className="nav-link home-link">
          Home
        </a>
        <a href="#" className="nav-link">
          About
        </a>
        <a href="#" className="nav-link">
          Contact Us
        </a>
      </div>
    </nav>

  );
};

export default Header;
