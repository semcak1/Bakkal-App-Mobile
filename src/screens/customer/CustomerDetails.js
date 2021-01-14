import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
import { Colors } from "../../styles/style";
import CustomerDebtList from "../../component/CustomerDebtList";
import { useSelector, useDispatch } from "react-redux";
import { fetchDebtById } from "../../store/middleware/debtMiddleware";
import { createSelector } from "reselect";



const CustomerDetails = ({ route, navigation }) => {
  console.log("CustomDETAİLS RE RENDER EDİLDİ.");

  const customerData = route.params;

  const dispatch = useDispatch();
  const debtList = useSelector((state) =>  state.debts.debts);
  const totalDebt=useSelector(state=> state.debts.totalDebt)
  
  console.log("Müşteri ID", customerData.customerId);
  

  const memoizeDebtList = useMemo(() => debtList);

  useFocusEffect(
    useCallback(() => {
      const customerId = route.params.customerId;
      let isActive = true;
      if (isActive) {
        console.log("USE CALLBACK UPDATE EDİLDİ");
        dispatch(fetchDebtById(customerId));

      
      }
      return () => {
        console.log("Çıktım");
        isActive = false;
      };
    }, [dispatch])
  );
  return (
    <>
      <View style={styles.mainView}>
        <View style={styles.circleScreen}>
          <View style={styles.editButtonView}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Edit Customer", {
                  params: { ...customerData },
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

          <Text style={styles.totalDebtView}>{totalDebt.toFixed(2)} TL </Text>
          <Text style={styles.textView}>
            {customerData.name}
            {""} {customerData.surname}
            {""}
            {customerData.customerId}
          </Text>

          <Text style={styles.textView}>Limit : {customerData.limit} TL </Text>
        </View>
        <Text style={styles.bigRadiusView}></Text>
      </View>

      <CustomerDebtList
        navigation={navigation}
        debtList={memoizeDebtList}
        customerId={customerData.customerId}
      />
      <TouchableOpacity
        style={styles.buttonView}
        onPress={() => {
          navigation.navigate("AddDebt", {
            customerId: customerData.customerId,
          });
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

export default memo(CustomerDetails);
