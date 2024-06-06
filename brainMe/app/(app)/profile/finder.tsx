import { View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import React, { useState } from "react";

import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import FriendFinder from "@/components/profile/friend-finder";

const DATA = [
  {
    id: "1",
    username: "JohnDoe",
    points: 100,
  },
  {
    id: "2",
    username: "JaneDoe",
    points: 200,
  },
  {
    id: "3",
    username: "JohnSmith",
    points: 300,
  },
  {
    id: "4",
    username: "JaneSmith",
    points: 400,
  },
];

export default function Finder() {
  // Safe area insets.
  const insets = useSafeAreaInsets();

  // Data for the FlatList.
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();

  // Search logic.
  const searchFilterFunction = (text: string) => {};

  return (
    <View style={{ flex: 1, paddingTop: insets.top + 17 * 3 }}>
      <Stack.Screen
        options={{
          headerSearchBarOptions: {
            placeholder: "Search for friends",
            textColor: "white",
            hideWhenScrolling: true,
            hideNavigationBar: false,
            onChangeText: (event) => {
              searchFilterFunction(event.nativeEvent.text);
            },
          },
        }}
      />
      <FlatList
        data={DATA}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ paddingHorizontal: 17 }}
        ItemSeparatorComponent={() => <View style={{ height: 17 }} />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FriendFinder username={item.username} points={item.points} />
        )}
      />
    </View>
  );
}
