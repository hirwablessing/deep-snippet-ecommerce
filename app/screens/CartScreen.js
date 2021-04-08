import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import HeaderNavigation from "../components/HeaderNavigation";
import { Image } from "react-native-elements";
import CheckoutProduct from "../components/CheckoutProduct";

export default function CartScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.mainScreen }}>
      <HeaderNavigation
        leftIcon={"<"}
        navigationHeaderTitle={"Add addre"}
        rightIcon={">"}
        titleMargin={50}
      />
      <Text style={{ fontSize: 35, marginHorizontal: 40, marginVertical: 50 }}>
        My Cart
      </Text>

      <View
        style={{
          backgroundColor: colors.primary,
          flex: 1,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}
      >
        {/* <View style={styles}>
          <Image
            source={require("../assets/iPhone.png")}
            style={styles.productImage}
          />
        </View> */}

        <CheckoutProduct
          image={require("../assets/samsung.png")}
          title="Galaxy Note 20 Ultra"
          price={500}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productImage: {
    width: 111,
    height: 89,
  },
});
