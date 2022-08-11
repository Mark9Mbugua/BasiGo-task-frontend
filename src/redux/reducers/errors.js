import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  message: "",
  success: "",
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ERRORS:
      return {
        message: action.payload.message,
        success: action.payload.success,
      };
    case CLEAR_ERRORS:
      return {
        message: "",
        success: "",
      };
    default:
      return state;
  }
}