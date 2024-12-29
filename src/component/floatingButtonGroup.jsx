import React from "react";
import { useNavigate } from "react-router-dom";
import "./floatingButtonGroup.css";

const FloatingButtonGroup = () => {
  const navigate = useNavigate();

  return (
    <div className="floating-button-group">
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <a href="https://www.linkedin.com/in/allen628228336/" target="_blank" rel="noopener noreferrer">
        <button className="btn">LinkedIn</button>
      </a>
      <a href="https://github.com/Allenz5" target="_blank" rel="noopener noreferrer">
        <button className="btn">Github</button>
      </a>
      <a href="mailto:hzhang958@gatech.edu">
        <button className="btn">Email</button>
      </a>
    </div>
  );
};

export default FloatingButtonGroup;