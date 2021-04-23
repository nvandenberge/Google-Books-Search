import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="jumbotron jumbotron-fluid" id="header">
        <div className="container">
          <h1 className="display-4 text-center">(React) Google Books Search</h1>
          <p className="text-center">Search for and Save Books of Interest!</p>
        </div>
      </div>
    )
}

export default Header;