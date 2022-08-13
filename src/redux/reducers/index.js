import { combineReducers } from "redux";
import auth from "./auth";
import leads from "./leads";
import customers from "./customers";
import errors from "./errors";

export default combineReducers({
  auth,
  leads,
  customers,
  errors,
});
