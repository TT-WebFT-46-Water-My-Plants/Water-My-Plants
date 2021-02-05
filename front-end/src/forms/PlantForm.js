import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as yup from "yup";
import { addPlant } from "../store/actions";

const intialValues = {
  nickname: "",
  species: "",
  h2oFrequency: "",
};

const intialErrorValues = {
  nickname: "",
  species: "",
  h2oFrequency: "",
};

const initialDisabled = true;

const PlantForm = (props) => {
  const [errors, setErrors] = useState(intialErrorValues);
  const [values, setValues] = useState(intialValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  const history = useHistory();

  const formSchema = yup.object().shape({
    nickname: yup.string().required("Plant reqiures a nickname"),
    spiecies: yup.string().required("Plant reqiures a spiecies"),
    h2oFrequency: yup.string().required("Plant requires a h2oFrequency"),
  });

  const formErrors = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      nickname: values.nickname.trim(),
      species: values.species.trim(),
      h2oFrequency: values.h2oFrequency.trim(),
    };

    console.log("New Plant: ", newPlant);
    props.addPlant(newPlant, history, setValues, intialValues);
    setValues(intialValues);
  };

  useEffect(() => {
    formSchema.isValid(values).then((valid) => setDisabled(!valid));
  }, [formSchema, values]);

  return (
    <div className="plant-form-container">
      <h2>This is where the plant form will go</h2>
      <form className="plant-form" onSubmit={formSubmit}>
        <div className="plant-inputs">
          <label className="plant-label" htmlFor="nickname">
            What is the name of your plant?
          </label>
          <input
            type="string"
            name="nickname"
            id="nickname"
            className="plant-input"
            placeholder="Plant name"
            onChange={handleChanges}
          />
          <div style={{ color: "red" }}>{errors.nickname}</div>
        </div>
        <br></br>
        <div className="plant-inputs">
          <label className="plant-label" htmlFor="species">
            What species of plant do you have?
          </label>
          <input
            type="string"
            name="species"
            id="species"
            className="plant-input"
            placeholder="Plant species"
            onChange={handleChanges}
          />
          <div style={{ color: "red" }}>{errors.species}</div>
        </div>
        <br></br>
        <div className="plant-inputs">
          <label className="plant-label" htmlFor="h2oFrequency">
            How often do you need to water your plant?
          </label>
          <input
            type="string"
            name="h2oFrequency"
            id="h2oFrequency"
            className="plant-input"
            placeholder="How many times a week?"
            onChange={handleChanges}
          />
          <div style={{ color: "red" }}>{errors.h2oFrequency}</div>
        </div>
        <br></br>
        <button
          className="form-btn"
          type="submit"
          disabled={props.disabled}
          onSubmit={formSubmit}
        >
          Save Your Plant!
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    plants: state.plants,
  };
};

export default connect(mapStateToProps, { addPlant })(PlantForm);
