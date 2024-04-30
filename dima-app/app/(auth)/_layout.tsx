import { Pressable } from "react-native";
import { Stack, Link } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

import React from "react";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen
        name="sign-in"
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => {
            return (
              <Link href={"/(auth)/welcome"} asChild>
                <Pressable
                  style={{
                    width: 60,
                    height: 60,
                    paddingTop: 15,
                  }}
                >
                  <Ionicons name="arrow-back-outline" size={30} color="black" />
                </Pressable>
              </Link>
            );
          },
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => {
            return (
              <Link href={"/(auth)/welcome"} asChild>
                <Pressable style={{ width: 60, height: 60, paddingTop: 15 }}>
                  <Ionicons name="arrow-back-outline" size={30} color="black" />
                </Pressable>
              </Link>
            );
          },
        }}
      />
      <Stack.Screen name="forgot" />
    </Stack>
  );
};

export default Layout;
