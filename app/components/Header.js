import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import CustomText from "./CustomText";

export default function Header({ leftText, rightText, titleMargin }) {
  const styles = StyleSheet.create({
    homeHeader: {
      flexDirection: "row",
      marginTop: titleMargin || 10,
      justifyContent: "space-between",
      margin: 20,
      marginLeft: 15,
      alignItems: "baseline",
    },
    viewText: {
      color: colors.secondary,
      fontSize: 15,
      fontWeight: "300",
    },
  });

  return (
    <View style={styles.homeHeader}>
      {/* <Text style={styles.categoryText}>{leftText}</Text> */}

      <CustomText
        textContent={leftText}
        textColor={colors.primary}
        textWeight={"bold"}
        textSize={20}
      />

      <CustomText
        textContent={rightText}
        textColor={colors.secondary}
        textWeight={"300"}
        textSize={15}
      />
    </View>
  );
}
