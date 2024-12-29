import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1>
        Hello <span className="wave">👋</span>
      </h1>
      <h1>
        I'm&nbsp; <span className="highlighted-name"><strong>Hanxuan Zhang</strong></span>
      </h1>
      <h1>
        I build cool stuff to make
      </h1>
      <h1>
        people happy.
      </h1>
      <div className="button-container">
      <a href="https://www.linkedin.com/in/allen628228336/" target="_blank" rel="noopener noreferrer">
        <button className="custom-button">LinkedIn</button>
      </a>
      <a href="https://github.com/Allenz5" target="_blank" rel="noopener noreferrer">
        <button className="custom-button">Github</button>
      </a>
      <a href="mailto:hzhang958@gatech.edu">
        <button className="custom-button">Email</button>
      </a>
      </div>
    </header>
  );
}

export default Header;