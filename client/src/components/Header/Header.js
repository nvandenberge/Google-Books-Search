import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid" id="header">
      <div className="container headerText">
        <h1 className="display-4 text-center">(React) Google Books Search</h1>
        <h5 className="text-center">Search for and Save Books of Interest!</h5>
      </div>
    </div>
  );
};

export default Header;
