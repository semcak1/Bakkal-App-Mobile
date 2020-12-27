import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";

import { Colors } from "../styles/style";
import CustomerDebtList from "../component/CustomerDebtList";

const findCollection = (path) => {
  return firebase.firestore().collection(path);
};
export default CustomerDetails = ({ route, navigation }) => {
  const { customerId, name, surname, limit } = route.params;

  const [debts, setDebts] = useState([]);
  const [totalDebt, setTotalDebt] = useState(0);
  const debtCol = findCollection(`Customer/${customerId}/Debt`);

  const showDetails = () => {
    debtCol.onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });

      setDebts(items);
    });
  };

  const calculateTotalDebt = () => {
    let total = 0;
    debtCol.onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        const { debtPrice } = doc.data();
        total= debtPrice+total
        
      });
      setTotalDebt(total.toFixed(2));
      console.log(total)
    });

    
  };

  useEffect(() => {
    showDetails();
    calculateTotalDebt();
    return () => {
      showDetails();
      calculateTotalDebt();
    };
  }, []);

  return (
    <>
      <View style={styles.mainView}>
        <View style={styles.circleScreen}>
          <Text style={styles.totalDebtView}>{totalDebt} TL </Text>
          <Text style={styles.textView}>
            {name}
            {""} {surname}
          </Text>

          <Text style={styles.textView}>Limit : {limit} TL </Text>
        </View>
        <Text style={styles.bigRadiusView}></Text>
      </View>

      <CustomerDebtList debts={debts} />
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
});
