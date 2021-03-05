import React from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

function WelcomeScreen() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.homeLogo}
          source={require("../assets/app_logo.png")}
        />
        <View style={styles.loginSignupButtons}>
          <View style={styles.loginButton}>
            <Text style={styles.homeTextColor}>Login</Text>
          </View>

          <View style={styles.signupButton}>
            <Text style={styles.homeTextColor}>Signup</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#010035",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeLogo: {
    // width: "50%",
    // height: "50%",
    // marginTop: "50%",
    width: 350,
    height: 350,
    // position: "absolute",
    left: 60,
    // flex: 1,
    marginTop: "50%",
    alignItems: "center",
  },

  loginButton: {
    backgroundColor: "transparent",
    // width: 40,
    marginTop: "1%",
    padding: 20,
    width: 300,
    borderWidth: 1,
    borderColor: "#FF6E4E",
  },

  signupButton: {
    backgroundColor: "#FF6E4E",
    marginTop: 30,
    padding: 20,
  },

  loginSignupButtons: {
    marginBottom: 40,
  },
  homeTextColor: {
    color: "#fff",
    alignSelf: "center",
  },
});

export default WelcomeScreen;
