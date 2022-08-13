import {
  GET_ALL_CUSTOMERS,
  GET_CUSTOMER,
  CUSTOMERS_LOADING,
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_ERROR,
} from "../actions/types.js";

const initialState = {
  customers: [],
  customer: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };

    case CREATE_CUSTOMER:
      return {
        ...state,
        customers: [action.payload, ...state.customers],
      };

    case GET_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
      };

    case CUSTOMERS_LOADING:
      return {
        ...state,
        loading: true,
      };

      case CREATE_CUSTOMER_ERROR:
        return {
          ...state,
          user: null,
        };

    default:
      return state;
  }
}
