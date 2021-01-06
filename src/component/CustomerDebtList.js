import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Colors } from "../styles/style";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";
import { fetchDebtById } from "../store/middleware/debtMiddleware";
import { useDispatch, useSelector } from "react-redux";

const CustomerDebtList = ({ customerId }) => {
  const debtList = useSelector((state) => state.debts.debts);
  const dispatch = useDispatch();
  console.log(debtList);
  

  useEffect(() => {
   
    dispatch(fetchDebtById(customerId));
  }, []);
  return (
    <FlatList
      style={styles.flatListView}
      data={debtList}
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
