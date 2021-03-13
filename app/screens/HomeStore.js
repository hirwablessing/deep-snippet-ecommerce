import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {} from "@expo/vector-icons";

import colors from "../config/colors";
import Category from "../components/Category";
import Search from "../components/Search";
import { Image } from "react-native";
import ContentTitle from "../components/ContentTitle";
import Product from "../components/Product";

export default function HomeStore() {
  return (
    <View style={styles.homeStore}>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <ContentTitle
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

        <ContentTitle
          leftText={"Hot sales"}
          rightText={"see more"}
          titleMargin={10}
        />

        <View>
          <Image
            source={require("../assets/iphone1.png")}
            style={styles.storeLogo}
          />
        </View>

        <ContentTitle
          leftText={"Best Seller"}
          rightText={"see more"}
          titleMargin={15}
        />
        <View style={{ flex: 1, flexDirection: "row" }}>
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
