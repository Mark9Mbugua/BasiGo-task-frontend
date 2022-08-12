import { combineReducers } from "redux";
import auth from "./auth";
import leads from "./leads";
import errors from "./errors";

export default combineReducers({
  auth,
  leads,
  errors,
});
