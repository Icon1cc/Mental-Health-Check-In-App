import { View, Text, Pressable } from "react-native";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { Stack, Link } from "expo-router";

import React from "react";

import Colors from "@/constants/Colors";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: () => <HeaderTitle title="Profile" />,
          headerRight: () => (
            <View style={{ marginRight: 17 }}>
              <FontAwesome5 name="cog" color="white" size={24} />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="finder"
        options={{
          headerTitle: () => {
            return (
              <Text
                style={{
                  fontFamily: "Pacifico",
                  fontSize: 24,
                  color: Colors.primary,
                }}
              >
                Friends
              </Text>
            );
          },
          headerLeft: () => (
            <View style={{ marginRight: 17 }}>
              <Link href="/profile" asChild>
                <Pressable>
                  <AntDesign
                    name="arrowleft"
                    color={Colors.primary}
                    size={24}
                  />
                </Pressable>
              </Link>
            </View>
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="[profile]"
        options={{
          headerTitle: "",
          headerLeft: () => (
            <View style={{ marginRight: 17 }}>
              <Link href="/finder" asChild>
                <Pressable>
                  <AntDesign name="arrowleft" color={"white"} size={24} />
                </Pressable>
              </Link>
            </View>
          ),
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="chats" options={{ headerShown: false }} />
    </Stack>
  );
}

function HeaderTitle({ title }: { title: string }) {
  return (
    <Text style={{ fontFamily: "Pacifico", fontSize: 24, color: "white" }}>
      {title}
    </Text>
  );
}
