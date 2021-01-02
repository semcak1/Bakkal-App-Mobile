import {
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  FETCH_CUSTOMERS_SUCCESS,
  UPDATE_CUSTOMER,
} from "../constants/action-types";

export const fetchCustomers = (data) => {
  return { type: FETCH_CUSTOMERS_SUCCESS, payload:  data  };
};

export const addCustomer = (data) => {
  return { type: ADD_CUSTOMER, payload: { ...data } };
};

export const deleteCustomer = (id) => {
  return { type: DELETE_CUSTOMER, payload:id};
};

export const updateCustomer = () => {
  return { type: UPDATE_CUSTOMER, payload };
};
