import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { fetchDebt } from "../actions/debt-actions";

const debtCollection = firebase.firestore().collection("Customer");

const fetchDebtById = (customerId) => {
  return (dispatch) => {
    debtCollection
      .doc(customerId)
      .collection("Debt")
      .get()
      .then((res) => {
        let debtCollection = [];
        res.docs.forEach((doc) => {
          debtCollection.push({ id: doc.id, ...doc.data() });
        });
        console.log(debtCollection)
        return dispatch(fetchDebt(debtCollection));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


export {fetchDebtById}