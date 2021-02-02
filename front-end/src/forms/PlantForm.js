import React, { useState } from "react";

function Plant() {
  const [plant, setPlant] = useState({
    nickname: "",
    species: "",
    h20Frequency: "",
    image: "",
  });

  const submit = (e) => {
    e.preventDefault();
    const newPlant = {
      nickname: plant.nickname,
      species: plant.species,
      h20Frequency: plant.h20Frequency,
      image: plant.image,
    };
  };
  const change = (e) => {
    setPlant({
      ...plant,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="plant-form">
      <h2>Add a plant!</h2>
      <form onSubmit={submit}>
        <div className="form-input">
          <label htmlFor="nickname">Give your plant a nickname! </label>
          <input
            id="nickname"
            type="text"
            name="nickname"
            onChange={change}
            value={plant.nickname}
          />
        </div>
        <br></br>
        <div className="form-input">
          <label htmlFor="species">What is the species of your plant? </label>
          <input
            id="species"
            type="text"
            name="species"
            onChange={change}
            value={plant.species}
          />
        </div>
        <br></br>
        <div className="form-input">
          <label htmlFor="h20Frequency">Water frequency? </label>
          <input
            id="h20Frequency"
            type="text"
            name="h20Frequency"
            onChange={change}
            value={plant.waterFrequency}
          />
        </div>
        <br></br>
        <div className="form-input">
          <label htmlFor="image">Add a picture of your plant! </label>
          <input
            id="image"
            type="file"
            alt="plant-image"
            accept="image/*,.pdf"
            onChange={change}
            value={plant.image}
          />
        </div>
        <br></br>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Plant;
