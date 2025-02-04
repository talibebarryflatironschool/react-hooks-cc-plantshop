import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true); 

  function handleStockToggle() {
    setIsInStock((prevStatus) => !prevStatus); 
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p> {/* Ensuring correct price format */}
      <button 
        className={isInStock ? "primary" : ""} 
        onClick={handleStockToggle}
      >
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
