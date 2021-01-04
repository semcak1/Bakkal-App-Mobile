import React from "react";
import { StyleSheet } from "react-native";

import { addNewCustomer } from "../../store/middleware/middleware";


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

const styles = StyleSheet.create({});

export default AddCustomerScreen;
