import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {} from "@expo/vector-icons";

import colors from "../config/colors";
import Category from "../components/Category";
import Search from "../components/Search";
import { Image } from "react-native";

export default function HomeStore() {
  return (
    <View style={styles.homeStore}>
      <View style={styles.homeHeader}>
        <Text style={styles.categoryText}>Select Category</Text>

        <Text style={styles.viewText}>View all</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </ScrollView>
      </View>

      <Search />

      <View style={styles.homeHeader}>
        <Text style={styles.categoryText}>Hot Sales</Text>

        <Text style={styles.viewText}>See more</Text>
      </View>

      <View>
        <Image
          style={styles.homeLogo}
          source={require("../assets/iphone1.png")}
          style={styles.storeLogo}
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
    flexDirection: "row",
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
  categories: {
    // flexDirection: "row",
    // flex: 1,
    marginLeft: 30,
  },

  categoryLabels: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 18,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
  storeLogo: {
    width: 370,
    height: 182,
    marginLeft: 10,
  },
});
