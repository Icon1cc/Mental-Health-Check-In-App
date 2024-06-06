import { View, Text, Pressable } from "react-native";
import { Link, Stack } from "expo-router";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => (
            <Text
              style={{ fontFamily: "Pacifico", fontSize: 24, color: "white" }}
            >
              Profile
            </Text>
          ),
          headerRight: () => (
            <View style={{ marginRight: 17 }}>
              <FontAwesome5 name="cog" color="white" size={24} />
            </View>
          ),
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
      <Stack.Screen
        name="finder"
        options={{
          headerTitle: () => (
            <Text
              style={{ fontFamily: "Pacifico", fontSize: 24, color: "white" }}
            >
              Friends
            </Text>
          ),
          headerLeft: () => (
            <View style={{ marginRight: 17 }}>
              <Link href="/profile" asChild>
                <Pressable>
                  <AntDesign name="arrowleft" color="white" size={24} />
                </Pressable>
              </Link>
            </View>
          ),
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </Stack>
  );
}
