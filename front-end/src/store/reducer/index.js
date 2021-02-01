import {
  FETCH_PLANT_DATA_FAIL,
  FETCH_PLANT_DATA_START,
  FETCH_PLANT_DATA_SUCCESS,
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

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANT_DATA_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLANT_DATA_SUCCESS:
      return {
        ...state,
        plants: [action.payload],
        loading: false,
      };
    case FETCH_PLANT_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_PLANT:
      return {
        ...state,
        loading: false,
        plants: [...state, action.payload],
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

export default reducer;
