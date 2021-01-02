//Logic ve ASYNC Fonk. yazılacak.

import React from "react";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";
import {
  fetchCustomers,
  addCustomer,
  deleteCustomer,
} from "../actions/actions";

const customersList = firebase.firestore().collection("Customer");

const getCustomers = () => {
  return (dispatch) => {
    customersList
      .get()
      .then((res) => {
        let data = [];
        res.docs.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        return dispatch(fetchCustomers(data));
      })
      .catch((err) => {
        console.log("ERRORO");
        console.log(err);
        return dispatch({
          type: "FETCH_CUSTOMERS_FAIL",
          payload: err,
        });
      });
  };
};

const addNewCustomer = (data) => {
  return (dispatch) => {
    customersList
      .add(data)
      .then((res) => dispatch(addCustomer({ id: res.id, ...data })))
      .catch((err) => console.log(err));
  };
};

const deleteCustomerById = (id) => {
  return (dispatch) => {
    customersList
      .doc(id)
      .delete()
      .then((res) => dispatch(deleteCustomer(id)))
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export { getCustomers, addNewCustomer,deleteCustomerById };
