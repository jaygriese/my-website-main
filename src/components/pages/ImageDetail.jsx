import React from "react";
import { useParams } from "react-router-dom";
import "../../App.css"; // Check if this path is correct
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Imagedetail.css"; // Check if this path is correct
import Cart from "./Cart";

const ImageDetail = ({ images }) => {
  const { index } = useParams();
  const imageIndex = parseInt(index, 10);
  const [cartItems, setCartItems] = useState([]);

  if (isNaN(imageIndex) || imageIndex < 0 || imageIndex >= images.length) {
    return <div>Invalid image index</div>;
  }

  const image = images[imageIndex];

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState("");

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    const newItem = {
      size: selectedSize,
      quantity: selectedQuantity,
      image: image,
    };
    setCartItems([...cartItems, newItem]);
    setSelectedSize("");
    setSelectedQuantity("");
  };


  return (
    <>
      <div className="shop-container">
        <div className="shop-image-container">
          {/* image */}
          <img className="shop-image" src={image} alt="" />
        </div>
        <br />
        <br />

        <div
          className="shopText"
          style={{
            width: "215px",
          }}
        >
          <label htmlFor="dropdown">PRINT SIZE: </label>
          <br />
          <select
            id="dropdown"
            value={selectedSize}
            onChange={handleSizeChange}
            className="dropdown"
          >
            <option value="">SELECT A PRINT SIZE:</option>
            <option value="option1">
              23 x 16.5inches (59 cm x 42 cm ) $150 USD
            </option>
            <option value="option2">
              36 x 26.5 inches (91 cm x 67 cm ) $350 USD
            </option>
            <option value="option3">
              44 x 32 inches (112 cm x 81 cm ) $650 USD
            </option>
            <option value="option4">
              62 x 44 inches (158 cm x 112 cm ) $950 USD
            </option>
          </select>
        </div>
        <br />

        <div
          className="shopText"
          style={{
            width: "215px",
          }}
        >
          <label htmlFor="dropdown">QUANTITY:</label>
          <br />
          <select
            id="quantityDropdown"
            value={selectedQuantity}
            onChange={handleQuantityChange}
            className="dropdown"
          >
            <option value="">SELECT A QUANTITY:</option>
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option4">4</option>
            <option value="option5">5</option>
          </select>
        </div>

        <div className="shopText" style={{ marginTop: "18px" }}>
          <button className="cartButton" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
        
      </div>
      
      <Cart cartItems={cartItems} />
    </>
  );
};

export default ImageDetail;
