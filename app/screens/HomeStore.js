import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Image } from "react-native";

import colors from "../config/colors";
import Category from "../components/Category";
import Search from "../components/Search";
import Header from "../components/Header";
import Product from "../components/Product";
import { EvilIcons } from "@expo/vector-icons";

export default function HomeStore() {
  return (
    <View style={styles.homeStore}>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Header
          leftText={"Select Category"}
          rightText={"View all"}
          titleMargin={50}
        />

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

        <Header
          leftText={"Hot sales"}
          rightText={"see more"}
          titleMargin={10}
        />

        <View>
          <Image
            source={require("../assets/iphone1.png")}
            style={styles.homeStoreImg}
          />
        </View>

        <Header
          leftText={"Best Seller"}
          rightText={"see more"}
          titleMargin={15}
        />
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          <Product />
          <Product />
          <Product />
          <Product />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeStore: {
    flex: 1,
    backgroundColor: colors.mainScreen,
  },

  categories: {
    // flexDirection: "row",
    // flex: 1,
    marginLeft: 30,
  },

  categoryLabels: {
    backgroundColor: colors.white,
    borderRadius: 50,
    padding: 18,
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
  },
  homeStoreImg: {
    width: "95%",
    height: 182,
    marginLeft: 10,
  },
});
