import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact= () => {
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <h2>Contact Us</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <h2>Get in Touch</h2>
                    <Card>
                        <Card.Body>
                            <Card.Text><FontAwesomeIcon icon={faMapMarkedAlt} /> 123 Fake Street, City, Country</Card.Text>
                            <Card.Text><FontAwesomeIcon icon={faPhone} /> +123 456 7890</Card.Text>
                            <Card.Text><FontAwesomeIcon icon={faEnvelope} /> contact@fakestorefullproduct.com</Card.Text>
                            <div>
                                <FontAwesomeIcon icon={faFacebook} size="2x" className="me-3" />
                                <FontAwesomeIcon icon={faTwitter} size="2x" className="me-3" />
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
