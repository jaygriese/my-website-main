import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../../App.css"; // Ensure this path is correct
import "./Imagedetail.css"; // Ensure this path is correct

const ImageDetail = ({ images, setCartItems }) => {
  const { index } = useParams();
  const imageIndex = parseInt(index, 10);

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
    let price;
    switch (selectedSize) {
      case "23 x 16.5":
        price = 150;
        break;
      case "36 x 26.5":
        price = 350;
        break;
      case "44 x 32":
        price = 650;
        break;
      case "62 x 44":
        price = 950;
        break;
      default:
        price = 0;
    }

    const newItem = {
      size: selectedSize,
      quantity: parseInt(selectedQuantity, 10),
      image: image,
      unitPrice: price,
    };

    setCartItems((prevItems) => [...prevItems, newItem]);
    setSelectedSize("");
    setSelectedQuantity("");
  };

  return (
    <div className="shop-container">
      <div className="shop-image-container">
        <img className="shop-image" src={image} alt="Product" />
      </div>
      <div className="shopText" style={{ width: "215px" }}>
        <label htmlFor="dropdown">PRINT SIZE: </label>
        <select
          id="dropdown"
          value={selectedSize}
          onChange={handleSizeChange}
          className="dropdown"
        >
          <option value="">SELECT A PRINT SIZE:</option>
          <option value="23 x 16.5">
            23 x 16.5 inches (59 cm x 42 cm) $150 USD
          </option>
          <option value="36 x 26.5">
            36 x 26.5 inches (91 cm x 67 cm) $350 USD
          </option>
          <option value="44 x 32">
            44 x 32 inches (112 cm x 81 cm) $650 USD
          </option>
          <option value="62 x 44">
            62 x 44 inches (158 cm x 112 cm) $950 USD
          </option>
        </select>
      </div>
      <div className="shopText" style={{ width: "215px" }}>
        <label htmlFor="quantityDropdown">QUANTITY:</label>
        <select
          id="quantityDropdown"
          value={selectedQuantity}
          onChange={handleQuantityChange}
          className="dropdown"
        >
          <option value="">SELECT A QUANTITY:</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="shopText" style={{ marginTop: "18px" }}>
        <button className="cartButton" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ImageDetail;
