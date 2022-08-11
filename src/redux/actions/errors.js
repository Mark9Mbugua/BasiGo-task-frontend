import { GET_ERRORS, CLEAR_ERRORS } from "./types";

// RETURN ERRORS
export const returnErrors = (message, success) => {
  return {
    type: GET_ERRORS,
    payload: { message, success },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
