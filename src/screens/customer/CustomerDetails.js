import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
import { Colors } from "../../styles/style";
import CustomerDebtList from "../../component/CustomerDebtList";

const findCollection = (path) => {
  return firebase.firestore().collection(path);
};
export default CustomerDetails = ({ route, navigation }) => {
  const customerData = route.params;

  const [totalDebt, setTotalDebt] = useState(0);
  const debtCol = findCollection(`Customer/${customerData.customerId}/Debt`);

  const calculateTotalDebt = () => {
    let total = 0;
    debtCol.onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        const { debtPrice } = doc.data();
        total = debtPrice + total;
      });
      setTotalDebt(total.toFixed(2));
      console.log(total);
    });
  };

  useEffect(() => {
    // showDetails();
    calculateTotalDebt();
  }, []);

  return (
    <>
      <View style={styles.mainView}>
        <View style={styles.circleScreen}>
          <View style={styles.editButtonView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Edit Customer", {
                  ...customerData,
                });
              }}
              type="clear"
            >
              <MaterialCommunityIcons
                name="account-edit"
                size={60}
                color={Colors.primary}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.totalDebtView}>{totalDebt} TL </Text>
          <Text style={styles.textView}>
            {customerData.name}
            {""} {customerData.surname}
          </Text>

          <Text style={styles.textView}>Limit : {customerData.limit} TL </Text>
        </View>
        <Text style={styles.bigRadiusView}></Text>
      </View>

      <CustomerDebtList customerId={customerData.customerId} />
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => {
          navigation.navigate("AddDebt");
        }}
      >
        <Ionicons name="md-add-circle" size={64} color={Colors.primary} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: "center",
  },
  authFormView: {
    marginTop: 100,
    marginBottom: 50,
  },

  circleScreen: {
    borderWidth: 3,
    borderColor: "white",
    height: 250,
    width: 250,
    borderRadius: 250 / 2,
    backgroundColor: "rgba(52,100,156,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  totalDebtView: {
    fontSize: 48,
    color: "white",
  },
  textView: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },

  bigRadiusView: {
    borderWidth: 1,
    borderColor: "white",
    height: 1500,
    width: 1500,
    borderRadius: 1500 / 2,
    position: "absolute",
    top: 150,
    backgroundColor: Colors.accent,
    zIndex: -1,
  },
  buttonView: {
    shadowOffset: { width: 10 },
    shadowOpacity: 1,
    shadowColor: "black",

    position: "absolute",
    bottom: 30,
    right: 50,
    elevation: 100,
  },
  editButtonView: {
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    width: 55,
    borderRadius: 55 / 2,

    backgroundColor: "rgba(255,255,255,0.8)",

    position: "absolute",
    right: -5,
    bottom: 20,
  },
});
