import React from "react";
import BottomNavigator from "./app/components/BottomNavigator";
import Product from "./app/components/Product";
import HomeStore from "./app/screens/HomeStore";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SingleProductScreen from "./app/screens/SingleProductScreen";
import HeaderNavigation from "./app/components/HeaderNavigation";
import CartScreen from "./app/screens/CartScreen";

export default function App() {
  return (
    <>
      {/* <HomeStore /> */}
      {/* <SingleProductScreen
        image={require("./app/assets/image.png")}
        title="Samsung S20 Ultra"
        price={456}
      /> */}

      <CartScreen />
    </>
  );
}

// const bottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: WelcomeScreen,
//       navigationOptions: {
//         tabBarIcon: () => <EvilIcons name="heart" size={30} color="#FF6E4E" />,
//       },
//     },
//     Explore: {
//       screen: HomeStore,
//       navigationOptions: {
//         tabBarIcon: () => <EvilIcons name="heart" size={30} color="#FF6E4E" />,
//       },
//     },
//   },
//   {
//     initialRouteName: "Home",
//     tabBarOptions: {
//       activeTintColor: "#eb6e3d",
//     },
//   }
// );

// const AppContainer = createAppContainer(bottomTabNavigator);

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={WelcomeScreen} />
//       <Tab.Screen name="Settings" component={HomeStore} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

// import * as React from "react";
// import { Text, View } from "react-native";
// import { createAppContainer } from "react-navigation";
// import HomeStore from "./app/screens/HomeStore";
// import { EvilIcons } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text> This is my Home screen </Text>
//       </View>
//     );
//   }
// }

// class ExploreScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text> This is my Explore screen </Text>
//       </View>
//     );
//   }
// }
// const bottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <EvilIcons name="heart" size={30} color="#FF6E4E" />
//         ),
//       },
//     },
//     Explore: {
//       screen: HomeStore,
//       navigationOptions: {
//         tabBarIcon: ({ tintColor }) => (
//           <EvilIcons name="heart" size={30} color="#FF6E4E" />
//         ),
//       },
//     },
//   },
//   {
//     initialRouteName: "Home",
//     tabBarOptions: {
//       activeTintColor: "#eb6e3d",
//     },
//   }
// );

// import * as React from "react";
// import { Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeStore from "./app/screens/HomeStore";
// import WelcomeScreen from "./app/screens/WelcomeScreen";

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Welcome" component={WelcomeScreen} />
//       <Tab.Screen name="HomeStore" component={HomeStore} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }
