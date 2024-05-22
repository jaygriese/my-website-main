import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ImageDetail from "./ImageDetail";
import Cart from "./Cart";

const CartState = ({ images }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="cart-state-container">
      <Routes>
        <Route
          path="/shop/:index"
          element={<ImageDetail images={images} setCartItems={setCartItems} />}
        />
      </Routes>
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartState;
