import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { IncomeExpenses } from "../../database/IncomeExpensesDb";

export default IncomesExpensesList = () => {
  return (
    <FlatList
      data={IncomeExpenses.expenses}
      keyExtractor={(item) => item.expensesCategoryID}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.expensesCategoryName}</Text>
            <TotalExpenses categoryID={item.expensesCategoryID} />
          </View>
        );
      }}
    />
  );
};

const TotalExpenses = ({ categoryID }) => {
  const totalExpense = calculateTotalExpensesOfMainCategory(categoryID);
  return <Text>{totalExpense} </Text>;
};

const filterMainCategory = (categoryID) => {
  const mainCatgory = IncomeExpenses.expenses.filter(
    (main) => main.expensesCategoryID === categoryID
  );

  return mainCatgory;
};

const findSubCategoryExpenseList = (categoryID, subCategoryID) => {
  const mainCategory = filterMainCategory(categoryID);
  const filterSubCategoryExpenseList = mainCategory.map((sub) =>
    sub.expensesSubCategories
      .filter((sub) => sub.subCategoryId === subCategoryID)
      .map((sub) => sub.expenses)
  );

  return filterSubCategoryExpenseList;
};

const calculateTotalExpensesOfAnySubCategory = (categoryID, subCategoryID) => {
  let totalExpense = 0;
  const subCategory = findSubCategoryExpenseList(categoryID, subCategoryID);
  subCategory.map((res) =>
    res.map((res) =>
      res.map((res) => (totalExpense = totalExpense + res.expensePrice))
    )
  );

  return totalExpense;
};

const calculateTotalExpensesOfMainCategory = (categoryID) => {
  let totalExpense = 0;
  const mainCategory = filterMainCategory(categoryID);
  mainCategory.map((res) =>
    res.expensesSubCategories.map(
      (res) =>
        (totalExpense =
          totalExpense +
          calculateTotalExpensesOfAnySubCategory(categoryID, res.subCategoryId))
    )
  );
  return totalExpense;
};



const styles = StyleSheet.create({
  authFormView: {
    marginTop: 100,
    marginBottom: 50,
  },
});
