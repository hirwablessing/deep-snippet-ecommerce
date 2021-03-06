import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import colors from "../config/colors";
import CustomButton from "../components/CustomButton";

function WelcomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.homeLogo}
          source={require("../assets/app_logo.png")}
        />

        <CustomButton
          bgColor={"transparent"}
          buttonMarginBottom={"10%"}
          buttonPadding={15}
          buttonWidth={300}
          buttonBorderWidth={2}
          buttonRadius={0}
          title={"Login"}
          buttonBorderColor={colors.secondary}
          onPress={() => navigation.navigate("Store")}
        />

        <CustomButton
          bgColor={colors.secondary}
          buttonMarginBottom={"7%"}
          buttonPadding={15}
          buttonWidth={300}
          buttonBorderWidth={2}
          buttonRadius={0}
          title={"Signup"}
          buttonBorderColor={"transparent"}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeLogo: {
    width: 350,
    height: 350,
    left: 60,
    marginTop: "50%",
    alignItems: "center",
  },
});

export default WelcomeScreen;
