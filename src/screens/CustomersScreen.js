import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { Customers } from "../database/Customer";
import CustomerListHeader from "../component/CustomerListHeader";
import { Colors } from "../styles/style";
import { CustomerNameList } from "../component/CustomerList";
import { Ionicons } from "react-native-vector-icons";
import * as firebase from "firebase";
import  'firebase/firestore'

const db = firebase.firestore();


const getCustomers = () => {
 
  db.collection()
};

export default CustomersScreen = ({ navigation }) => {
  /*s
      FİRESTORE
      1- Müşterileri al ve ekranda göster 
  */

  return (
    <>
      <View style={styles.mainView}>
        <CustomerListHeader listName="customer" />
      </View>

      <CustomerNameList data={Customers.customers} />

      <TouchableOpacity
        style={styles.iconView}
        onPress={() => {
          navigation.navigate("Add Customer");
        }}
      >
        <Ionicons name="md-add-circle" size={64} color={Colors.accent} />
      </TouchableOpacity>
      <Button title="Firebas e gönder" onPress={() => addCustomer()} />
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 50,
  },

  nameView: {
    textAlign: "left",
    paddingLeft: 5,
    flex: 1,
  },
  iconView: {
    position: "absolute",
    bottom: 15,
    right: 35,
  },
});
