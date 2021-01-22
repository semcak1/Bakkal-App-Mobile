import {
  ADD_DEBT,
  FETCH_DEBT,
  FETCH_ALL_DEBT,
} from "../constants/debt-action-types";

const initialState = {
  customerId: "",
  debts: [],
  allDebts: [],
  totalDebt: 0,
};

const debtReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEBT:
      console.log("FETCH DBT", action.payload);

      let total = action.payload
        .map((debt) => debt.price)
        .reduce((total, currentValue) => total + currentValue, 0);
      console.log(total);
      return {
        ...state,
        debts: [...action.payload],
        totalDebt: total,
        // customerId:{...state.customerId,customerId:action.payload.customerId}
      };

    case FETCH_ALL_DEBT:
      console.log("FETCH AALLL DBT", action.payload);

      return {
        ...state,
        allDebts: [...action.payload],
        // customerId:{...state.customerId,customerId:action.payload.customerId}
      };

    case ADD_DEBT:
      console.log("ADDD DBT", [...state.debts]);
      return {
        ...state,
        debts: [...state.debts],
        // totalDebt:action.payload.debtPrice+state.totalDebt
      };

    default:
      return state;
  }
};

export { debtReducer };
