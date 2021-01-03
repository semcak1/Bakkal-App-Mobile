import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";
import { inputView, Colors } from "../styles/style";
import { store } from "../store/index";
import { addNewCustomer } from "../middleware/middleware";
import { useDispatch } from "react-redux";
import CustomerInfoForm from "../component/CustomerInfoForm";

const AddCustomerScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const addCustomerToFirebase = (data) => {
    dispatch(addNewCustomer(data));
  };

  return (
    <CustomerInfoForm
      navigation={navigation}
      onButtonClick={addCustomerToFirebase}
      buttonTitle="Kaydet"
      customerData={{ name: "", surname: "", limit: 0, telephone: "" }}
    />
  );
};

const styles = StyleSheet.create({
  authFormView: {
    marginTop: 100,
    marginBottom: 50,
  },
  inputView: {
    ...inputView,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  succesButtonView: {
    backgroundColor: Colors.accent,
    width: 150,
  },
  cancelButtonView: {
    backgroundColor: Colors.primary,
    width: 150,
  },
});

export default AddCustomerScreen;
