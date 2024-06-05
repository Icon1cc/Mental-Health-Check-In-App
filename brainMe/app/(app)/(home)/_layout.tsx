import { View, Text } from "react-native";
import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="quizz" options={{ headerShown: false }} />
    </Stack>
  );
}
