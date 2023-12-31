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
                        <h5>Navigation</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="/" className="text-white">Home</Nav.Link>
                            <Nav.Link href="/product" className="text-white">Product</Nav.Link>
                            <Nav.Link href="/about" className="text-white">About</Nav.Link>
                            <Nav.Link href="/contact" className="text-white">Contact Us</Nav.Link>
                        </Nav>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h5>Social Media</h5>
                        <ListGroup horizontal>
                            <ListGroup.Item className="bg-dark border-0">
                                <Facebook className="text-white" size={24} />
                            </ListGroup.Item>
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
