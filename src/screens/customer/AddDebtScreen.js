import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { inputView, Colors } from "../../styles/style";
import { store } from "../../store/index";

  
  
const AddDebtScreen = ({navigation}) => {
    return(
        <Text>Add Debt</Text>
    )
}

export default AddDebtScreen