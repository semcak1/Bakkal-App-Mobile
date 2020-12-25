import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { MarginVertical, Colors } from "../styles/style";

export const AuthForm = ({buttonTitle,buttonPress}) => {
  return (
    <>
      <Input style={styles.input} placeholder="Telefon" />
      <MarginVertical />
      <Input placeholder="Şifre" />
      <Button
        title={buttonTitle}
        onPress={buttonPress}
        buttonStyle={styles.buttonStyle}
        titleStyle={{ color: "white" }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "blue",
  },
  buttonStyle: {
    width: 150,
    backgroundColor: Colors.primary,
    alignSelf: "center",
  },
});
