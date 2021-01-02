import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Colors } from "../styles/style";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";

const findCollection = (path) => {
  return firebase.firestore().collection(path);
};

const CustomerDebtList = ({ customerId }) => {
  const debtCol = findCollection(`Customer/${customerId}/Debt`);
  const [debts, setDebts] = useState([]);
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
  }, []);
  return (
    <FlatList
      style={styles.flatListView}
      data={debts}
      keyExtractor={(debt) => debt.id}
      renderItem={({ item }) => {
        return (
          <>
            <View style={styles.debtView}>
              <View style={styles.detbItem}>
                <Text style={styles.debtTextView}>BORÇ</Text>
                <Text style={{ ...styles.debtTextView, fontSize: 24 }}>
                  {item.debtPrice} TL{" "}
                </Text>
              </View>

              <View style={styles.detbItem}>
                <Text style={styles.debtTextView}>ALINANLAR</Text>
                <Text style={{ fontSize: 16, color: Colors.primary }}>
                  {item.products}{" "}
                </Text>
              </View>
            </View>
          </>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  debtView: {
    margin: 10,
    padding: 5,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: 15, height: 0 },
    shadowOpacity: 1,
    elevation: 10,
    backgroundColor: "white",
  },
  detbItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  debtTextView: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: "bold",
    flexShrink: 1,
  },
});

export default CustomerDebtList;
