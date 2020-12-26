import React,{useState} from "react";
import { View, StyleSheet, Text } from "react-native";

import { Colors } from "../styles/style";

export default CustomerListHeader = ({ listName }) => {
  //Başlık
  


  
  //Etiketler  Ad Soyad   Borç miktarı    borç Limit
  // Müşteri Datalaroı
  //sağ alltta ekleme butonu
  return (
    <>
      <View style={styles.tableTitle}>
        <Text style={styles.firstTextView}>Ad - Soyad </Text>
        {listName === "customer" ? (
          <Text style={styles.textView}>Borç</Text>
        ) : null}
        <Text style={styles.textView}>Limit</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  authFormView: {
    marginTop: 100,
    marginBottom: 50,
  },
  tableTitle: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "white",
  },
  textView: {
    flex: 1,
    borderLeftWidth: 1,
    borderColor: "white",
    fontSize: 18,

    color: "white",
    paddingLeft: 5,
    paddingVertical: 5,
    textAlign: "left",
    backgroundColor: Colors.primary,
  },
  firstTextView: {
    flex: 1,
    borderLeftWidth: 0,
    borderColor: "white",
    fontSize: 18,

    color: "white",
    paddingLeft: 5,
    paddingVertical: 5,
    textAlign: "left",
    backgroundColor: Colors.primary,
  },
});
