import {
  AUTH_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADING,
  USER_LOADED,
  LOAD_USER_FAILURE,
  LOGOUT_SUCCESS,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("accesstoken"),
  isAuthenticated: false,
  isLoading: false,
  user: null,
  success: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        success: true,
      };
    case REGISTER_SUCCESS:
      console.log(action.payload.accesstoken);
      localStorage.setItem("accesstoken", action.payload.accesstoken);
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload.currentuser,
        token: action.payload.accesstoken,
        success: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("accesstoken", action.payload.accesstoken);
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        token: action.payload.accesstoken,
        user: action.payload.currentuser,
        success: true,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("accesstoken");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        success: false,
      };
    case LOAD_USER_FAILURE:
      return {
        ...state,
      };

    default:
      return state;
  }
}
