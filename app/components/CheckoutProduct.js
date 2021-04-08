import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements/dist/image/Image";

import colors from "../config/colors";

export default function CheckoutProduct() {
  return (
    <View style={styles.product__info}>
      <View style={styles.product__description}>
        <Image
          source={require("../assets/samsung.png")}
          style={styles.product__image}
        />

        <View>
          <Text style={{ color: colors.white, width: 100, marginBottom: 10 }}>
            Galaxy Note 20 Ultra
          </Text>

          <Text style={{ color: colors.secondary }}>$4000</Text>
        </View>
      </View>

      <View style={styles.product__operations}>
        <View style={styles.product__quantity}>
          <Text style={styles.product__sign}>1</Text>
          <Text style={styles.product__sign}>2</Text>
          <Text style={styles.product__sign}>+</Text>
        </View>
        <Text
          style={{
            color: colors.white,
          }}
        >
          Delete
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
    paddingVertical: 70,
    paddingHorizontal: 30,
  },

  product__description: {
    // justifyContent: "flex-start",
    alignItems: "center",

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
