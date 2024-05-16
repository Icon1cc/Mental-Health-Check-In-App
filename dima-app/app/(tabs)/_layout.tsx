import { Text } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Redirect, Tabs } from "expo-router";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import React from "react";

export default function Layout() {
  const { isLoaded, isSignedIn } = useUser();

  // We can keep the splash screen open, or render a loading screen like we can do here.
  if (!isLoaded) {
    return <Text>Loading...</Text>;
  }

  if (!isSignedIn) {
    return <Redirect href={"/welcome"} />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="cards"
        options={{
          title: "Cards",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cards-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          title: "Upload",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="upload" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="fast-quizz"
        options={{
          title: "Fast Quizz",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="light-bulb" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
