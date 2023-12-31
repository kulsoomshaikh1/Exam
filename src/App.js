import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Cart from "./pages/Cart";

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const removeFromCart = (index) => {
        setCartItems(currentItems => currentItems.filter((item, i) => i !== index));
    };

    const editCartItem = (index, newItem) => {
        setCartItems(currentItems => currentItems.map((item, i) => i === index ? { ...item, ...newItem } : item));
    };

    const totalCartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <Router>
            <Header cartItemCount={totalCartItemCount} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product setCartItems={setCartItems} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} editCartItem={editCartItem} />} />
            </Routes>
          
            <Footer />
        </Router>
    );
};

export default App;
