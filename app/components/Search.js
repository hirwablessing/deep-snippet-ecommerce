import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { EvilIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function Search() {
  return (
    <View style={{ flexDirection: "row", marginTop: 20 }}>
      <View style={styles.SectionStyle}>
        <EvilIcons
          name="search"
          size={30}
          color={colors.secondary}
          resizeMode="cover"
          style={styles.ImageStyle}
        />

        <TextInput
          style={{ flex: 1, marginLeft: 0 }}
          placeholder="Search"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.searchIcon}>
        <MaterialCommunityIcons name="sort-variant" size={30} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 50,
    margin: 10,
  },
  ImageStyle: {
    padding: 5,
    margin: 5,
    // resizeMode: "stretch",
    alignItems: "center",
  },
  searchIcon: {
    backgroundColor: colors.secondary,
    padding: 5,
    width: 45,
    height: 45,
    borderRadius: 50,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
