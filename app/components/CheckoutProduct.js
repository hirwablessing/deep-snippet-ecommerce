import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";

import colors from "../config/colors";
import { Feather } from "@expo/vector-icons";

export default function CheckoutProduct({ image, title, price }) {
  return (
    <View style={styles.product__info}>
      <View style={styles.product__description}>
        <Image source={image} style={styles.product__image} />

        <View>
          <Text style={{ color: colors.white, width: 100, marginBottom: 10 }}>
            {title}
          </Text>

          <Text style={{ color: colors.secondary }}>${price}</Text>
        </View>
      </View>

      <View style={styles.product__operations}>
        <View style={styles.product__quantity}>
          <Text style={styles.product__sign}>-</Text>
          <Text style={styles.product__sign}>2</Text>
          <Text style={styles.product__sign}>+</Text>
        </View>
        <Text
          style={{
            color: colors.white,
          }}
        >
          <Feather name="trash-2" size={24} color={colors.black} />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product__image: {
    width: 111,
    height: 89,
    borderRadius: 10,
    marginRight: 20,
  },

  product__info: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 30,
  },

  product__description: {
    alignItems: "center",
    marginBottom: 40,
    flexDirection: "row",
  },

  product__quantity: {
    width: 26,
    height: 68,
    backgroundColor: colors.black,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  product__sign: {
    color: colors.white,
  },

  product__operations: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
});
