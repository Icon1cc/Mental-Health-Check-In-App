import { Text } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Redirect, Tabs } from "expo-router";
import React from "react";

export default function Layout() {
  const { isLoaded, isSignedIn } = useUser();

  // We can keep the splack sceen open, or render a loading screen like we can do here.
  if (!isLoaded) {
    return <Text>Loading...</Text>;
  }

  if (!isSignedIn) {
    return <Redirect href={"/welcome"} />;
  }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="fast-quizz" />
      <Tabs.Screen name="search" />
      <Tabs.Screen name="upload" />
    </Tabs>
  );
}
