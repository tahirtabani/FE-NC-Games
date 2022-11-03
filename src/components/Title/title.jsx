import React from "react";
import "./title.css";
import Layout from "../Sidebar/sidebar";
import REACTLOGO from "../../logo.png";

function Title() {
  return (
    <div className="Logo">
      <a href="/home">
        <img id="logo" src={REACTLOGO} alt="Logo" />
      </a>
      <div className="Title-container">
        <div className="Sidebar">
          <Layout />
        </div>
        <div className="Title">
          <h1>Tahir NC Games</h1>
        </div>
      </div>
    </div>
  );
}

export default Title;
