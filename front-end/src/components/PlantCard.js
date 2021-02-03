import React, { useState } from "react";
import { deletePlant } from "../store/actions";
import { connect } from "react-redux";
import EditPlant from "../forms/EditPlant";

const PlantCard = ({ plant, removePlant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [update, setUpdate] = useState(false);

  const { nickname, species, h2o_frequency, image_url, id } = plant;

  const plantDelete = () => {
    deletePlant(id);
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
          <button
            className="fa fa-edit"
            onClick={() => setIsOpen(true)}
          ></button>
          <EditPlant
            open={isOpen}
            onClose={() => setIsOpen(false)}
            plant={plant}
            update={setUpdate}
          >
            Plant Edit Form
          </EditPlant>
        </div>
        <button
          className="fa fa-trash"
          onclick={(e) => plantDelete(e)}
        ></button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { deletePlant })(PlantCard);
