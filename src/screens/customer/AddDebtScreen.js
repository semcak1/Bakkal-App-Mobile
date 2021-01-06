import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";
import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { inputView, Colors } from "../../styles/style";
import { store } from "../../store/index";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons, Entypo, Ionicons } from "react-native-vector-icons";

const AddDebtScreen = ({ navigation }) => {
  const [mode, setmode] = useState("");
  const [date, setdate] = useState(new Date());
  const [show, setshow] = useState(null);

  console.log("RENDER !!!!!!!!!!!!");
  console.log(show);
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

  return (
    <>
      <View style={styles.formView}>
        <Input
          autoCapitalize={false}
          autoCorrect={false}
          label="Veresiye Miktarı"
          style={styles.inputView}
        />

        <Input
          autoCapitalize={false}
          autoCorrect={false}
          label="Alınanlar"
          style={styles.inputView}
        />

        <Input
          disabled={true}
          label="Tarih"
          autoCapitalize={false}
          autoCorrect={false}
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
          <Button buttonStyle={styles.cancelButtonView} title="İptal" />
          <Button buttonStyle={styles.saveButtonView} title="Kaydet" />
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
