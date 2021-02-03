import React from "react";
import PlantCard from "./PlantCard";

const PlantList = ({ plants }) => {
  return (
    <div>
      <h2>My Plants</h2>
      {plants.map((plant) => {
        return <PlantCard key={plant.id} plant={plant} />;
      })}
    </div>
  );
};

export default PlantList;
