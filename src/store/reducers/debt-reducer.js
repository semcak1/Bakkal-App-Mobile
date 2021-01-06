import { FETCH_DEBT } from "../constants/debt-action-types";

const initialState = {
  detbts: [{ products: "elma", debtPrice: 10, debtDate: "salı" }],
};

const debtReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEBT:
      return {
        ...state,
        debts: [...action.payload],
      };

    default:
      return state;
  }
};

export { debtReducer };
