import React, { useState } from "react";

const Cart = ({ cartItems, setCartItems }) => {
  console.log("Cart items on render:", cartItems); // Log the cart items

  const grandTotal = cartItems.reduce((sum, item) => {
    return sum + item.unitPrice * item.quantity;
  }, 0);

  const [editIndex, setEditIndex] = useState(null);
  const [editedQuantity, setEditedQuantity] = useState("");

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedQuantity(cartItems[index].quantity);
  };

  const handleSave = (index) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: editedQuantity } : item
    );
    setCartItems(updatedItems);
    console.log("Updated items after save:", updatedItems); // Log updated items
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    console.log("Updated items after delete:", updatedItems); // Log updated items
  };

  return (
    <div>
      <br />
      <br />
      <div>
        <h2>Total: ${grandTotal.toFixed(2)}</h2>
      </div>
      <div>
        {cartItems.map((item, index) => {
          const totalPrice = item.unitPrice * item.quantity;
          return (
            <li key={index}>
              <img
                src={item.image}
                alt="Product"
                style={{ width: "300px", height: "auto" }}
              />
              <div>
                Quantity:{" "}
                {editIndex === index ? (
                  <input
                    type="number"
                    value={editedQuantity}
                    onChange={(e) =>
                      setEditedQuantity(parseInt(e.target.value, 10))
                    }
                  />
                ) : (
                  item.quantity
                )}
              </div>
              <div>Size: {item.size}</div>
              <div>Price: ${totalPrice.toFixed(2)}</div>
              {editIndex === index ? (
                <button onClick={() => handleSave(index)}>Save</button>
              ) : (
                <button onClick={() => handleEdit(index)}>Edit</button>
              )}{" "}
              <button onClick={() => handleDelete(index)}>Delete</button>
              <br />
              <br />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
