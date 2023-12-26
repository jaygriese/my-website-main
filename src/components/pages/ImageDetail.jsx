import React from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./ImageDetail.css";

const ImageDetail = ({ images }) => {
  const { index } = useParams();
  const imageIndex = parseInt(index, 10);

  if (isNaN(imageIndex) || imageIndex < 0 || imageIndex >= images.length) {
    return <div>Invalid image index</div>;
  }

  const image = images[imageIndex];

  const [selectedOption, setSelectedOption] = useState("SELECT A PRINT SIZE:");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
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
        {/* <br/> */}

        <div
          className="shopText"
          style={{
            // outline: "2px solid yellow",
            width: "215px",
            // marginLeft: "20px",
          }}
        >
          <label htmlFor="dropdown">PRINT SIZE: </label>
          <br />
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
            className="dropdown"
          >
            <option value="">SELECT A PRINT SIZE:</option>
            <option value="option1">23 x 16.5inches (59 cm x 42 cm )</option>
            <option value="option2">36 x 26.5 inches (91 cm x 67 cm )</option>
            <option value="option3">44 x 32 inches (112 cm x 81 cm )</option>
            <option value="option4">62 x 44 inches (158 cm x 112 cm )</option>

            {/* Add more options as needed */}
          </select>
        </div>
        <br />
        {/* <br /> */}

        <div
          className="shopText"
          style={{
            // outline: "2px solid yellow",
            width: "215px",
          }}
        >
          <label htmlFor="dropdown">QUANTITY:</label>
          <br />
          <select
            id="quantityDropdown"
            value={selectedOption}
            onChange={handleSelectChange}
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
        {/* <br /> */}

        <div className="shopText" style={{ marginTop: "18px" }}>
          <button className="cartButton">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ImageDetail;

