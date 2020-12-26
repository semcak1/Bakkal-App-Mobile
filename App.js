import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Signin from "./src/screens/Signin";
import Signup from "./src/screens/Signup";
import { RootNavigator } from "./src/navigation/navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { firebaseConfig } from "./src/firebase/firebase";
import * as firebase from "firebase";

export default function App() {
 

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 50,
  },
});
