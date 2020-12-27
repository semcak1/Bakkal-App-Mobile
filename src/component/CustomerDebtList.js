import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import {Colors} from '../styles/style'


export default CustomerDebtList = ({debts}) => {
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
})