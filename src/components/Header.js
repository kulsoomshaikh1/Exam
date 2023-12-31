import React from 'react';
import {Navbar, Nav, Container, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Cart as CartIcon } from 'react-bootstrap-icons';
import logoImg from '../assets/images/fakestore-logo.png'

const Header = ({ cartItemCount }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={logoImg} alt="Fake Store Logo" height={70} width={70} roundedCircle/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/product" className="nav-link">Product</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/contact" className="nav-link">Contact</Link>
                        <Link to="/cart" className="nav-link position-relative">
                            <CartIcon color="white" size={30} />
                            {cartItemCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    backgroundColor: 'red',
                                    color: 'white',
                                    borderRadius: '50%',
                                    padding: '2px 6px',
                                    fontSize: '12px',
                                    lineHeight: '12px',
                                    minWidth: '20px',
                                    textAlign: 'center'
                                }}>
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
