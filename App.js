import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import { RootNavigator } from "./src/navigation/navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { firebaseConfig } from "./src/firebase/firebase";
import * as firebase from "firebase";
import { Provider } from "react-redux";
import store from './src/store/index'

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 50,
  },
});
