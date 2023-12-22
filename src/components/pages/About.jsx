import React from "react";
import "../../App.css";
// import blackShirtSelf from "../images/blackShirtSelfie.jpg";
import bwSelfie from "../images/bwSelfie.jpg";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="image-container">
          {/* image */}
          <img className="image" src={bwSelfie} alt="" />
        </div>
        <div className="text">
          <h3>About Jay</h3>
          {/* text */}
          <p>
            Jay is a St. Louis, Missouri native who specializes in
            documentary, outdoor, street, and travel photography. His enduring
            love for nature, adventure and travel is rooted in the wild beauty
            of Missouri and the American West where he spent formative years as
            a youth hunting, fishing and camping with his father.{" "}
          </p>
          <p>
            The spark for adventure truly ignited during Jay's time in
            Yellowstone National Park. In the summer of 2011, he found himself
            working as a rafting guide, surrounded by the breathtaking
            landscapes that would shape his perspective forever. It was during
            this season that serendipity led Jay to a group of Colombians whose
            warmth and culture captivated him. Intrigued, he followed his
            newfound friends to Colombia that winter, opening the door to a
            profound appreciation for diverse cultures and a relentless
            wanderlust that would take him to over 15 countries throughout
            Africa, Asia and Latin America in the years to come.
          </p>
          <p>
            Amidst these global adventures, photography became Jay's faithful
            companion. It's more than a craft to him; it's a means of connecting
            with moments and people, a bridge that links the beauty of life in
            nature and diverse cultures.{" "}
          </p>
          <p>
            On this journey, Jay also extends his skills to document love
            stories through wedding photography, capture the essence of
            individuals through portraiture, and showcase the artistry of
            interior design. Each of these facets reflects the diverse tapestry
            of experiences he's had the privilege to be a part of.
          </p>
          <p>
            Join Jay on this visual journey as he strives to freeze in time the
            exquisite beauty found in both nature and human connection. Through
            his lens, he aims to immortalize the magic that unfolds in each
            frame.
          </p>
          <div
          style={{
          //   fontSize: "15px",
          //   // fontStyle
          //   lineHeight: "1.5",
          //   marginLeft: "10%",

          //   textAlign: "left",
          //   paddingTop: "10%",
           color: "black",
          }}
          >
            Follow Jay on {" "}
            <Link to="https://www.instagram.com/jay_griese_/">Instagram</Link>
          </div>
        </div>
        {/* <div style={{ border: "solid green" }}>
        <button>Hire me</button>
        <button>View my work</button>
      </div> */}
      </div>
    </>
  );
};
export default About;
