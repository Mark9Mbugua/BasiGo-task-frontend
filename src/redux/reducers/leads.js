import {
  GET_ALL_LEADS,
  GET_LEAD,
  LEADS_LOADING,
  CREATE_LEAD,
  CREATE_LEAD_ERROR,
} from "../actions/types.js";

const initialState = {
  leads: [],
  lead: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_LEADS:
      return {
        ...state,
        leads: action.payload,
      };

    case CREATE_LEAD:
      return {
        ...state,
        leads: [action.payload, ...state.leads],
      };

    case GET_LEAD:
      return {
        ...state,
        lead: action.payload,
      };

    case LEADS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CREATE_LEAD_ERROR:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
