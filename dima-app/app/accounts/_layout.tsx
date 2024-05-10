import { Stack } from "expo-router";
import Colors from "@/constants/Colors";
import React from "react";

import HeaderLeft from "@/components/root-layout/header-left";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerLeft: () => {
          return <HeaderLeft backward="/(tabs)/profile" style="white" />;
        },
      }}
    >
      <Stack.Screen
        name="edit"
        options={{
          headerTitle: "Edit profile",
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="change-password"
        options={{
          headerTitle: "Edit profile",
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="select"
        options={{
          headerTitle: "Edit profile",
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </Stack>
  );
};

export default Layout;
