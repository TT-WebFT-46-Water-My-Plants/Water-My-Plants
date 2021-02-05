import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { deletePlant, editPlant } from "../store/actions";
import { connect } from "react-redux";

const initialPlant = {
  nickname: "",
  species: "",
  h2oFrquency: "",
};
const PlantCard = (props) => {
  const [editing, setEditing] = useState(false);
  const [plantToEdit, setPlantToEdit] = useState(initialPlant);
  const history = useHistory();

  const { nickname, species, h2o_frequency, image_url, id } = props.plant;

  const plantEdit = (edit) => {
    setEditing(true);
    setPlantToEdit(id);
  };

  const plantDelete = (e) => {
    e.preventDefault();
    props.deletePlant(id);
    history.push("/dashboard");
  };

  const save = (e) => {
    e.preventDefault();
    props.editPlant(id, plantToEdit);
    history.push("/edited");
  };

  return (
    <div key={id}>
      <div className="plantCard">
        <div
          style={{ backgroundImage: `url(${image_url})` }}
          className="image"
        ></div>
        <div className="text-container">
          <h4 className="nickname">{nickname}</h4>
          <p className="species">{species}</p>
          <p>
            Water every <span className="water">{h2o_frequency}</span> days
          </p>
        </div>
        <div className="button-wrapper">
          <button classNAme="fa fa-edit" onClick={(e) => plantEdit(e)}></button>
        </div>
        <button
          className="fa fa-trash"
          onclick={(e) => plantDelete(e)}
        ></button>
        <button className="save btn" type="submit">
          Save
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { deletePlant, editPlant })(PlantCard);
