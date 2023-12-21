import "../../App.css";
import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import img1 from "../images/vr/1.jpeg";
import img2 from "../images/vr/2.jpeg";
import img3 from "../images/vr/3.jpeg";
import img4 from "../images/vr/4.jpeg";
import img5 from "../images/vr/5.jpeg";
import img6 from "../images/vr/6.jpeg";
import img7 from "../images/vr/7.jpeg";
import img8 from "../images/vr/8.jpeg";
import img9 from "../images/vr/9.jpeg";
import img10 from "../images/vr/10.jpeg";
import img11 from "../images/vr/11.jpeg";
import img12 from "../images/vr/12.jpeg";
import img13 from "../images/vr/13.jpeg";
import img14 from "../images/vr/14.jpeg";
import img15 from "../images/vr/15.jpeg";
import img16 from "../images/vr/16.jpeg";
import img18 from "../images/vr/18.jpeg";
import img19 from "../images/vr/19.jpeg";
import img20 from "../images/vr/20.jpeg";
import img21 from "../images/vr/21.jpeg";
import img22 from "../images/vr/22.jpeg";
import img23 from "../images/vr/23.jpeg";
import img24 from "../images/vr/24.jpeg";
import img25 from "../images/vr/25.jpeg";
import img26 from "../images/vr/26.jpeg";
import img27 from "../images/vr/27.jpeg";
import img28 from "../images/vr/28.jpeg";
import img29 from "../images/vr/29.jpeg";
import img30 from "../images/vr/30.jpeg";
import img31 from "../images/vr/31.jpeg";
import img32 from "../images/vr/32.jpeg";


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,img13, img14, img15, img18, img19, img20,
img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img32, img31];

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";

const Prints = () => {
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
      <div
          style={{
            // width: "80%",
            fontSize: "15px",
            lineHeight: "1.5",
            marginLeft: "2%",
            marginRight: "100px",
            textAlign: "left",
            paddingTop: "5%",
            width: "800px",
            maxWidth: "70%",
            textAlign: "justify",
          }}
        >
          All images are printed on museum quality, fine art paper, through PRODPI and sent directly to your home. 
          <br />
          <br />
          23 x 16.5inches (59 cm x 42 cm ) $150 USD
          <br />
          36 x 26.5 inches (91 cm x 67 cm ) $350 USD
          <br />
          44 x 32 inches (112 cm x 81 cm ) $650 USD
          <br />
          62 x 44 inches (158 cm x 112 cm ) $950 USD
          <br />
          <br />
          Go to the Shop to see a selection of images and to place your order.
          <br />
          <br />
          For images not featured in the Shop or Gallery, including specific
          subjects or destinations,and custom sizes, please contact me at jaygriese@gmail.com to discuss your requirements.
          <br />
          <br />
          PLEASE SEE BELOW FOR INSPIRATION:
          </div>
     
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
            }
export default Prints;
