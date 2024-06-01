import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="upload-file" />
      <Stack.Screen name="learn" />
    </Stack>
  );
}
