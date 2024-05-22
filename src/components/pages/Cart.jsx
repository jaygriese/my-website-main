import React from "react";

const Cart = ({ cartItems }) => {

  const grandTotal = cartItems.reduce((sum, item) => {
    return sum + item.unitPrice * item.quantity;
  }, 0);

  return (
    <div>
      {/* <h2>Cart</h2> */}
      <br />
      <br />
      <div>
        <h2>Total: ${grandTotal.toFixed(2)}</h2>
      </div>
      <li>
        {cartItems.map((item, index) => {
          const totalPrice = item.unitPrice * item.quantity;
          console.log(
            `Item ${index}: unitPrice = ${item.unitPrice}, quantity = ${item.quantity}, totalPrice = ${totalPrice}`
          ); // Debugging log

          return (
            <li key={index}>
              <img
                src={item.image}
                alt="Product"
                style={{ width: "300px", height: "auto" }}
              />
              <div>Quantity: {item.quantity}</div>
              <div>Size: {item.size}</div>
              {/* <div>Price: ${item.unitPrice.toFixed(2)} each</div> */}
              <div>Price: ${totalPrice.toFixed(2)}</div>
              <br />
              <br />
            </li>
          );
        })}
      </li>
    </div>
  );
};

export default Cart;
