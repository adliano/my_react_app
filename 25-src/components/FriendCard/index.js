import React from "react";
import "./style.css";
// Destructing object
// In this case JSON will be pass to the function and it will have keys: name, image, occupation, location
function SpongeBobCard({ name, image, occupation, location }) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={name}
          src={image}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Occupation:</strong> {occupation}
          </li>
          <li>
            <strong>Location:</strong> {location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SpongeBobCard;
