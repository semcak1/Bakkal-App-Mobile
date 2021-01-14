import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { addDebt, fetchDebt } from "../actions/debt-actions";
import { customerReducer } from "../reducers/reducers";

const customerCol = firebase.firestore().collection("Customer");

const fetchDebtById = (customerId) => {
  console.log("CUSTOMER ID", customerId);

  const debtCol = customerCol.doc(customerId).collection("Debt");

  return (dispatch) => {
    debtCol
      .get()
      .then((res) => {
        const debtData = {
          customerId: customerId,
          debtCollection: [],
          totalDebt: 0,
        };
        // let debtCollection = [];
        res.docs.forEach((doc) => {
          debtData.debtCollection.push({
            id: doc.id,
            ...doc.data(),
          });
          debtData.totalDebt=debtData.totalDebt+doc.data().debtPrice

        });

        return dispatch(fetchDebt(debtData));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addNewDebt = (data, customerId) => {
  const debtCol = customerCol.doc(customerId).collection("Debt");
  const debtData={
    customerId,
    debt:data,
    debtPrice:data.debtPrice
  }
  return (dispatch) => {
    debtCol.add(data).then((res) => dispatch(addDebt({ id: res.id, ...data })));
  };
};

export { fetchDebtById, addNewDebt };
