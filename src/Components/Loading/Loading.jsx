import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-circle"></div>
      <h1 className="loading-text">Loading...</h1>
    </div>
  );
}

export default Loading;
