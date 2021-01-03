import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import IncomesExpensesList from "../../component/IncomeExpensesComponent/IncomeExpensesList";

export default IncomesExpensesScreen = () => {
  
  return (
    <>
 
      <IncomesExpensesList />
    </>
  );
};

const styles = StyleSheet.create({
  authFormView: {
    marginTop: 100,
    marginBottom: 50,
  },
});
