import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";

import colors from "../config/colors";

export default function SingleProductScreen({ image, title, price }) {
  return (
    // <ScrollView>
    <View style={styles.singleProduct}>
      <Image source={image} style={{ width: "80%", height: "55%" }}></Image>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingVertical: 30,
          paddingHorizontal: 50,
        }}
      >
        <View>
          <Text
            style={{
              color: "#2E0B5B",
              fontWeight: "bold",
              fontSize: 16,
              lineHeight: 27,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              color: "#706F71",
              fontSize: 10,
              fontWeight: "bold",
              lineHeight: 15,
            }}
          >
            SMARTPHONES
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={[
                styles.colorCircle,
                {
                  backgroundColor: "#BD3832",
                },
              ]}
            ></Text>
            <Text
              style={[
                styles.colorCircle,
                {
                  backgroundColor: "#000000",
                },
              ]}
            ></Text>
            <Text
              style={[
                styles.colorCircle,
                {
                  backgroundColor: "#869CAA",
                },
              ]}
            ></Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#E5EAF9",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 60,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>${price}</Text>
        </View>
      </View>

      <View
        style={{
          marginHorizontal: 55,
          marginVertical: 5,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            lineHeight: 18,
          }}
        >
          Use, by you or one client, in a single end product which end users are
          not charged for. The total price includest the item price and a buyer
          fees.
        </Text>

        <View style={styles.buttons}>
          <TouchableWithoutFeedback>
            <CustomButton
              bgColor={colors.primary}
              buttonMarginBottom={"7%"}
              buttonPadding={10}
              buttonWidth={150}
              buttonBorderWidth={2}
              buttonRadius={5}
              title={"Add to cart"}
              buttonBorderColor={"transparent"}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <CustomButton
              bgColor={colors.secondary}
              buttonMarginBottom={"7%"}
              buttonPadding={10}
              buttonWidth={150}
              buttonBorderWidth={2}
              buttonRadius={5}
              title={"Order Now"}
              buttonBorderColor={"transparent"}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>

      {/* <Text style={styles.heading}>Similar Products</Text> */}
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  singleProduct: {
    paddingTop: 30,
    backgroundColor: colors.white,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  colorCircle: {
    height: 15,
    width: 15,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 15,
  },
  buttons: {
    marginVertical: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    color: colors.white,
  },
  heading: {
    marginLeft: 20,
    color: "#2E0B5B",
    fontWeight: "bold",
    fontSize: 18,
  },
});
