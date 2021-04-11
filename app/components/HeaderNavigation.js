import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "./CustomButton";

export default function HeaderNavigation({ navigationHeaderTitle, rightIcon }) {
  return (
    <View style={styles.homeHeader}>
      <CustomButton
        bgColor={colors.primary}
        btnTextColor={colors.black}
        buttonWidth={37}
        buttonHeight={37}
        buttonRadius={10}
        title={<AntDesign name="left" size={17} color="white" />}
        buttonBorderColor={"transparent"}
      />

      <View style={styles.rightContent}>
        <Text style={styles.rightText}>{navigationHeaderTitle}</Text>
        <CustomButton
          bgColor={colors.secondary}
          btnTextColor={colors.black}
          buttonWidth={37}
          buttonHeight={37}
          buttonRadius={10}
          title={rightIcon}
          buttonBorderColor={"transparent"}
        />
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
  homeHeader: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
    marginHorizontal: 40,
    alignItems: "baseline",
  },
});
