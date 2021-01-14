import { cos } from "react-native-reanimated";
import { ADD_DEBT, FETCH_DEBT } from "../constants/debt-action-types";

const initialState = {
  detbts: [],
  totalDebt:0
};

const debtReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEBT:
      console.log('FETCH DBT',action.payload)
      return {
        ...state,
        debts: [...action.payload.debtCollection],
        totalDebt:action.payload.totalDebt
      };

    case ADD_DEBT:
      
      return {
        ...state,
        debts: [...state.debts,action.payload],
        totalDebt:action.payload.debtPrice+state.totalDebt
      };

    default:
      return state;
  }
};

export { debtReducer };
