import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import CheckoutPage from "./Components/CheckoutPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/products/:category/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
  );
}

export default App;
