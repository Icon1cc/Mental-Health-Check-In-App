import { Stack } from "expo-router";
import React from "react";

import Colors from "@/constants/Colors";
import HeaderLeft from "@/components/header-left-navigation/header-left";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Settings",
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen
        name="edit"
        options={{
          headerTitle: "Edit profile",
          headerLeft: () => {
            return <HeaderLeft backward="/(tabs)/account" style="white" />;
          },
        }}
      />
      <Stack.Screen
        name="change-password"
        options={{
          headerTitle: "Change password",
          headerLeft: () => {
            return <HeaderLeft backward="/(tabs)/account" style="white" />;
          },
        }}
      />
      <Stack.Screen
        name="select"
        options={{
          headerTitle: "Edit profile",
          headerLeft: () => {
            return <HeaderLeft backward="/(tabs)/account" style="white" />;
          },
        }}
      />
    </Stack>
  );
}
