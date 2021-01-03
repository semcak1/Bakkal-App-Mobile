import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { inputView, Colors } from "../styles/style";

const CustomerInfoForm = ({
  onButtonClick,
  navigation,
  buttonTitle,
  customerData,
}) => {
  const [name, setName] = useState(customerData.name);
  const [surname, setSurname] = useState(customerData.surname);
  const [limit, setLimit] = useState(!limit ? 0 : customerData.limit);
  const [telephone, setTelephone] = useState(customerData.telephone);
  console.log(customerData);
  return (
    <ScrollView>
      <Input
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
        style={styles.inputView}
        placeholder="Ad"
      ></Input>

      <Input
        value={surname}
        onChangeText={(text) => {
          setSurname(text);
        }}
        style={styles.inputView}
        placeholder="Soyad"
      ></Input>
      <Input
        value={limit.toString()}
        onChangeText={(text) => {
          setLimit(text);
        }}
        style={styles.inputView}
        placeholder="Borç Limiti"
      ></Input>
      <Input
        value={telephone}
        onChangeText={(text) => {
          setTelephone(text);
        }}
        style={styles.inputView}
        placeholder="Telefon"
      ></Input>
      <View style={styles.buttonGroup}>
        <Button
          onPress={() => {
            navigation.goBack();
          }}
          title="İptal"
          buttonStyle={styles.cancelButtonView}
        />
        <Button
          onPress={() => {
            onButtonClick({
              name,
              surname,
              limit,
              telephone,
            });
            navigation.navigate("Customer List");
          }}
          title={buttonTitle}
          buttonStyle={styles.succesButtonView}
        />
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

export default CustomerInfoForm;
