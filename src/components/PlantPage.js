import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(newSearchTerm) {
    setSearchTerm(newSearchTerm.toLowerCase());
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm)
  );

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} /> {/* Ensure function is passed */}
      <Search onSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
