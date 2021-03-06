import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

export default function CustomButton({
  ourbgColor,
  buttonMarginBottom,
  buttonPadding,
  buttonWidth,
  buttonBorderWidth,
  buttonRadius,
  //   buttonBorderColor,
  title,
  type,
}) {
  const styles = StyleSheet.create({
    button: {
      //   flex: 1,
      backgroundColor: ourbgColor,
      marginBottom: buttonMarginBottom,
      padding: buttonPadding,
      width: buttonWidth,
      borderWidth: buttonBorderWidth,
      borderRadius: buttonRadius,
      borderColor: type ? colors[type] : "transparent",
    },

    buttonTextColor: {
      color: "#fff",
      alignSelf: "center",
      fontSize: 17,
    },
  });
  return (
    <View style={styles.button}>
      <Text style={styles.buttonTextColor}>{title}</Text>
    </View>
  );
}
