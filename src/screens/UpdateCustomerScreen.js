import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";
import { inputView, Colors } from "../styles/style";
import { store } from "../store/index";
import { addNewCustomer } from "../middleware/middleware";
import { useDispatch } from "react-redux";


  
  
const UpdateCustomerScreen = ({navigation}) => {
    return (
        <View>
            <Text>EDit CUSTOMER</Text>
        </View>
    )
}



export default UpdateCustomerScreen;