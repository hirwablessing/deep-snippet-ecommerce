import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function ContentTitle({ leftText, rightText, titleMargin }) {
  const styles = StyleSheet.create({
    homeHeader: {
      flexDirection: "row",
      marginTop: titleMargin,
      justifyContent: "space-between",
      margin: 20,
      marginLeft: 15,
      alignItems: "baseline",
    },
    categoryText: {
      color: colors.primary,
      fontSize: 20,
      fontWeight: "900",
    },
    viewText: {
      color: colors.secondary,
      fontSize: 15,
      fontWeight: "900",
    },
  });

  return (
    <View style={styles.homeHeader}>
      <Text style={styles.categoryText}>{leftText}</Text>

      <Text style={styles.viewText}>{rightText}</Text>
    </View>
  );
}
