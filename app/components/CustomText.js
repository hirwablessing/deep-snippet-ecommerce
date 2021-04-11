import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CustomText({
  textContent,
  textColor,
  textWeight,
  textSize,
  textMarginHorizontal,
  textMarginVertical,
}) {
  const styles = StyleSheet.create({
    text__customStyles: {
      color: textColor,
      fontWeight: textWeight,
      fontSize: textSize,
      marginHorizontal: textMarginHorizontal,
      marginVertical: textMarginVertical,
    },
  });

  return (
    <View>
      <Text style={styles.text__customStyles}>{textContent}</Text>
    </View>
  );
}
