import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { act } from "react-dom/test-utils"; 

function App() {
  const [plants, setPlants] = useState([]); 
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        act(() => {
          setPlants(data); 
        });
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]); 
  }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onAddPlant={handleAddPlant} />
    </div>
  );
}

export default App;
