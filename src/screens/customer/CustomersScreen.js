import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Customers } from "../../database/Customer";
import CustomerListHeader from "../../component/CustomerListHeader";
import { Colors } from "../../styles/style";
import { CustomerNameList } from "../../component/CustomerList";
import { Ionicons } from "react-native-vector-icons";
// import * as firebase from "firebase";
import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { getCustomers } from "../../store/middleware/middleware";

const collection = firebase.firestore().collection("Customer");

const CustomersScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const  customers  = useSelector((state) => state.customers);
  const [isLoading, setisLoading] = useState(false)
 const [data, setData] = useState(null)
  // const [customer, setCustomer] = useState({});

  // const [customers, setCustomers] = useState([]);

  // const getCustomers = () => {
  //   collection.onSnapshot((snapshot) => {
  //     const items = [];

  //     snapshot.forEach((doc) => {
  //       items.push({ id: doc.id, ...doc.data() });
  //     });

  //     setCustomers(items);
  //   });
  // };

  console.log('comPONENT')
 
  return (
    <>
      <View style={styles.mainView}>
        <CustomerListHeader listName="customer" />
      </View>

      <CustomerNameList data={customers} navigation={navigation} />

      <TouchableOpacity
        style={styles.iconView}
        onPress={() => {
          navigation.navigate("Add Customer");
        }}
      >
        <Ionicons name="md-add-circle" size={64} color={Colors.accent} />
      </TouchableOpacity>
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

export default CustomersScreen;
