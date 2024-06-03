import { View, Text, StyleSheet } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
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
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen
        name="leaderboard"
        options={{
          headerTitle: () => {
            return <Text style={styles.title}>Leaderboard</Text>;
          },
          headerStyle: {
            shadowColor: "transparent",
          },
        }}
      />
      <Tabs.Screen name="profile" options={{ headerShown: false }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Pacifico",
    fontSize: 24,
  },
});
