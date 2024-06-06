import { View, Text, Pressable } from "react-native";
import { Stack, Link } from "expo-router";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import React from "react";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[quizz]" />
    </Stack>
  );
}

function HeaderTitle({ title }: { title: string }) {
  return (
    <Text style={{ fontFamily: "Pacifico", fontSize: 20, color: "white" }}>
      {title}
    </Text>
  );
}
