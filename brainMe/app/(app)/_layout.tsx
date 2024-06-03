import { View, Text } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  // This hook provides information about the user's authentication state.
  const { isLoaded, isSignedIn } = useUser();

  /* Redirect to the welcome screen if the user is not signed in
  if (!isSignedIn) {
    return <Redirect href={"/welcome"} />;
  }*/

  // Hide the splash screen when the app is loaded
  useEffect(() => {
    if (isLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isLoaded]);
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen
        name="leaderboard"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo name="bar-graph" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: () => (
            <Text
              style={{ fontFamily: "Pacifico", fontSize: 20, color: "white" }}
            >
              Profile
            </Text>
          ),
          headerRight: () => (
            <View style={{ marginRight: 17 }}>
              <FontAwesome5 name="cog" color="white" size={24} />
            </View>
          ),
          headerStyle: {
            backgroundColor: "transparent",
          },
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
