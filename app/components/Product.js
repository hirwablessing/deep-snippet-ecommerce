import React from "react";
import { Dimensions } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import { EvilIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2.3;

export default function Product() {
  return (
    <View style={styles.productCard}>
      <View style={styles.likeTag}>
        <EvilIcons name="heart" size={30} color="#FF6E4E" />
      </View>
      <Image
        source={require("../assets/image.png")}
        style={styles.productImage}
      />

      <View style={styles.productDetails}>
        <View style={styles.productMenus}>
          <Text style={styles.productPrice}>$1,047</Text>
          <Text style={styles.productDescription}>
            Samsung Galaxy s20 Ultra
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    width: cardWidth,
    height: 300, //350
    elevation: 2,
    borderRadius: 10,
    backgroundColor: "white",
    marginLeft: 20,
  },
  productImage: {
    width: "100%",
    height: 190,
    marginTop: 15,
  },
  likeTag: {
    backgroundColor: "white",
    elevation: 1,
    borderRadius: 50,
    height: 40,
    width: 40,
    position: "absolute",
    zIndex: 1,
    right: 0,
    top: 5,
    right: 5, //10
    justifyContent: "center",
    alignItems: "center",
  },

  productDetails: {
    height: 100,
    borderRadius: 10,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    paddingLeft: 20,
    width: "100%",
  },
  productMenus: {
    marginTop: 20, //20
    flexDirection: "column",
    lineHeight: 10,
  },
  productPrice: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 5,
  },
  productDescription: {
    color: colors.primary,
    fontSize: 15,
  },
});
