import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Modal, Form } from 'react-bootstrap';
import './product.css';

function Product({ setCartItems }) {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('Red');
    const [size, setSize] = useState('Small');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleShowModal = (product) => {
        setSelectedProduct(product);
        setQuantity(1);
        setColor('Red');
        setSize('Small');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleAddToCart = () => {
        const newItem = {
            id: selectedProduct.id,
            title: selectedProduct.title,
            image: selectedProduct.image,
            quantity,
            color,
            size
        };
        setCartItems(currentItems => [...currentItems, newItem]);
        setShowModal(false);
    };


    return (
        <div className="container">
            <Row className="mt-4 g-4">
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
                        <Card className="h-100 product-card">
                            <Card.Img variant="top" src={product.image} className="product-img" />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text className="product-description">
                                    {product.description}
                                </Card.Text>
                                <Button variant="dark" onClick={() => handleShowModal(product)}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {selectedProduct && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedProduct.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Quantity</Form.Label>
                                <div className="quantity-controls">
                                    <Button variant="secondary" onClick={decrementQuantity}>-</Button>
                                    <span className="quantity-value">{quantity}</span>
                                    <Button variant="secondary" onClick={incrementQuantity}>+</Button>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Color</Form.Label>
                                <Form.Control as="select" value={color} onChange={e => setColor(e.target.value)}>
                                    <option>Red</option>
                                    <option>Blue</option>
                                    <option>Green</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Size</Form.Label>
                                <Form.Control as="select" value={size} onChange={e => setSize(e.target.value)}>
                                    <option>Small</option>
                                    <option>Medium</option>
                                    <option>Large</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                        <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
}

export default Product;
