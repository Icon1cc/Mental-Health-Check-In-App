import { View, Text } from "react-native";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="edit" />
      <Stack.Screen name="change-password" />
      <Stack.Screen name="select" />
    </Stack>
  );
};

export default Layout;
