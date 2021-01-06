import React from "react";
import { View, StyleSheet } from "react-native";

export const Colors = {
  success: "#35648C",
  accent: "#FC3C3C",
  warning: "#F8B500",
  primary: "#393E46",
};

export const inputView = {
  height: 44,
  marginBottom: 10,
};

export const buttonView= {
  width:150
}

export const MarginVertical = () => {
  return <View style={styles.marginVertical}></View>;
};

export const ListItemView = ({ children }) => {
  return <View style={styles.listItemView}>{children}</View>;
};

const styles = StyleSheet.create({
  marginVertical: {
    marginVertical: 15,
  },
  listItemView: {
    borderWidth: 1,
    marginTop: 5,
    fontSize: 32,
  },
});
