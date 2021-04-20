import React from "react";

import HomeStore from "../screens/HomeStore";
import WelcomeScreen from "../screens/WelcomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HeaderNavigation from "../components/HeaderNavigation";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
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
      </Stack.Navigator>
    </>
  );
}
