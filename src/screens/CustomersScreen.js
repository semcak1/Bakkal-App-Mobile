import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Customers } from "../database/Customer";
import CustomerListHeader from "../component/CustomerListHeader";
import { Colors } from "../styles/style";
import { CustomerNameList } from "../component/CustomerList";
import { Ionicons } from "react-native-vector-icons";
// import * as firebase from "firebase";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";

const collection = firebase.firestore().collection('Customer')

export default CustomersScreen = ({ navigation }) => {
  // const [customer, setCustomer] = useState({});

  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    collection.onSnapshot((snapshot) => {
      const items=[] 
      
      snapshot.forEach(doc=>{
        items.push({id:doc.id,...doc.data()})
        })
        
        setCustomers(items)
      
      });
  
  };

  
useEffect(() => {
  getCustomers()
  return () => {
    // getCustomers()
  }
}, [])
  return (
    <>
      <View style={styles.mainView}>
        <CustomerListHeader listName="customer" />
      </View>

      <CustomerNameList data={customers} navigation={navigation} />

      <TouchableOpacity
        style={styles.iconView}
        onPress={() => {
          navigation.navigate("CustomerDetails");
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
