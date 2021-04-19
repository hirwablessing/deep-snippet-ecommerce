import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import HeaderNavigation from "../components/HeaderNavigation";

import CheckoutProduct from "../components/CheckoutProduct";
import { Feather } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";

export default function CartScreen() {
  const products = [
    {
      id: 1,
      name: "Samsung ultra 2020",
      price: "$1,333",
      image: require("../assets/image.png"),
    },
    {
      id: 2,
      name: "Samsung ultra 2020",
      price: "$1,333",
      image: require("../assets/samsung.png"),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: colors.mainScreen }}>
      <HeaderNavigation
        navigationHeaderTitle={"Add address"}
        rightIcon={<Feather name="map-pin" size={20} color="white" />}
      />

      <CustomText
        textContent="My Cart"
        textSize={35}
        textMarginHorizontal={40}
        textMarginVertical={50}
      />

      <View
        style={{
          backgroundColor: colors.primary,
          flex: 1,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}
      >
        <View style={{ marginTop: 70 }}>
          {products.map((product) => (
            <CheckoutProduct
              key={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
              // onClick={}
            />
          ))}
        </View>

        <View style={styles.card__total}>
          <View>
            <View style={styles.card__totalPrice}>
              <CustomText textContent="Total" textColor={colors.white} />
            </View>

            <View style={styles.card__totalPrice}>
              <CustomText textContent="Delivery" textColor={colors.white} />
            </View>
          </View>

          <View>
            <View style={styles.card__totalPrice}>
              <CustomText textContent="$6,000" textColor={colors.white} />
            </View>

            <View style={styles.card__totalPrice}>
              <CustomText textContent="Free" textColor={colors.white} />
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
