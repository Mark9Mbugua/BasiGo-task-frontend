import axios from "axios";
import { returnErrors } from "./errors";

import {
  //   AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  //   USER_LOADING,
  //   USER_LOADED,
  //   LOAD_USER_FAILURE,
    LOGOUT_SUCCESS,
} from "./types";

// Check token & load user
// export const loadCurrentUser = () => (dispatch, getState) => {
//   // User loading
//   dispatch({ type: USER_LOADING });

//   axios
//     .get('http://127.0.0.1:8000/api/v1/accounts/user/', tokenConfig(getState))
//     .then(res =>
//       dispatch({
//         type: USER_LOADED,
//         payload: res.data
//       })
//     )
//     .catch(err => {
//       dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: LOAD_USER_FAILURE
//       });
//     });
// };

// Sign Up a User
export const signUp =
  ({ fullname, role, email, password }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = JSON.stringify({ fullname, role, email, password });

    axios
      .post("http://127.0.0.1:5000/api/auth/signup", body, config)
      .then((res) =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data.message, err.response.status)
        );
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };

// Sign In User
export const signIn =
  ({ email, password }) =>
  (dispatch) => {
    // Headers
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Request body
    const body = JSON.stringify({ email, password });

    axios
      .post("http://127.0.0.1:5000/api/auth/signin", body, config)
      .then((res) =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch(
          returnErrors(err.response.data.message, err.response.status)
        );
        dispatch({
          type: LOGIN_FAIL,
        });
      });
  };

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
export const tokenConfig = () => {
  const token = localStorage.getItem("accesstoken");

  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // If token, add to headers
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
};

// Setup config/headers and token for form uploads
export const tokenFormConfig = () => {
  const token = localStorage.getItem("accesstoken");

  // Headers
  const config = {
    headers: {},
  };

  // If token, add to headers
  if (token) {
    config.headers["Authorization"] = token;
  }
  console.log(config);
  return config;
};
