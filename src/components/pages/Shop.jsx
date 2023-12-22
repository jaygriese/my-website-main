import "../../App.css";
import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import img1 from "../images/Shop/img1.jpg";
import img2 from "../images/Shop/img2.jpg";
import img3 from "../images/Shop/img3.jpg";
import img4 from "../images/Shop/img4.jpg";
import img5 from "../images/Shop/img5.jpg";
import img6 from "../images/Shop/img6.jpg";
import img7 from "../images/Shop/img7.jpg";
import img8 from "../images/Shop/img8.jpg";
import img9 from "../images/Shop/img9.jpg";
import img10 from "../images/Shop/img10.jpg";
import img11 from "../images/Shop/img11.jpg";
import img12 from "../images/Shop/img12.jpg";
import img13 from "../images/Shop/img13.jpg";
import img14 from "../images/Shop/img14.jpg";
import img15 from "../images/Shop/img15.jpg";
import img16 from "../images/Shop/img16.jpg";
import img17 from "../images/Shop/img17.jpg";
import img18 from "../images/Shop/img18.jpg";
import img19 from "../images/Shop/img19.jpg";
import img20 from "../images/Shop/img20.jpg";
import img21 from "../images/Shop/img21.jpg";
// import img22 from "../images/Shop/img22.jpg";
// import img23 from "../images/Shop/img23.jpg";
import img24 from "../images/Shop/img24.jpg";
import img25 from "../images/Shop/img25.jpg";
import img26 from "../images/Shop/img26.jpg";
import img27 from "../images/Shop/img27.jpg";
import img28 from "../images/Shop/img28.jpg";
import img29 from "../images/Shop/img29.jpg";
import img30 from "../images/Shop/img30.jpg";
import img31 from "../images/Shop/img31.jpg";
import img32 from "../images/Shop/img32.jpg";
import img33 from "../images/Shop/img33.jpg";
import img34 from "../images/Shop/img34.jpg";
import img35 from "../images/Shop/img35.jpg";
import img36 from "../images/Shop/img36.jpg";
import img37 from "../images/Shop/img37.jpg";
import img38 from "../images/Shop/img38.jpg";
import img39 from "../images/Shop/img39.jpg";
import img40 from "../images/Shop/img30.jpg";
import img41 from "../images/Shop/img41.jpg";
import img42 from "../images/Shop/img42.jpg";
import img43 from "../images/Shop/img43.jpg";
import img44 from "../images/Shop/img44.jpg";
import img45 from "../images/Shop/img45.jpg";
import img46 from "../images/Shop/img46.jpg";
import img47 from "../images/Shop/img47.jpg";
import img48 from "../images/Shop/img48.jpg";
import img49 from "../images/Shop/img49.jpg";
import img50 from "../images/Shop/img50.jpg";
import img51 from "../images/Shop/img51.jpg";
import img52 from "../images/Shop/img52.jpg";
import img53 from "../images/Shop/img53.jpg";
import img54 from "../images/Shop/img54.jpg";
import img55 from "../images/Shop/img55.jpg";
import img56 from "../images/Shop/img56.jpg";
import img57 from "../images/Shop/img57.jpg";
import img58 from "../images/Shop/img58.jpg";
import img59 from "../images/Shop/img59.jpg";
import img60 from "../images/Shop/img60.jpg";
import img61 from "../images/Shop/img61.jpg";
// import img62 from "../images/Shop/img62.jpg";
import img63 from "../images/Shop/img63.jpg";
import img64 from "../images/Shop/img64.jpg";
import img65 from "../images/Shop/img65.jpg";
import img66 from "../images/Shop/img66.jpg";
import img67 from "../images/Shop/img67.jpg";
import img68 from "../images/Shop/img68.jpg";
import img69 from "../images/Shop/img69.jpg";
import img70 from "../images/Shop/img70.jpg";
import img71 from "../images/Shop/img71.jpg";
import img72 from "../images/Shop/img72.jpg";
import img73 from "../images/Shop/img73.jpg";
import img74 from "../images/Shop/img74.jpg";
import img75 from "../images/Shop/img75.jpg";
import img76 from "../images/Shop/img76.jpg";
// import img77 from "../images/Shop/img77.jpg";
import img78 from "../images/Shop/img78.jpg";
import img79 from "../images/Shop/img79.jpg";
// import img80 from "../images/Shop/img80.jpg";
import img81 from "../images/Shop/img81.jpg";
import img82 from "../images/Shop/img82.jpg";
import img83 from "../images/Shop/img83.jpg";
import img84 from "../images/Shop/img84.jpg";
import img85 from "../images/Shop/img85.jpg";
import img86 from "../images/Shop/img86.jpg";
import img87 from "../images/Shop/img87.jpg";
import img88 from "../images/Shop/img88.jpg";
import img89 from "../images/Shop/img89.jpg";
import img90 from "../images/Shop/img90.jpg";
import img91 from "../images/Shop/img91.jpg";
import img92 from "../images/Shop/img92.jpg";
import img93 from "../images/Shop/img93.jpg";
import img94 from "../images/Shop/img94.jpg";
import img95 from "../images/Shop/img95.jpg";
import img96 from "../images/Shop/img96.jpg";

