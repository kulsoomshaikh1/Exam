// CustomHeader.js
import React from 'react';
import './header.css'; // Import the CSS file
import { BsList, BsCart } from 'react-icons/bs';
 // Import icons from react-icons library
import { Navbar, Nav } from 'react-bootstrap';

const CustomHeader = () => {
  return (
    <Navbar className="custom-navbar">
      <Navbar.Brand href="#" className="company-name">
        Grace
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-icon">
        <BsList />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto navbar-nav">
          <Nav.Link href="#" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link href="#" className="nav-link">
            Contact Us
          </Nav.Link>
          <Nav.Link href="#" className="nav-link cart-icon">
            <BsCart />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomHeader;
