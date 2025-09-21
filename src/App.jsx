import React from "react";
import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleProductPage from './pages/SingleProductPage';
import CheckoutPage from './pages/CheckoutPage';
import Footer from './components/Footer';
import Navbar from "./components/Navbar.jsx";
import CartPage from "./pages/CartPage.jsx";
import OrderConfirmationPage from "./pages/OrderConfirmationPage.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    
    <Router>
      <Navbar />
      <div className="min-h-[25vh]">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<SingleProductPage />} />
         <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage/>}></Route>
      </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;