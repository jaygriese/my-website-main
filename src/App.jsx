import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Shop from "./components/pages/Shop";
import Prints from "./components/pages/Prints";
import Home from "./components/pages/Home";
import ImageDetail from "./components/pages/ImageDetail";
import Cart from "./components/pages/Cart";
import CartState from "./components/pages/CartState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import img1 from "./components/images/Shop/img1.jpg";
import img2 from "./components/images/Shop/img2.jpg";
import img3 from "./components/images/Shop/img3.jpg";
import img4 from "./components/images/Shop/img4.jpg";
import img5 from "./components/images/Shop/img5.jpg";
import img6 from "./components/images/Shop/img6.jpg";
import img7 from "./components/images/Shop/img7.jpg";
import img8 from "./components/images/Shop/img8.jpg";
import img9 from "./components/images/Shop/img9.jpg";
import img10 from "./components/images/Shop/img10.jpg";
import img11 from "./components/images/Shop/img11.jpg";
import img12 from "./components/images/Shop/img12.jpg";
import img13 from "./components/images/Shop/img13.jpg";
import img14 from "./components/images/Shop/img14.jpg";
import img15 from "./components/images/Shop/img15.jpg";
import img16 from "./components/images/Shop/img16.jpg";
import img17 from "./components/images/Shop/img17.jpg";
import img18 from "./components/images/Shop/img18.jpg";
import img19 from "./components/images/Shop/img19.jpg";
import img20 from "./components/images/Shop/img20.jpg";
import img21 from "./components/images/Shop/img21.jpg";
import img24 from "./components/images/Shop/img24.jpg";
import img25 from "./components/images/Shop/img25.jpg";
import img26 from "./components/images/Shop/img26.jpg";
import img27 from "./components/images/Shop/img27.jpg";
import img28 from "./components/images/Shop/img28.jpg";
import img29 from "./components/images/Shop/img29.jpg";
// import img30 from "./components/images/Shop/img30.jpg";
import img31 from "./components/images/Shop/img31.jpg";
import img32 from "./components/images/Shop/img32.jpg";
import img33 from "./components/images/Shop/img33.jpg";
import img34 from "./components/images/Shop/img34.jpg";
import img35 from "./components/images/Shop/img35.jpg";
import img36 from "./components/images/Shop/img36.jpg";
import img37 from "./components/images/Shop/img37.jpg";
import img38 from "./components/images/Shop/img38.jpg";
import img39 from "./components/images/Shop/img39.jpg";
import img40 from "./components/images/Shop/img30.jpg";
import img41 from "./components/images/Shop/img41.jpg";
import img42 from "./components/images/Shop/img42.jpg";
import img43 from "./components/images/Shop/img43.jpg";
import img44 from "./components/images/Shop/img44.jpg";
import img45 from "./components/images/Shop/img45.jpg";
import img46 from "./components/images/Shop/img46.jpg";
import img47 from "./components/images/Shop/img47.jpg";
import img48 from "./components/images/Shop/img48.jpg";
import img49 from "./components/images/Shop/img49.jpg";
import img50 from "./components/images/Shop/img50.jpg";
import img51 from "./components/images/Shop/img51.jpg";
import img52 from "./components/images/Shop/img52.jpg";
import img53 from "./components/images/Shop/img53.jpg";
import img54 from "./components/images/Shop/img54.jpg";
import img55 from "./components/images/Shop/img55.jpg";
import img56 from "./components/images/Shop/img56.jpg";
import img57 from "./components/images/Shop/img57.jpg";
import img58 from "./components/images/Shop/img58.jpg";
import img59 from "./components/images/Shop/img59.jpg";
import img60 from "./components/images/Shop/img60.jpg";
import img61 from "./components/images/Shop/img61.jpg";
// import img62 from "../images/Shop/img62.jpg";
import img63 from "./components/images/Shop/img63.jpg";
import img64 from "./components/images/Shop/img64.jpg";
import img65 from "./components/images/Shop/img65.jpg";
import img66 from "./components/images/Shop/img66.jpg";
import img67 from "./components/images/Shop/img67.jpg";
import img68 from "./components/images/Shop/img68.jpg";
import img69 from "./components/images/Shop/img69.jpg";
import img70 from "./components/images/Shop/img70.jpg";
import img71 from "./components/images/Shop/img71.jpg";
import img72 from "./components/images/Shop/img72.jpg";
import img73 from "./components/images/Shop/img73.jpg";
import img74 from "./components/images/Shop/img74.jpg";
import img75 from "./components/images/Shop/img75.jpg";
import img76 from "./components/images/Shop/img76.jpg";
// import img77 from "../images/Shop/img77.jpg";
import img78 from "./components/images/Shop/img78.jpg";
import img79 from "./components/images/Shop/img79.jpg";
// import img80 from "../images/Shop/img80.jpg";
import img81 from "./components/images/Shop/img81.jpg";
import img82 from "./components/images/Shop/img82.jpg";
import img83 from "./components/images/Shop/img83.jpg";
import img84 from "./components/images/Shop/img84.jpg";
import img85 from "./components/images/Shop/img85.jpg";
import img86 from "./components/images/Shop/img86.jpg";
import img87 from "./components/images/Shop/img87.jpg";
import img88 from "./components/images/Shop/img88.jpg";
import img89 from "./components/images/Shop/img89.jpg";
import img90 from "./components/images/Shop/img90.jpg";
import img91 from "./components/images/Shop/img91.jpg";
import img92 from "./components/images/Shop/img92.jpg";
import img93 from "./components/images/Shop/img93.jpg";
import img94 from "./components/images/Shop/img94.jpg";
import img95 from "./components/images/Shop/img95.jpg";
import img96 from "./components/images/Shop/img96.jpg";

// import { shopImages } from "./components/pages/Shop";

function App() {
  const [cartItems, setCartItems] = useState([]);
 
   useEffect(() => {
     const storedCartItems = localStorage.getItem("cartItems");
     console.log("Stored cart items on load:", storedCartItems); // Log the stored data
     if (storedCartItems) {
       try {
         const parsedCartItems = JSON.parse(storedCartItems);
         console.log("Parsed cart items on load:", parsedCartItems); // Log parsed items
         setCartItems(parsedCartItems);
       } catch (error) {
         console.error("Failed to parse stored cart items:", error);
       }
     }
   }, []); // Empty dependency array ensures this runs only once

   useEffect(() => {
     console.log("Updating local storage with:", cartItems); // Log state changes
     localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems]); 

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
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
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
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop images={images} />} />
          <Route
            path="/image/:index"
            element={
              <ImageDetail
                images={images}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />

          <Route path="/*" element={<CartState images={images} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
