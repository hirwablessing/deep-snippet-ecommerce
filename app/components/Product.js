import React from "react";
import { Dimensions } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

import { EvilIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");
const cardWidth = width / 1.8;

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

      <View style={styles.productDetails}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    width: cardWidth,
    height: 350,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "white",
    marginLeft: 20,
    marginTop: "50%",
  },
  productImage: {
    width: "100%",
    height: 200,
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
    right: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  productDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    paddingLeft: 20,
    width: "100%",
  },
});
