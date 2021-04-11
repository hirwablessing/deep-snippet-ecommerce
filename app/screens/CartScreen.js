import React from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";
import HeaderNavigation from "../components/HeaderNavigation";
import { Image } from "react-native-elements";

import CheckoutProduct from "../components/CheckoutProduct";
import { Feather } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";

export default function CartScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.mainScreen }}>
      <HeaderNavigation
        navigationHeaderTitle={"Add address"}
        rightIcon={
          <Feather
            name="map-pin"
            size={20}
            color="white"
            style={{ alignSelf: "center" }}
          />
        }
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
        <View style={{ marginTop: 70 }}>
          <CheckoutProduct
            image={require("../assets/samsung.png")}
            title="Galaxy Note 20 Ultra"
            price={500}
          />
          <CheckoutProduct
            image={require("../assets/samsung.png")}
            title="Galaxy Note 20 Ultra"
            price={500}
          />
        </View>

        <View style={styles.card__total}>
          <View>
            <View style={styles.card__totalPrice}>
              <Text>Total</Text>
            </View>

            <View style={styles.card__totalPrice}>
              <Text>Total</Text>
            </View>
          </View>

          <View>
            <View style={styles.card__totalPrice}>
              <Text>$6,000</Text>
            </View>

            <View style={styles.card__totalPrice}>
              <Text>Free</Text>
            </View>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <CustomButton
            bgColor={colors.secondary}
            buttonMarginBottom={"7%"}
            buttonPadding={15}
            buttonWidth={300}
            buttonBorderWidth={2}
            buttonRadius={10}
            title={"Checkout"}
            buttonBorderColor={"transparent"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card__total: {
    marginTop: 40,
    color: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.gray,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    padding: 30,
  },

  card__totalPrice: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
