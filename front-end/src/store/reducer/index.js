import {
  FETCH_PLANTS_FAIL,
  FETCH_PLANTS_START,
  FETCH_PLANTS_SUCCESS,
  ADD_PLANT,
  ADD_PLANT_FAIL,
  DELETE_PLANT,
  DELETE_PLANT_FAIL,
  EDIT_USER_FAIL,
  EDIT_USER_INFO,
  PLANT_EDIT,
  PLANT_EDIT_FAIL,
} from "../actions/index";

const initialState = {
  users: [],
  plants: [],
  loading: false,
  error: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANTS_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLANTS_SUCCESS:
      return {
        ...state,
        plants: action.payload,
        loading: false,
      };
    case FETCH_PLANTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_PLANT:
      return {
        ...state,
        loading: false,
        plants: action.payload,
      };
    case ADD_PLANT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_PLANT:
      return {
        ...state,
        loading: false,
        plants: action.payload,
      };
    case DELETE_PLANT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case EDIT_USER_INFO:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case PLANT_EDIT:
      return {
        ...state,
        loading: false,
        plants: action.payload,
      };
    case PLANT_EDIT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
