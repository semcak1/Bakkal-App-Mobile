import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";
import { FlatList } from "react-native-gesture-handler";

const findCollection = (path) => {
  return firebase.firestore().collection(path);
};
export default CustomerDetails = ({ route, navigation }) => {
  const { customerId, name, surname, limit } = route.params;

  const [debts, setDebts] = useState([]);

  const debtCol = findCollection(`Customer/${customerId}/Debt`);

  const showDetails = () => {
    debtCol.onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });

      setDebts(items);
    });
  };

  useEffect(() => {
    showDetails();
    return () => {
      showDetails();
    };
  }, []);

  return (
    <>
      <Text>Test</Text>
      <Text>{customerId}</Text>
      <Text>Test</Text>
      <Text>{name} </Text>
      <Text>{surname} </Text>
      <Text>{limit} </Text>
      <Text>Test</Text>
      <FlatList
        data={debts}
        keyExtractor={(debt) => debt.id}
        renderItem={({ item }) => {
          return <Text>{item.debtPrice} </Text>;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  authFormView: {
    marginTop: 100,
    marginBottom: 50,
  },
});
