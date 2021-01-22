import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { addDebt, fetchDebt,fetchAllDebt } from "../actions/debt-actions";
import { customerReducer } from "../reducers/reducers";
import { Debts } from "../../database/Customer";

const debtCollection = firebase
  .firestore()
  .collection("members")
  .doc("FMmxXizR6XRSZfw9lLE1")
  .collection("debts");
const customerCollection = firebase
  .firestore()
  .collection("members")
  .doc("FMmxXizR6XRSZfw9lLE1")
  .collection("customers");

const fetchDebtById = (customerId) => {
  console.log("CUSTOMER ID", customerId);

  const debtCol = debtCollection.where("customerId", "==", `${customerId}`);

  return (dispatch) => {
    debtCol
      .get()
      .then((res) => {
        let debtListOfCustomer = [];
       
        res.docs.forEach((doc) => {
          debtListOfCustomer.push({ id: doc.id, ...doc.data() });
        });
        dispatch(fetchDebt(debtListOfCustomer));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const fetchAllDebtMiddleware = () => {


  const debtCol = debtCollection;

  return (dispatch) => {
    debtCol
      .get()
      .then((res) => {
        let debtListOfCustomer = [];
        res.docs.forEach((doc) => {
          debtListOfCustomer.push({ id: doc.id, ...doc.data() });
        });
        dispatch(fetchAllDebt(debtListOfCustomer));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const addNewDebt = (data, customerId) => {
  const debtCol = debtCollection;
  const customerCol = customerCollection.doc(customerId).collection("debts");
  const debtData = {
    customerId,
    ...data,
  };
  return (dispatch) => {
    debtCol.add(debtData).then((res) => {
      // const idOfDebts=[]
      // idOfDebts.push(res.id)
      customerCol.add({debtId:res.id})
      console.log("ADD NEW DAEBT RESPONSE", res.id);
      dispatch(addDebt(debtData));
    });
  };
};

export { fetchDebtById, addNewDebt, fetchAllDebtMiddleware };
// dispatch(addDebt({ id: res.id, ...data }))
