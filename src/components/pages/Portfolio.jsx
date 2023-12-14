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
import img136 from "../images/img136.jpg";
import img137 from "../images/img137.jpg";
import img138 from "../images/img138.jpg";
import img139 from "../images/img139.jpg";
import img140 from "../images/img140.jpg";
import img141 from "../images/img141.jpg";
import img142 from "../images/img142.jpg";
import img143 from "../images/img143.jpg";
import img144 from "../images/img144.jpg";
import img145 from "../images/img145.jpg";
import img146 from "../images/img146.jpg";
import img147 from "../images/img147.jpg";
import img148 from "../images/img148.jpg";
import img149 from "../images/img149.jpg";
import img150 from "../images/img150.jpg";
import img151 from "../images/img151.jpg";
import img152 from "../images/img152.jpg";
import img153 from "../images/img153.jpg";
import img154 from "../images/img154.jpg";
import img155 from "../images/img155.jpg";
import img156 from "../images/img156.jpg";
import img157 from "../images/img157.jpg";
import img158 from "../images/img158.jpg";
import img159 from "../images/img159.jpg";
import img160 from "../images/img160.jpg";
import img161 from "../images/img161.jpg";
import img162 from "../images/img162.jpg";
import img163 from "../images/img163.jpg";
import img164 from "../images/img164.jpg";
import img165 from "../images/img165.jpg";
import img166 from "../images/img166.jpg";
import img167 from "../images/img167.jpg";
import img168 from "../images/img168.jpg";
import img169 from "../images/img169.jpg";
import img170 from "../images/img170.jpg";
import img171 from "../images/img171.jpg";
import img172 from "../images/img172.jpg";
import img173 from "../images/img173.jpg";
import img174 from "../images/img174.jpg";
import img175 from "../images/img175.jpg";
import img176 from "../images/img176.jpg";
import img177 from "../images/img177.jpg";
import img179 from "../images/img179.jpg";
import img180 from "../images/img180.jpg";
import img181 from "../images/img181.jpg";
import img182 from "../images/img182.jpg";
import img183 from "../images/img183.jpg";
import img184 from "../images/img184.jpg";
import img185 from "../images/img185.jpg";
import img186 from "../images/img186.jpg";
import img187 from "../images/img187.jpg";
import img188 from "../images/img188.jpg";
import img189 from "../images/img189.jpg";
import img200 from "../images/img200.jpg";
import img190 from "../images/img190.jpg";
import img191 from "../images/img191.jpg";
import img192 from "../images/img192.jpg";
import img193 from "../images/img193.jpg";
import img194 from "../images/img194.jpg";
import img195 from "../images/img195.jpg";
import img196 from "../images/img196.jpg";
import img197 from "../images/img197.jpg";
import img198 from "../images/img198.jpg";
import img199 from "../images/img199.jpg";
import img201 from "../images/img201.jpg";
import img202 from "../images/img202.jpg";
import img203 from "../images/img203.jpg";
import img204 from "../images/img204.jpg";


import img207 from "../images/img207.jpg";
import img208 from "../images/img208.jpg";
import img209 from "../images/img209.jpg";
import img210 from "../images/img210.jpg";
import img211 from "../images/img211.jpg";

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
import img24 from "../images/img24.jpg";
import img25 from "../images/img25.jpg";
import img27 from "../images/img27.jpg";
import img28 from "../images/img28.jpg";

const images = [
  img101,
  img102,
  img131,
  img1,
  img105,
  img2,
  img211,
  img103,
  img104,
  img107,
  img108,
  img109,
  img110,
  img111,
  img112,
  img209,
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
  img207,
  img129,
  img130,
  img132,
  img133,
  img134,
  img135,
  // img137,

  img138,
  img139,
  img140,
  img141,
  img142,
  img143,
  img144,
  img145,
  img173,
  img146,
  img147,
  img148,
  img149,
  img150,
  img151,
  img152,
  img153,
  img154,
  img155,
  img156,
  img157,
  img158,
  img159,
  img160,
  img161,
  img162,
  img163,
  img164,
  img165,
  img166,
  img167,
  img168,
  img169,
  img170,
  img171,
  img172,

  img174,
  img175,
  img176,
  img177,
  img179,
  img180,
  img181,
  img182,
  img183,
  img184,
  img185,
  img186,
  img187,
  img188,
  img189,
  img190,
  img191,
  img192,
  img193,
  img194,
  img195,
  img196,
  img198,
  img197,
  img15,
  img199,
  img200,

  // img4,
  img208,
  img5,
  img6,
  img7,
  img10,
  img11,
  img12,
  img14,
  img16,
  img210,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  // img23,
  img201,
  img202,
  img203,
  img204,
  img24,
  img25,
  img27,
  img28,
  img106,
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
