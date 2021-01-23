import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
  LogBox,
} from "react-native";
import { Input, Button } from "react-native-elements";
import { MarginVertical, Colors, ListItemView } from "../styles/style";
import { Customers } from "../database/Customer";
import { firebase } from "../firebase/firebase";
import "firebase/firestore";
import { SwipeListView } from "react-native-swipe-list-view";
import { getCustomers } from "../store/middleware/middleware";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomerById } from "../store/middleware/middleware";
import {
  fetchDebtById,
  fetchAllDebtMiddleware,
} from "../store/middleware/debtMiddleware";
import { fetchAllDebt, fetchDebt } from "../store/actions/debt-actions";

const buttonWidth = 90;

//LOGİC

export const CustomerNameList = ({ data, navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const debts = useSelector((state) => state.debts.allDebts);
  console.log("CHİLD -CUSTOMER NAME LİST- ALLL DEBTS LİSTS", debts);

  const calculateTotalDebt = (customerId, debtList) => {
    let totalDebt = debtList
      .filter((debt) => debt.customerId === customerId)
      .reduce((acc, currentValue) => acc + currentValue.price, 0);
    return totalDebt;
  };

  const dispatch = useDispatch();

  const handleDanger = (item) => {
    Alert.alert(
      "SİL",
      ` ${item.name} siliniyor.`,
      [
        {
          text: "İptal",
          onPress: () => console.log("Canceled pres"),
          style: "cancel",
        },
        {
          text: "Sil",
          onPress: () => {
            dispatch(deleteCustomerById(item.id));
          },
          style: "destructive",
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  useEffect(() => {
    console.log("CHİLD - CustomerNameList-Use effect in içi");
    dispatch(getCustomers());
  }, [dispatch]);

  useEffect(() => {
    console.log("CHİLD - CustomerNameList-Use effect Focus çalıştı")
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(fetchAllDebtMiddleware());
    });

    return ()=>{
      console.log("CHİLD - CustomerNameList-Use effect componentten çıkıldı")
      return unsubscribe
    };
  }, [navigation]);

  return (
    <SwipeListView
      data={data}
      keyExtractor={(customer) => customer.id}
      renderItem={({ item }) => {
        return (
          <TouchableHighlight
            onPress={() => {
              navigation.navigate("DetailOfCustomer", {
                screen: "CustomerDebtsPayments",
                params: {
                  customerId: item.id,
                  name: item.name,
                  surname: item.surname,
                  limit: item.limit,
                  telephone: item.telephone,
                },
              });
            }}
          >
            <View style={styles.mainView}>
              <Text style={styles.columnView}>
                {item.name} {item.surname}{" "}
              </Text>
              <Text style={styles.columnView}>
                {calculateTotalDebt(item.id, debts)}
              </Text>
              <Text style={styles.columnView}>{item.limit}</Text>
            </View>
          </TouchableHighlight>
        );
      }}
      renderHiddenItem={({ item }) => {
        return (
          <View style={styles.rowBack}>
            <TouchableOpacity
              style={styles.rightButton}
              onPress={() => handleDanger(item)}
            >
              <Text style={styles.backText}>SİL</Text>
            </TouchableOpacity>
          </View>
        );
      }}
      rightOpenValue={-buttonWidth}
    />
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "rgba(240,222,222,1)",
    backgroundColor: "rgba(245,245,245,1)",
    marginHorizontal: 1,
    height: 100,
  },
  columnView: {
    flex: 1,
    textAlign: "left",
    padding: 15,
    fontSize: 24,
  },
  rowBack: {
    flex: 1,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  backText: {
    fontWeight: "bold",
    color: "white",
  },
  rightButton: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    top: 0,
    width: buttonWidth,
    backgroundColor: Colors.accent,
  },
});
