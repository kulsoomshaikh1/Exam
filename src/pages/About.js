import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import aboutImg from '../assets/images/about-img.png'
import saudImg from '../assets/images/saudImg.jpeg'

const About = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <Image src={aboutImg} alt="About Us" fluid />
                </Col>
                <Col md={6}>
                    <h2>About Our Company</h2>
                    <p>
                        Welcome to FakeStore Full Product, your number one source for all things, e.g., books, shoes, electronics, cloths, and jewellery. We're dedicated to providing you the very best of products, with an emphasis on quality, quantity, and low price.
                    </p>
                    <p>
                        We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                    </p>
                    <p>
                        Sincerely,<br />
                        Saud Ahmed Chachar
                    </p>
                </Col>
            </Row>

            <Row className="my-5">
                <h2>Meet Our Team</h2>
                {/* Team members cards */}
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={saudImg} />
                        <Card.Body>
                            <Card.Title>Saud Ahmed </Card.Title>
                            <Card.Text>
                              The full stake enterprise application developer
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Repeat for other team members */}
            </Row>

            {/* Other sections like customer testimonials, achievements, etc. can be added here */}
        </Container>
    );
};

export default About;
