import axios from "axios";

import { tokenConfig, tokenFormConfig } from "./auth";
import { returnErrors } from "./errors";

import {
  GET_ALL_CUSTOMERS,
  GET_CUSTOMER,
  CUSTOMERS_LOADING,
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_ERROR,
  GET_CUSTOMER_ERROR,
  GET_CUSTOMERS_ERROR,
} from "./types";

//get all customers
export const getAllCustomers = () => (dispatch) => {
  let url = "http://127.0.0.1:5000/api/customers/all";
  axios
    .get(url, tokenConfig())
    .then((res) => {
      dispatch({
        type: GET_ALL_CUSTOMERS,
        payload: res.data.data.leads,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data.message, err.response.status));
      dispatch({
        type: GET_CUSTOMERS_ERROR,
      });
    });
};

// create a new customer
export const createCustomer = (newCustomer) => (dispatch) => {
  axios
    .post(
      "http://127.0.0.1:5000/api/leads/create",
      newCustomer,
      tokenFormConfig()
    )
    .then((res) =>
      dispatch({
        type: CREATE_CUSTOMER,
        payload: res.data.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data.message, err.response.status));
      dispatch({
        type: CREATE_CUSTOMER_ERROR,
      });
    });
};

//get specific customer
export const getCustomer = (id) => (dispatch) => {
  let url = `http://127.0.0.1:5000/api/customers/view/${id}/`;
  axios
    .get(url, tokenConfig())
    .then((res) => {
      dispatch({
        type: GET_CUSTOMER,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data.message, err.response.status));
      dispatch({
        type: GET_CUSTOMER_ERROR,
      });
    });
};

//when customers are loading from the backend
export const setLeadsLoading = () => {
  return {
    type: CUSTOMERS_LOADING,
  };
};
