import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CustomText({
  textContent,
  textColor,
  textWeight,
  textHeight,
  textSize,
  textMarginHorizontal,
  textMarginVertical,
  textWidth,
}) {
  const styles = StyleSheet.create({
    text__customStyles: {
      color: textColor,
      fontWeight: textWeight,
      lineHeight: textHeight,
      fontSize: textSize,
      marginHorizontal: textMarginHorizontal,
      marginVertical: textMarginVertical,
      width: textWidth,
    },
  });

  return (
    <View>
      <Text style={styles.text__customStyles}>{textContent}</Text>
    </View>
  );
}
