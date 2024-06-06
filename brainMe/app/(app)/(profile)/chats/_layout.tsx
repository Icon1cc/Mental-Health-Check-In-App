import { View, Pressable } from "react-native";
import { Stack, Link } from "expo-router";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="[chat]"
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerLeft: () => (
            <View style={{ marginRight: 17 }}>
              <Link href="/(app)/(profile)/finder" asChild>
                <Pressable>
                  <AntDesign name="arrowleft" color={"white"} size={24} />
                </Pressable>
              </Link>
            </View>
          ),
        }}
      />
    </Stack>
  );
}
