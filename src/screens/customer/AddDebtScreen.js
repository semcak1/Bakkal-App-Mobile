import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { inputView, Colors } from "../../styles/style";
import { store } from "../../store/index";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons, Entypo, Ionicons } from "react-native-vector-icons";
import { useDispatch } from "react-redux";
import { addNewDebt } from "../../store/middleware/debtMiddleware";
const AddDebtScreen = ({ navigation, route }) => {
  const { customerId } = route.params;
  const [mode, setmode] = useState("");
  const [show, setshow] = useState(null);
  const [price, setprice] = useState('');
  const [products, setproducts] = useState("");
  const [date, setdate] = useState(new Date());
  const dispatch = useDispatch();

 
 
  const onChange = (event, selectedDate) => {
    setshow(false);

    const currentDate = selectedDate || date;
    setdate(currentDate);
  };

  const showMode = (currentMode) => {
    setshow(true);
    setmode(currentMode);
  };

  const openDateTimePicker = () => {
    showMode("date");
  };

  const addDebtToFirebase = (data) => {
    dispatch(addNewDebt(data, customerId));
  };

  return (
    <>
      <View style={styles.formView}>
        <Input
          label="Veresiye Miktarı"
          style={styles.inputView}
          value={price}
          onChangeText={(text) => {
            setprice(text);
          }}
        />

        <Input
         
          label="Alınanlar"
          style={styles.inputView}
          value={products}
          onChangeText={(text) => {
            setproducts(text);
          }}
        />

        <Input
          disabled={true}
          label="Tarih"
          placeholder="Tarih"
          style={styles.inputView}
          value={date.toDateString()}
          onChangeText={(text) => {
            setdate(text);
          }}
          rightIcon={
            <Entypo
              onPress={openDateTimePicker}
              name="calendar"
              size={24}
              color={Colors.accent}
            />
          }
        />
        <View>
          {show ? (
            <DateTimePicker
              is24Hour={true}
              mode={mode}
              value={date}
              display="default"
              onChange={onChange}
            />
          ) : null}
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            buttonStyle={styles.cancelButtonView}
            title="İptal"
          />
          <Button
            onPress={() => {
              addDebtToFirebase({
                price: Number(price),
                products,
                debtDate: date,
              });
              navigation.navigate('CustomerDebtsPayments');
              setprice('')
              setproducts('')
              
            }}
            buttonStyle={styles.saveButtonView}
            title="Kaydet"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formView: {
    marginTop: 50,
  },
  inputView: {},
  cancelButtonView: {
    width: 150,
    backgroundColor: Colors.primary,
  },
  saveButtonView: {
    width: 150,
    backgroundColor: Colors.accent,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default AddDebtScreen;
