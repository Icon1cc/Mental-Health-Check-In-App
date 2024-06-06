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
          headerTitle: () => <HeaderTitle title="Profile" color="white" />,
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
          headerLeft: () => <HeaderLeft towards="/profile" />,
          headerTitle: () => (
            <HeaderTitle title="Find Friends" color={Colors.primary} />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="add-friend"
        options={{
          presentation: "modal",
          headerLeft: () => <HeaderLeft towards="/finder" />,
          headerTitle: () => (
            <HeaderTitle title="Add Friend" color={Colors.primary} />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="[profile]"
        options={{
          headerLeft: () => <HeaderLeft towards="/finder" />,
          headerTitle: "",
          headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="chats" options={{ headerShown: false }} />
    </Stack>
  );
}

function HeaderTitle({ title, color }: { title: string; color: string }) {
  return (
    <Text style={{ fontFamily: "Pacifico", fontSize: 24, color: `${color}` }}>
      {title}
    </Text>
  );
}

function HeaderLeft({ towards }: { towards: "/finder" | "/profile" }) {
  return (
    <View style={{ marginRight: 17 }}>
      <Link href={towards} asChild>
        <Pressable>
          <AntDesign name="arrowleft" color={"white"} size={24} />
        </Pressable>
      </Link>
    </View>
  );
}
