import { useUser } from "@clerk/clerk-expo";
import { Redirect, Tabs, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  // This hook provides information about the current route and the segments
  const segments = useSegments();

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
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="(index)"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={26} />
          ),
          tabBarStyle: {
            display: segments.includes("quizz") ? "none" : "flex",
          },
        }}
      />
      <Tabs.Screen
        name="(leaderboard)"
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="bar-graph" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
