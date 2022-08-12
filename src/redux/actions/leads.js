import axios from "axios";

import { tokenConfig } from "./auth";

import { GET_ALL_LEADS, GET_LEAD, LEADS_LOADING } from "./types";

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

//get specific lead
export const getLead = (id) => (dispatch) => {
  let url = `http://127.0.0.1:5000/api/leads/view/${id}/`;
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: GET_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//when leads are loading from the backend
export const setLeadsLoading = () => {
  return {
    type: LEADS_LOADING,
  };
};
