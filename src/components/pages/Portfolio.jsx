import "../../App.css";
import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import img1 from "../images/img1.jpg";
import img101 from "../images/img101.jpg";
import img2 from "../images/img2.jpg";
import img102 from "../images/img102.jpg";
import img103 from "../images/img103.jpg";
import img104 from "../images/img104.jpg";
import img105 from "../images/img105.jpg";
import img106 from "../images/img106.jpg";
import img107 from "../images/img107.jpg";
import img108 from "../images/img108.jpg";
import img109 from "../images/img109.jpg";
import img110 from "../images/img110.jpg";
import img111 from "../images/img111.jpg";
import img112 from "../images/img112.jpg";
import img113 from "../images/img113.jpg";
import img114 from "../images/img114.jpg";
import img115 from "../images/img115.jpg";
import img116 from "../images/img116.jpg";
import img117 from "../images/img117.jpg";
import img118 from "../images/img118.jpg";
import img119 from "../images/img119.jpg";
import img120 from "../images/img120.jpg";
import img121 from "../images/img121.jpg";
import img122 from "../images/img122.jpg";
import img123 from "../images/img123.jpg";
import img124 from "../images/img124.jpg";
import img125 from "../images/img125.jpg";
import img126 from "../images/img126.jpg";
import img127 from "../images/img127.jpg";
import img128 from "../images/img128.jpg";
import img129 from "../images/img129.jpg";
import img130 from "../images/img130.jpg";
import img131 from "../images/img131.jpg";
import img132 from "../images/img132.jpg";
import img133 from "../images/img133.jpg";
import img134 from "../images/img134.jpg";
import img135 from "../images/img135.jpg";


import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";
import img6 from "../images/img6.jpg";
import img7 from "../images/img7.jpg";
import img10 from "../images/img10.jpg";
import img11 from "../images/img11.jpg";
import img12 from "../images/img12.jpg";
import img14 from "../images/img14.jpg";
import img15 from "../images/img15.jpg";
import img16 from "../images/img16.jpg";
import img17 from "../images/img17.jpg";
import img18 from "../images/img18.jpg";
import img19 from "../images/img19.jpg";
import img20 from "../images/img20.jpg";
import img21 from "../images/img21.jpg";
import img22 from "../images/img22.jpg";
import img23 from "../images/img23.jpg";
import img24 from "../images/img24.jpg";
import img25 from "../images/img25.jpg";
import img26 from "../images/img26.jpg";
import img27 from "../images/img27.jpg";
import img28 from "../images/img28.jpg";

const images = [
  img101,
  img102,
  img1,
  img2,
  img105,

  img103,
  img104,
  img106,
  img107,
  img108,
  img109,
  img110,
  img111,
  img112,
  img113,
  img114,
  img115,
  img116,
  img117,
  img118,
  img119,
  img120,
  img121,
  img122,
  img123,
  img124,
  img125,
  img126,
  img127,
  img128,
  img129,
  img130,
  img131,
  img132,
  img133,
  img134,
  img135,
  img4,
  img5,
  img6,
  img7,
  img10,
  img11,
  img12,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  // img23,
  img24,
  img25,
  img26,
  img27,
  img28,
];

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const Portfolio = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    console.log(img, i);
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
      // (data === images.length - 1 ? 0 : data[i] + 1);
    }

    if (action === "prev-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      {data.img && (
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
        >
          <button
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
      )}
      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};
export default Portfolio;
