import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import colors from "../config/colors";

export default function CustomButton({
  ourbgColor,
  buttonMarginBottom,
  buttonPadding,
  buttonWidth,
  buttonBorderWidth,
  buttonRadius,
  title,
  type,
}) {
  useFonts({
    Inter_900Black,
  });

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
      fontFamily: "Inter_900Black",
    },
  });
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonTextColor}>{title}</Text>
    </TouchableOpacity>
  );
}
