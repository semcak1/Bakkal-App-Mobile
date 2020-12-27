import React from "react";
import { View, StyleSheet,Text } from "react-native";

export default DashboardScreen = () => {
  return (
    <>
      <Text>Dashboard</Text>
      <View style={styles.shaddow}></View>
  
    </>
  );
};

const styles = StyleSheet.create({
  authFormView: {
    marginTop: 100,
    marginBottom: 50,
  },
  shaddow:{
    alignSelf:'center',
    height:100,
    width:300,
    backgroundColor:'yellow',
    shadowColor:'red',
    shadowOffset:{width:100},
    shadowOpacity:0.9,
    
    elevation:8
  }
});
