import React from "react";
import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { MarginVertical, Colors, ListItemView } from "../styles/style";
import { Customers } from "../database/Customer";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";

const db = firebase.firestore();

const findCustomerById = (id) => {
  // return Customers.customers.filter((customer) => customer.id === id);
  db.collection(`Customer/${id}/Debt`).onSnapshot((snapshot) => {
    const newDebt = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
};

// const findTotalDebtById = (id) => {
//   let totalDebt = 0;
//   const customer = findCustomerById(id);
//   customer.map((customer) =>
//     customer.debt.map((debt) => (totalDebt = debt.price + totalDebt))
//   );
//   return totalDebt;
// };

const CustomerTotalDebt = ({ id }) => {
  // const totalDebt = findTotalDebtById(id);
  const totalDebt = findCustomerById(id);
  return (
    <>
      <Text style={styles.columnView}>{totalDebt}</Text>
    </>
  );
};

export const CustomerNameList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(customer) => customer.id}
      renderItem={({ item }) => {
        return (
          <View style={styles.mainView}>
            <Text style={styles.columnView}>
              {item.name} {item.surname}{" "}
            </Text>
            <CustomerTotalDebt id={item.id} />
            <Text style={styles.columnView}>{item.limit} </Text>
          </View>
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
