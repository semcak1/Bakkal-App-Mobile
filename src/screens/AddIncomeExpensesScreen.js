import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";

import { inputView, Colors } from "../styles/style";

export default AddIncomeExpensesScreen = () => {
  return (
    <ScrollView>
      <Input style={styles.inputView} placeholder="Ana Gider Adı"></Input>

      <View style={styles.buttonGroup}>
        <Button title="İptal" buttonStyle={styles.cancelButtonView} />
        <Button title="Ekle" buttonStyle={styles.succesButtonView} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  authFormView: {
    marginTop: 100,
    marginBottom: 50,
  },
  inputView: {
    ...inputView,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  succesButtonView: {
    backgroundColor: Colors.accent,
    width: 150,
  },
  cancelButtonView: {
    backgroundColor: Colors.primary,
    width: 150,
  },
});
