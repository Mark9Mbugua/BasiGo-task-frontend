import { GET_ALL_LEADS, GET_LEAD, LEADS_LOADING } from "../actions/types.js";

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

    // case GET_LEAD:
    //   return {
    //     ...state,
    //     lead: action.payload,
    //   };
    case LEADS_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
