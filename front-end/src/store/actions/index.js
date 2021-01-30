import axiosWithAuth from "../../utils/axiosWithAuth";

export const FETCH_PLANTS_START = "FETCH_PLANTS_START";
export const FETCH_PLANTS_SUCCESS = "FETCHPLANTS_SUCCESS";
export const FETCH_PLANTS_FAIL = "FETACH_PLANTS_FAIL";
export const ADD_PLANT = "ADD_PLANT";
export const ADD_PLANT_FAIL = "ADD_PLANT_FAIL";
export const DELETE_PLANT = "DELETE_PLANT";
export const DELETE_PLANT_FAIL = "DELETE_PLANT_FAIL";
export const PLANT_EDIT = "PLANT_EDIT";
export const PLANT_EDIT_FAIL = "PLANT_EDIT_FAIL";
export const EDIT_USER_INFO = "EDIT_USER_INFO";
export const EDIT_USER_FAIL = "EDIT_USER_FAIL";

export const fetchPlants = (id) => (dispatch) => {
  dispatch({ type: FETCH_PLANTS_START });
  axiosWithAuth()
    .get("/plants")
    .then((res) => {
      dispatch({ type: FETCH_PLANTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_PLANTS_FAIL, payload: err.message });
    });
};

export const addPlant = (
  newPlant,
  history,
  setFormValues,
  initialFormValues
) => (dispatch) => {
  axiosWithAuth()
    .post("/plants", newPlant)
    .then((res) => {
      dispatch({ type: ADD_PLANT, payload: res.data });
      history.push("/dashboard");
    })
    .catch((err) => {
      dispatch({ type: ADD_PLANT_FAIL, payload: err.message });
    })
    .finally(() => {
      setFormValues(initialFormValues);
    });
};

export const deletePlant = (id) => (dispatch) => {
  axiosWithAuth()
    .delete(`/plant/${id}`)
    .then((res) => {
      dispatch({ type: DELETE_PLANT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_PLANT_FAIL, payload: err.message });
    });
};

export const editPlant = (id, data) => (dispatch) => {
  axiosWithAuth()
    .put(`/plant/${id}`, data)
    .then((res) => {
      dispatch({ type: PLANT_EDIT, payload: res.data.plants });
    })
    .catch((err) => {
      dispatch({ type: PLANT_EDIT_FAIL, payload: err.message });
    });
};

export const editUserInfo = (id, data) => (dispatch) => {
  axiosWithAuth()
    .put(`/user/${id}`, data)
    .then((res) => {
      dispatch({ type: EDIT_USER_INFO, payload: res.data.user });
    })
    .catch((err) => {
      dispatch({ type: EDIT_USER_FAIL, payload: err.message });
    });
};
