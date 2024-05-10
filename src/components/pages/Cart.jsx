import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt="Product" />
            <div>Size: {item.size}</div>
            <div>Quantity: {item.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
