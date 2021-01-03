import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { inputView, Colors } from "../../styles/style";
import { store } from "../../store/index";

import { addNewCustomer } from "../../store/middleware/middleware";

import { addNewCustomer } from "../../middleware/middleware";

import { useDispatch } from "react-redux";
import CustomerInfoForm from "../../component/CustomerInfoForm";

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
  
});

export default AddCustomerScreen;
