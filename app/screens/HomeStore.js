import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {} from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";

export default function HomeStore() {
  return (
    <View style={styles.homeStore}>
      <View style={styles.homeHeader}>
        <Text style={styles.categoryText}>Select Category</Text>

        <Text style={styles.viewText}>View all</Text>
      </View>

      <View>
        <Feather
          name="smartphone"
          size={40}
          color="#B3B3C3"
          style={styles.categoryLabels}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeStore: {
    flex: 1,
    backgroundColor: colors.mainScreen,
  },
  homeHeader: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 30,
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

  categoryLabels: {
    backgroundColor: colors.secondary,
    borderRadius: 50,
    padding: 18,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
});
