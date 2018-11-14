import React from "react";
import "./Jumbotron.css";
import logo from "./u5t8-rrk_400x400.jpg";

const Jumbotron = () => (
  <div className="jumbotron">
    <div className="container">
      <h1 className="display-1 jumbotron-text">
        {" "}
        <img
          src={logo}
          className="rounded-circle mr-4"
          alt="logo"
          width="150"
          height="150"
        />
        Corelight Blog
      </h1>
    </div>
  </div>
);

export default Jumbotron;
