import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Image } from "react-native";

import colors from "../config/colors";
import Category from "../components/Category";
import Search from "../components/Search";
import Header from "../components/Header";
import Product from "../components/Product";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function HomeStore({ navigation }) {
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
    {
      id: 3,
      name: "Samsung ultra 2020",
      price: "$1,333",
      image: require("../assets/image.png"),
    },
    {
      id: 4,
      name: "Samsung ultra 2020",
      price: "$1,333",
      image: require("../assets/samsung.png"),
    },
  ];

  return (
    <View style={styles.homeStore}>
      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        <Header
          leftText={"Select Category"}
          rightText={"View all"}
          titleMargin={50}
        />

        <View style={{ flexDirection: "row" }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
          </ScrollView>
        </View>

        <Search />

        <Header
          leftText={"Hot sales"}
          rightText={"see more"}
          titleMargin={10}
        />

        <View>
          <Image
            source={require("../assets/iphone1.png")}
            style={styles.homeStoreImg}
          />
        </View>

        <Header
          leftText={"Best Seller"}
          rightText={"see more"}
          titleMargin={15}
        />
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          {products.map((product) => (
            <TouchableWithoutFeedback
              key={product.id}
              onPress={() => {
                navigation.push("SingleProduct", { product });
              }}
            >
              <Product
                name={product.name}
                price={product.price}
                image={product.image}
                title="Go to Details"
              />
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeStore: {
    flex: 1,
    backgroundColor: colors.mainScreen,
  },

  homeStoreImg: {
    width: "95%",
    height: 182,
    marginLeft: 10,
  },
});
