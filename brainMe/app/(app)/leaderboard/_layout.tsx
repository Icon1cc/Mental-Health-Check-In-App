import { View, Text } from "react-native";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => {
            return (
              <Text
                style={{ fontFamily: "Pacifico", fontSize: 20, color: "white" }}
              >
                Leaderboard
              </Text>
            );
          },
        }}
      />
    </Stack>
  );
};

export default Layout;
