import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";
import { inputView, Colors } from "../styles/style";
import { store } from "../store/index";
import { addNewCustomer } from "../middleware/middleware";
import { useDispatch } from "react-redux";


  
  
const AddCustomerScreen = ({navigation}) => {

  const dispatch = useDispatch();
  //STATE
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [limit, setLimit] = useState(null);
  const [telephone, setTelephone] = useState("");

  //FİREBASE
  const db = firebase.firestore().collection("Customer");

  const addCustomerToFirebase = (data) => {
    dispatch(addNewCustomer(data))
  };

  // const addFormToFirebase = (data) => {
  //   db.add(data)
  //     .then((a) => console.log("Başarıyla kaydedildi", a.id))
  //     .catch((err) => console.log(err.message));
  // };

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
        value={limit}
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
        onPress={()=>{
          navigation.navigate('Customer List')
        }}
        title="İptal" buttonStyle={styles.cancelButtonView} />
        <Button
          onPress={() => {
            
            addCustomerToFirebase({
              name,
              surname,
              limit,
              telephone,
            })
            navigation.navigate('Customer List')
          }}
          title="Ekle"
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



export default AddCustomerScreen;
