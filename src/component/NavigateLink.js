import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { withNavigation } from "@react-navigation/compat";

const NavigateLink = ({ linkText, onClickText }) => {
  return (
    <TouchableOpacity
      style={styles.bottomText}
      onPress={onClickText}
    >
      <Text>{linkText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    marginHorizontal: 20,
  },
});

export default NavigateLink;
