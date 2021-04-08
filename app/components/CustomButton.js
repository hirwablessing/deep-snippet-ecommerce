import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

export default function CustomButton({
  bgColor,
  buttonMarginBottom,
  buttonPadding,
  buttonWidth,
  buttonBorderWidth,
  buttonRadius,
  title,
  buttonBorderColor,
  btnTextColor,
}) {
  const styles = StyleSheet.create({
    button: {
      //   flex: 1,
      backgroundColor: bgColor,
      marginBottom: buttonMarginBottom,
      padding: buttonPadding,
      width: buttonWidth,
      borderWidth: buttonBorderWidth,
      borderRadius: buttonRadius,
      borderColor: buttonBorderColor,
      // ? colors[buttonBorderColor]
      // : "transparent",
    },

    buttonTextColor: {
      color: btnTextColor ? btnTextColor : colors.white,
      alignSelf: "center",
      fontSize: 17,
      // textTransform: "capitalize",
    },
  });
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonTextColor}>{title}</Text>
    </TouchableOpacity>
  );
}
