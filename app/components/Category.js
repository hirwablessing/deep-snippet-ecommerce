import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";
import CustomText from "./CustomText";

export default function Category() {
  const [changeCategoryBg, setChangeCategoryBg] = useState(false);
  const onPressTitle = () => {
    console.log(changeCategoryBg);
    setChangeCategoryBg(!changeCategoryBg);
    console.log(changeCategoryBg);
  };

  const styles = StyleSheet.create({
    categoryLabels: {
      backgroundColor: changeCategoryBg ? colors.secondary : "white",
      borderRadius: 50,
      padding: 18,
      height: 80,
      width: 80,
      justifyContent: "center",
      alignItems: "center",
      color: changeCategoryBg ? "white" : "#B3B3C3",
    },
  });

  return (
    <View style={{ marginLeft: 20 }}>
      <>
        <View>
          <TouchableWithoutFeedback onPress={onPressTitle}>
            <Feather
              name="smartphone"
              size={40}
              style={styles.categoryLabels}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={{ alignSelf: "center" }}>
          <CustomText textContent="Phone" textMarginVertical={10} />
        </View>
      </>
    </View>
  );
}
