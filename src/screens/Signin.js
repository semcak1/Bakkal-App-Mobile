import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";
import { Colors, MarginVertical } from "../styles/style";
import { AuthForm } from "../component/AuthForm";
import NavigateLink from "../component/NavigateLink";

const Signin = ({ navigation }) => {
  return (
    <View>
      <View style={styles.authFormView}>
        <AuthForm
        buttonTitle='Giriş'
        buttonPress={()=>{
            console.log('sign in')
        }}
         />
      </View>
      <NavigateLink 
      linkText="Kayıt olmak için tıklayınız."
      onClickText={()=>{
        navigation.navigate('Signup')
      }}
       />
    </View>
  );
};
const styles = StyleSheet.create({
  authFormView: {
    marginTop: 100,
    marginBottom: 50,
  },
});

export default Signin;
