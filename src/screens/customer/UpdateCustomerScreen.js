import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { inputView, Colors } from "../../styles/style";
import { store } from "../../store/index";
import { addNewCustomer } from "../../store/middleware/middleware";
import { useDispatch } from "react-redux";
import CustomerInfoForm from "../../component/CustomerInfoForm";
import { updateCustomerById } from "../../store/middleware/middleware";

const UpdateCustomerScreen = ({ navigation,route }) => {
  const customerData = route.params;
  
  console.log(customerData.name)
  return (
    <CustomerInfoForm
      buttonTitle="Güncelle"
      onButtonClick={updateCustomerById}
      customerData={customerData}
      navigation={navigation}
      
    />
  );
};

export default UpdateCustomerScreen;
