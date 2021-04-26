import React from "react";

import HomeStore from "../screens/HomeStore";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderNavigation from "../components/HeaderNavigation";
import SingleProductScreen from "../screens/SingleProductScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Store"
        component={HomeStore}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SingleProduct"
        component={SingleProductScreen}
        options={{
          header: (props) => (
            <HeaderNavigation
              {...props}
              rightIcon={
                <Ionicons name="ios-basket-outline" size={22} color="white" />
              }
            />
          ),

          headerShown: true,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
