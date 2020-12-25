import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";
import { Colors, MarginVertical } from "../styles/style";
import { AuthForm } from "../component/AuthForm";
import NavigateLink from "../component/NavigateLink";

const Signup = ({ navigation }) => {
  return (
    <>
      <View style={styles.authFormView}>
        <AuthForm 
        buttonTitle="Kayıt ol"
        buttonPress={()=>{
            console.log('sign up')
        }}
         />
      </View>
      <NavigateLink
        linkText="Giriş tapmak için tıklayınız."
        onClickText={() => {
          navigation.navigate("Signin");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  authFormView: {
    marginTop: 100,
    marginBottom: 50,
  },
});
export default Signup;
