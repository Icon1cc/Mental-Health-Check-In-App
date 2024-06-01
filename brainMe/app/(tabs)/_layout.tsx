import { View, Text } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Tabs } from "expo-router";
import React from "react";

import SplashScreen from "@/components/splash-screen";

export default function Layout() {
  const { isLoaded, isSignedIn } = useUser();

  // Render a loading/splash screen while Clerk is loading
  if (!isLoaded) {
    return <SplashScreen />;
  }

  /*if (!isSignedIn) {
    return <Redirect href={"/welcome"} />;
  }*/
  return (
    <Tabs>
      <Tabs.Screen name="index" />
    </Tabs>
  );
}
