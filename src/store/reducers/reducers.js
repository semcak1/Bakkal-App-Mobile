import { State } from "react-native-gesture-handler";
import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  FETCH_CUSTOMERS_SUCCESS,
  UPDATE_CUSTOMER,
} from "../constants/action-types";

const initialState = {
  customers: [{ name: "SEmih", surname: "ÇAkmak", limit: 300, id: "1" }],
  isLoaded: false,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_SUCCESS:
      return { ...state, customers: [...action.payload], isLoaded: true };
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: [
          ...state.customers.filter(
            (customer) => customer.id !== action.payload
          ),
        ],
      };
    case UPDATE_CUSTOMER:
      return {
        ...state,
        customer: [
          ...state.customers,
          {
            ...state.customers.find(
              (customer) => customer.id === action.payload.id
            ),
            ...action.payload,
          },
        ],
      };
    default:
      return state;
  }
};

export { customerReducer };
