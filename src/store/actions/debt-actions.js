import { ADD_DEBT, FETCH_DEBT,FETCH_ALL_DEBT } from "../constants/debt-action-types";

export const fetchDebt = (data) => {
  return { type: FETCH_DEBT, payload: data };
};

export const addDebt = (data) => {
  return { type: ADD_DEBT, payload: data };
};

export const fetchAllDebt = (data) => {
  return { type: FETCH_ALL_DEBT, payload: data };
};
