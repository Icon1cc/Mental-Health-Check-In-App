import { View, FlatList, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Stack, Link } from "expo-router";
import React, { useState, useEffect } from "react";

import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import Colors from "@/constants/Colors";
import FriendFinder from "@/components/profile/friend-finder";

export default function Finder() {
  // Convex API.
  const convex = useConvex();

  // Safe area insets.
  const insets = useSafeAreaInsets();

  // Data for the FlatList.
  const [filteredData, setFilteredData] = useState<
    {
      _id: Id<"user">;
      _creationTime: number;
      user_id: string;
      username: string;
      ranking: number;
      gamesPlayed: number;
      points: number;
      completionRate: number;
      correctAnswers: number;
      wrongAnswers: number;
    }[]
  >([]);
  const [data, setData] = useState(filteredData);

  // Search logic.
  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.username.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  // Load users from the Convex API on mount.
  useEffect(() => {
    const loadUsers = async () => {
      const users = await convex.query(api.user.collect);
      if (users) {
        setData(users);
        setFilteredData(users);
      }
    };
    loadUsers();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerBlurEffect: "light",
          headerSearchBarOptions: {
            placeholder: "Search for friends",
            autoFocus: true,
            cancelButtonText: "Cancel",
            tintColor: Colors.primary,
            hideWhenScrolling: true,
            hideNavigationBar: false,
            onChangeText: (event) => {
              searchFilterFunction(event.nativeEvent.text);
            },
          },
        }}
      />
      <FlatList
        data={filteredData}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{ paddingHorizontal: 17 }}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Link
            key={item._id.toString()}
            href={{
              pathname: "/(profile)/[profile]",
              params: { profile: item.username },
            }}
            asChild
          >
            <Pressable>
              <FriendFinder username={item.username} points={item.points} />;
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}
