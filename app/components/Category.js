import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";

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
    categoryName: {
      marginTop: 10,
      alignSelf: "center",
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
        <View>
          <Text style={styles.categoryName}>Phone</Text>
        </View>
      </>
    </View>
  );
}
