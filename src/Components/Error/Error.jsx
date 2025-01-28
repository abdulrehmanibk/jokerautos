import React from "react";
import "./Error.css";

function Error() {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="error-link">
        Go Back to Home
      </a>
    </div>
  );
}

export default Error;
