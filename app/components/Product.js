import React, { useState } from "react";
import { Dimensions } from "react-native";
import { Image } from "react-native";
import { StyleSheet, View } from "react-native";

import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import colors from "../config/colors";
import DoubleTap from "./DoubleTap";
import CustomText from "./CustomText";

const { width } = Dimensions.get("screen");
const cardWidth = width / 2.2;

export default function Product({ image, name, price }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <View style={styles.productCard}>
      <View style={styles.likeTag}>
        {liked ? (
          <AntDesign name="heart" size={20} color="#FF6E4E" />
        ) : (
          <EvilIcons name="heart" size={30} color="#FF6E4E" />
        )}
      </View>
      <DoubleTap onDoubleTap={toggleLike}>
        <Image source={image} style={styles.productImage} />
      </DoubleTap>

      <View style={styles.productDetails}>
        <View style={styles.productMenus}>
          <CustomText
            textContent={price}
            textColor={colors.primary}
            textWeight={"900"}
            textSize={25}
            textMarginVertical={5}
          />

          <CustomText
            textContent={name}
            textColor={colors.primary}
            textWeight={"900"}
            textSize={15}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    width: cardWidth,
    height: 300, //350
    borderRadius: 10,
    backgroundColor: colors.white,
    marginLeft: 20,
    marginTop: 20,
  },
  productImage: {
    width: "100%",
    height: 190,
    marginTop: 15,
  },
  likeTag: {
    backgroundColor: colors.white,
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
    backgroundColor: colors.white,
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
});
