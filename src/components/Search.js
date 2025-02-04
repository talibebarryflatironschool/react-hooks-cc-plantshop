
import React from "react";

function Search({ onSearchChange }) {
  function handleChange(e) {
    onSearchChange(e.target.value); // Pass search term to PlantPage.js
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
