import "../../App.css";
import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import img1 from "../images/ID/img1.jpeg";
import img2 from "../images/ID/img2.jpeg";
import img3 from "../images/ID/img3.jpeg";
import img4 from "../images/ID/img4.jpeg";
import img5 from "../images/ID/img5.jpeg";
import img6 from "../images/ID/img6.jpeg";
import img7 from "../images/ID/img7.jpeg";
import img8 from "../images/ID/img8.jpeg";
import img9 from "../images/ID/img9.jpeg";
import img10 from "../images/ID/img10.jpeg";
import img11 from "../images/ID/img11.jpeg";
import img12 from "../images/ID/img12.jpeg";
import img13 from "../images/ID/img13.jpeg";
import img14 from "../images/ID/img14.jpeg";
import img15 from "../images/ID/img15.jpeg";
import img16 from "../images/ID/img16.jpeg";
import img17 from "../images/ID/img17.jpeg";
import img18 from "../images/ID/img18.jpeg";
import img19 from "../images/ID/img19.jpeg";
import img20 from "../images/ID/img20.jpeg";
import img21 from "../images/ID/img21.jpeg";
import img22 from "../images/ID/img22.jpeg";
import img23 from "../images/ID/img23.jpeg";
import img24 from "../images/ID/img24.jpeg";
import img25 from "../images/ID/img25.jpeg";
import img26 from "../images/ID/img26.jpeg";
import img27 from "../images/ID/img27.jpeg";
import img28 from "../images/ID/img28.jpeg";
import img30 from "../images/ID/img30.jpeg";

const images = [
  img12,
  img2,
  img20,
  img16,
  img19,
  img1,
  img10,
  img3,
  img4,
  img23,
  img24,
  img25,
  img21,
  img5,
  img6,
  img11,
  img7,
  img8,
  img13,
  img14,
  img15,
  img17,
  img18,
  img26,
  img27,
  img9,
  img28,
  img22,
  img30,
];

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    console.log(img, i);
    setData({ img, i });
  };

  // const imgAction = (action) => {
  //   let i = data.i;
  //   if (action === "next-img") {
  //     setData({ img: images[i + 1], i: i + 1 });
  //     // (data === images.length - 1 ? 0 : data[i] + 1);
  //   }

  //   if (action === "prev-img") {
  //     setData({ img: images[i - 1], i: i - 1 });
  //   }
  //   if (!action) {
  //     setData({ img: "", i: 0 });
  //   }
  // };

  return (
    <>
      {/* <div style={{ justifyContent: "center" }}>
        <h3>
          {" "}
          <br />
          <br />
          This page is currently under construction. Below you can get an idea
          of the different services Jay offers.
        </h3>
      </div> */}
      <div
        style={{
          // width: "80%",
          fontSize: "15px",
          lineHeight: "1.5",
          marginLeft: "10%",
          textAlign: "left",
          paddingTop: "5%",
          width: "800px",
          maxWidth: "70%",
          textAlign: "justify",
        }}
      >
        <h3>
          {/* This page is currently under construction... */}
          {/* Below you can get an idea
          of the different services Jay offers. */}
        </h3>
        <div>
          {/* <br /> */}
          Jay offers a variety of services including portraiture, wedding, and
          interior design/realestate photography.
          <br />
          <br />
          Sessions start at $70/hr with a two hour minumum. Weddings start at $800 per day and include an engangement portrait session. 
          <br/>
          <br/>
           Please contact Jay at jaygriese@gmail.com for more specific details.
        </div>
      </div>
      <br />

      {/* {data.img && (
        <div
          style={{
            width: "100%",
            height: "91%",
            background: "rgba(0, 0, 0, .75)",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        > */}
      {/* <button
            onClick={() => imgAction()}
            className="btn"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              marginRight: "16px",
            }}
          >
            X
          </button>
          <button
            className="btn"
            onClick={() => imgAction("prev-img")}
            style={{
              // padding: "1rem",
              cursor: "pointer",
              transition: "background-color: 100ms ease-in-out",
              marginRight: "25px",
            }}
          >
            <ArrowBigLeft />
          </button>

          <img
            src={data.img}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
              outline: "10px  solid white",
            }}
          />
          <button
            className="btn"
            onClick={() => imgAction("next-img")}
            style={{
              // padding: "1rem",
              cursor: "pointer",
              transition: "background-color: 100ms ease-in-out",
              marginLeft: "25px",
            }}
          >
            <ArrowBigRight />
          </button>
        </div>
      )} */}
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                // onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};
export default Services;
