import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { MarginVertical, Colors, ListItemView } from "../styles/style";
import { Customers } from "../database/Customer";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";

const db = firebase.firestore();

const findCustomerById = (id, callback) => {};

const CustomerTotalDebt = ({ id, callback }) => {
  return (
    <>
      <Text style={styles.columnView}>test</Text>
    </>
  );
};

export const CustomerNameList = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(customer) => customer.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("CustomerDetails",{
                customerId:item.id,
                name:item.name,
                surname:item.surname,
                limit:item.limit
              });
            }}
            style={styles.mainView}
          >
            <Text style={styles.columnView}>
              {item.name} {item.surname}{" "}
            </Text>
            <CustomerTotalDebt id={item.id} />
            <Text style={styles.columnView}>{item.limit} </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    marginHorizontal: 1,
  },
  columnView: {
    flex: 1,
    textAlign: "left",
    padding: 15,
    fontSize: 24,
  },
});
