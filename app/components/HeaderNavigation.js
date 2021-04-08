import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

export default function HeaderNavigation({ leftText, rightText, titleMargin }) {
  return (
    <View style={styles.homeHeader}>
      <View style={styles.leftNavigationIcon}></View>

      <View style={styles.rightContent}>
        <Text style={styles.rightText}>Add address</Text>
        <View style={styles.rightNavigationIcon}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rightContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
  },
  rightText: {
    marginRight: 20,
    fontSize: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
  leftNavigationIcon: {
    height: 37,
    width: 37,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  rightNavigationIcon: {
    height: 37,
    width: 37,
    backgroundColor: colors.secondary,
    borderRadius: 10,
  },
  homeHeader: {
    flexDirection: "row",
    // marginTop: titleMargin || 10,
    marginTop: 40,
    justifyContent: "space-between",
    marginHorizontal: 40,
    // marginLeft: 15,
    alignItems: "baseline",
  },
  categoryText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  viewText: {
    color: colors.secondary,
    fontSize: 15,
    fontWeight: "300",
  },
});
