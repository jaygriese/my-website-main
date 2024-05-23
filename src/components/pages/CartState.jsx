import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ImageDetail from "../pages/ImageDetail";
import Cart from "../pages/Cart";
import Shop from "../pages/Shop";

const CartState = ({ images }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="cart-state-container">
      <Routes>
        <Route path="/shop" element={<Shop images={images} />} />
        <Route
          path="/shop/:index"
          element={<ImageDetail images={images} setCartItems={setCartItems} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} /> {/* Pass setCartItems here */}
      </Routes>
    </div>
  );
};

export default CartState;
