import axios from "axios";

import { tokenConfig } from "./auth";
import { returnErrors } from "./errors";
import {
  GET_ALL_LEADS,
  GET_LEAD,
  LEADS_LOADING,
  CREATE_LEAD,
  CREATE_LEAD_ERROR,
} from "./types";

//get all leads
export const getAllLeads = () => (dispatch) => {
  let url = "http://127.0.0.1:5000/api/leads/all";
  axios
    .get(url, tokenConfig())
    .then((res) => {
      dispatch({
        type: GET_ALL_LEADS,
        payload: res.data.data.leads,
      });
    })
    .catch((err) => console.log(err));
};

// create a new Lead
export const createLead = (newLead) => (dispatch) => {
  // Request body
  const body = JSON.stringify(newLead);

  axios
    .post("http://127.0.0.1:5000/api/leads/create", body, tokenConfig())
    .then((res) =>
      dispatch({
        type: CREATE_LEAD,
        payload: res.data.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data.message, err.response.status));
      dispatch({
        type: CREATE_LEAD_ERROR,
      });
    });
};

//get specific lead
export const getLead = (id) => (dispatch) => {
  let url = `http://127.0.0.1:5000/api/leads/view/${id}/`;
  axios
    .get(url, tokenConfig())
    .then((res) => {
      dispatch({
        type: GET_LEAD,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data.message, err.response.status));
      dispatch({
        type: CREATE_LEAD_ERROR,
      });
    });
};

//when leads are loading from the backend
export const setLeadsLoading = () => {
  return {
    type: LEADS_LOADING,
  };
};
