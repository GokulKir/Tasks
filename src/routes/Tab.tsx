import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons";
import Love from "../pages/Love";
import Account from "../pages/Account";
import Home from "../pages/Home";
import { moderateScale } from "react-native-size-matters";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
            IconComponent = AntDesign;
          } else if (route.name === "Love") {
            iconName = focused ? "heart" : "heart-outline";
            IconComponent = Ionicons;
          } else if (route.name === "Account") {
            iconName = focused ? "account-circle" : "account-circle";
            IconComponent = MaterialIcons;
          }

          // Ensure to return the icon component
          return <IconComponent name={iconName} size={moderateScale(25)} color={color} />;
        },
        tabBarActiveTintColor: "#ffff",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0F0F0F",
          height: 60,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Love" component={Love} />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
