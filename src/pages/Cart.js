import React, { useState } from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

function Cart({ cartItems, removeFromCart, editCartItem }) {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editItem, setEditItem] = useState({});

    const startEditing = (index) => {
        setEditItem({ ...cartItems[index] });
        setEditingIndex(index);
    };

    const cancelEditing = () => {
        setEditingIndex(null);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditItem({ ...editItem, [name]: name === 'quantity' ? Math.max(1, parseInt(value)) : value });
    };

    const saveEdit = () => {
        editCartItem(editingIndex, editItem);
        setEditingIndex(null);
    };

    return (
        <div className="container">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <Row>
                    {cartItems.map((item, index) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={index}>
                            <Card className="mb-4">
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    {editingIndex === index ? (
                                        <Form>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Quantity</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="quantity"
                                                    value={editItem.quantity}
                                                    onChange={handleEditChange}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Color</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="color"
                                                    value={editItem.color}
                                                    onChange={handleEditChange}
                                                >
                                                    <option value="Red">Red</option>
                                                    <option value="Blue">Blue</option>
                                                    <option value="Green">Green</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <Form.Label>Size</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    name="size"
                                                    value={editItem.size}
                                                    onChange={handleEditChange}
                                                >
                                                    <option value="Small">Small</option>
                                                    <option value="Medium">Medium</option>
                                                    <option value="Large">Large</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Button variant="dark" onClick={saveEdit}>Save</Button>
                                            <Button variant="dark" className="m-4" onClick={cancelEditing}>Cancel</Button>
                                        </Form>
                                    ) : (
                                        <div>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Color: {item.color}</p>
                                            <p>Size: {item.size}</p>
                                            <Button variant="dark" onClick={() => removeFromCart(index)}>Remove</Button>
                                            <Button variant="dark" className="m-4" onClick={() => startEditing(index)}>Edit</Button>
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}

export default Cart;
