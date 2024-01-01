import React from 'react';
import { Container, Row, Col, Nav, ListGroup } from 'react-bootstrap';
import './footer.css'
import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons'; // Import social media icons

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-4">
            <Container className="py-4">
                <Row>
                    <Col sm={12} md={6} lg={3}>
                        <h5>Company Info</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/about" className="text-white">About us</Nav.Link>
                            <Nav.Link href="/post" className="text-white">Latest Post</Nav.Link>
                            <Nav.Link href="/contact" className="text-white">Contact Us</Nav.Link>
                            <Nav.Link href="/shop" className="text-white">Shop</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h5>HElP LINKS</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/" className="text-white">Tracking</Nav.Link>
                            <Nav.Link href="/Orderstatus" className="text-white">Order Status</Nav.Link>
                            <Nav.Link href="/Delivery" className="text-white">Delivery</Nav.Link>
                            <Nav.Link href="/ShippingInfo" className="text-white">Shipping Info</Nav.Link>
                            <Nav.Link href="/FAQS" className="text-white">FAQS</Nav.Link>
                        </Nav>
                    </Col>
                    
                    <Col sm={12} md={6} lg={3}>
                        <h5>USEFUL LINKS</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/offer" className="text-white">Special offer</Nav.Link>
                            <Nav.Link href="/giftcard" className="text-white">Gift cards</Nav.Link>
                            <Nav.Link href="/Advertise" className="text-white">Advertising</Nav.Link>
                            <Nav.Link href="/Terms" className="text-white">Terms of use</Nav.Link>
                         
                        </Nav>
                    </Col>

                    


                    <Col sm={12} md={6} lg={3}>
                        <h5>Get In The Know</h5>
                        <ListGroup horizontal>
                            
                            <ListGroup.Item className="bg-dark border-0">
                                <Twitter className="text-white" size={24} />
                            </ListGroup.Item>
                            <ListGroup.Item className="bg-dark border-0">
                                <Instagram className="text-white" size={24} />
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        &copy; {new Date().getFullYear()} fake-store
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
