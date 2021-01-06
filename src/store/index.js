import { createStore, applyMiddleware, combineReducers } from "redux";
import { customerReducer } from "./reducers/reducers";
import { debtReducer } from "./reducers/debt-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    debts:debtReducer,
    customers:customerReducer,

});


const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store.getState())

export default store;