// virtual rooms:

// import img01 from "../images/vr/1.jpeg";
// import img02 from "../images/vr/2.jpeg";
// import img03 from "../images/vr/3.jpeg";
// import img04 from "../images/vr/4.jpeg";
// import img05 from "../images/vr/5.jpeg";
// import img06 from "../images/vr/6.jpeg";
// import img07 from "../images/vr/7.jpeg";
// import img08 from "../images/vr/8.jpeg";
// import img09 from "../images/vr/9.jpeg";
// import img010 from "../images/vr/10.jpeg";
// import img011 from "../images/vr/11.jpeg";
// import img012 from "../images/vr/12.jpeg";
// import img013 from "../images/vr/13.jpeg";
// import img014 from "../images/vr/14.jpeg";
// import img015 from "../images/vr/15.jpeg";
// import img016 from "../images/vr/16.jpeg";
// import img018 from "../images/vr/18.jpeg";
// import img019 from "../images/vr/19.jpeg";
// import img020 from "../images/vr/20.jpeg";
// import img021 from "../images/vr/21.jpeg";

// import img024 from "../images/vr/24.jpeg";
// import img025 from "../images/vr/25.jpeg";
// import img026 from "../images/vr/26.jpeg";
// import img027 from "../images/vr/27.jpeg";
// import img028 from "../images/vr/28.jpeg";
// import img029 from "../images/vr/29.jpeg";
// import img030 from "../images/vr/30.jpeg";
// import img031 from "../images/vr/31.jpeg";
// import img032 from "../images/vr/32.jpeg";

const images = [
  img1,
  img2,
  img3,
  // img01,
  img4,
  img5,
  img6,
  // img02,
  img7,
  img8,
  // img03,
  // img04,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  // img22,
  // img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  // img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
  img45,
  img46,
  img47,
  img48,
  img49,
  img50,
  img51,
  img52,
  img53,
  img54,
  img55,
  img56,
  img57,
  img58,
  img59,
  img60,
  img61,
  // img62,
  img63,
  // img64,
  img65,
  img66,
  img67,
  img68,
  img69,
  img70,
  img71,
  img72,
  img73,
  img74,
  img75,
  img76,
  // img77,
  img78,
  img79,
  // img80,
  img81,
  img82,
  img83,
  img84,
  img85,
  img86,
  img87,
  img88,
  img89,
  img90,
  img91,
  img92,
  img93,
  img94,
  img95,
  img96,
];

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    console.log(img, i);
    setData({ img, i });
  };

  return (
    <>
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
export default Shop;
