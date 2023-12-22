import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Shop from "./components/pages/Shop";
import Prints from "./components/pages/Prints";
import Home from "./components/pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/portfolio" exact Component={Portfolio} />
          <Route path="/Contact" exact Component={Contact} />

          <Route path="/prints" exact Component={Prints} />
          <Route path="/Shop" exact Component={Shop} />
          <Route path="/Services" exact Component={Services} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
