import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Cart from "./pages/Cart";
import TopSellers from './pages/TopSellers';

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
                <Route path="/Home" element={<Home setCartItems={setCartItems} />} />
                <Route path="/TopSellers" element={<TopSellers setCartItems={setCartItems} />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} editCartItem={editCartItem} />} />
            </Routes>
          
            <Footer />
        </Router>
    );
};

export default App;
