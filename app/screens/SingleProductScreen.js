import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";

import colors from "../config/colors";

export default function SingleProductScreen({ route, image, title, price }) {
  const { product } = route.params;

  return (
    // <ScrollView>
    <View style={styles.singleProduct}>
      <Image
        source={product.image}
        style={{ width: "80%", height: "55%" }}
      ></Image>
      <View style={styles.singleProduct__details}>
        <View>
          <CustomText
            textContent={product.name}
            textColor={colors.primary}
            textWeight={"bold"}
            textSize={16}
            textMarginVertical={5}
          />

          <CustomText
            textContent="SMARTPHONES"
            textColor={colors.lightGray}
            textWeight={"bold"}
            textSize={10}
            textMarginVertical={5}
          />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={[
                styles.colorCircle,
                {
                  backgroundColor: "#BD3832",
                },
              ]}
            ></View>
            <View
              style={[
                styles.colorCircle,
                {
                  backgroundColor: "#000000",
                },
              ]}
            ></View>
            <View
              style={[
                styles.colorCircle,
                {
                  backgroundColor: "#869CAA",
                },
              ]}
            ></View>
          </View>
        </View>
        <CustomButton
          bgColor={colors.lightBlue}
          btnTextColor={colors.black}
          buttonWidth={90}
          buttonHeight={60}
          buttonBorderWidth={2}
          title={`$${product.price}`}
          buttonBorderColor={"transparent"}
        />
      </View>

      <View
        style={{
          marginHorizontal: 55,
          marginVertical: 5,
        }}
      >
        <CustomText
          textContent="Use, by you or one client, in a single end product which end users are
          not charged for. The total price includest the item price and a buyer
          fees."
          textSize={12}
          textHeight={18}
        />

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
    paddingTop: 100,
    backgroundColor: colors.white,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    padding: 10,
  },
  singleProduct__details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 50,
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
});
