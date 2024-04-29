import { Pressable } from "react-native";
import { Stack, Link } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

import React from "react";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="sign-in"
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => {
            return (
              <Link href={"/(auth)/"} asChild>
                <Pressable>
                  <Ionicons name="arrow-back-outline" size={24} color="black" />
                </Pressable>
              </Link>
            );
          },
        }}
      />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="forgot" />
    </Stack>
  );
};

export default Layout;
