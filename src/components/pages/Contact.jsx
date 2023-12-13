import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div style={{ border: " 6 px red" }}>
      <div>
        <div
          style={{
            fontSize: "20px",
            // fontStyle
            lineHeight: "1.5",
            marginLeft: "10%",
            textAlign: "left",
            paddingTop: "10%",
          }}
        >
          jaygriese@gmail.com <br /> +13144506625
          <br />
          <br />
          <Link to="https://www.instagram.com/jay_griese_/">instagram</Link>
        </div>
        <div
          style={{
            // width: "80%",
            fontSize: "20px",
            lineHeight: "1.5",
            marginLeft: "10%",
            textAlign: "left",
            paddingTop: "5%",
            width: "500px",
            textAlign: "justify",
          }}
        >
          <h4>COPYRIGHT AND LICENSING</h4>
          Thanks for visiting my website, I trust you are enjoying the images,
          but please be aware that all the photographs are protected by
          copyright law and unauthorised use is not permitted. The copyright in
          all images, text and other content is owned by Jay Griesedieck
          Photography Pty Ltd, unless noted otherwise. All rights are reserved.
          Reproduction, copying, saving, modifying or publishing the images or
          other content on the site is prohibited without a written license
          issued by Jay Griesedieck Photography Pty Ltd.
        </div>
      </div>
    </div>
  );
};
export default Contact;
