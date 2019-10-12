import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECH_ERROR
} from "../types";

// Get techs from server
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/techs`);
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECH_ERROR,
      payload: err.response.statusText
    });
  }
};

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
