import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";
import CustomText from "./CustomText";

export default function HeaderNavigation({ navigationHeaderTitle, rightIcon }) {
  return (
    <View style={styles.homeHeader}>
      <View style={styles.leftNavigationIcon}>
        <AntDesign
          name="left"
          size={17}
          color="white"
          style={{
            alignSelf: "center",
          }}
        />
      </View>

      <View style={styles.rightContent}>
        <Text style={styles.rightText}>{navigationHeaderTitle}</Text>
        <View style={styles.rightNavigationIcon}>{rightIcon}</View>
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
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  rightNavigationIcon: {
    height: 37,
    width: 37,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
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
