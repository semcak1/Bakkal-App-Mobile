import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
  useRef,
} from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { firebase } from "../../firebase/firebase";
import "firebase/firestore";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
import { Colors } from "../../styles/style";
import CustomerDebtList from "../../component/CustomerDebtList";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchDebtById } from "../../store/middleware/debtMiddleware";
import { createSelector } from "reselect";
import { paramsContext } from "../../context/navigationContext";
const CustomerDebtScreen = ({navigation}) => {
  const customerData = React.useContext(paramsContext);
  console.log("DEBT SCREEN ROUTE", customerData);
  console.log("CustomDETAİLS RE RENDER EDİLDİ.");

  // const customerData = route.params;

  const dispatch = useDispatch();

  const debtState = useSelector((state) => state.debts);
  console.log("CUSTOMER DETAİLS DEBT STATE", debtState);
  const data = useRef(null);
  const totalDebt = useRef(null);
  data.current = debtState.debts.filter(
    (debt) => debt.customerId === customerData.customerId
  );
  totalDebt.current = debtState.totalDebt;

  useFocusEffect(
    useCallback(() => {
      const customerId = customerData.customerId;
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

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

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

          <Text style={styles.totalDebtView}>
            {totalDebt.current.toFixed(2)} TL{" "}
          </Text>
          <Text style={styles.textView}>
            {customerData.name}
            {""} {customerData.surname}
          </Text>

          <Text style={styles.textView}>Limit : {customerData.limit} TL </Text>
        </View>
        <Text style={styles.bigRadiusView}></Text>
      </View>

      <CustomerDebtList
        navigation={navigation}
        debtList={data.current}
        // debtList={debtList}
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

export default memo(CustomerDebtScreen);
