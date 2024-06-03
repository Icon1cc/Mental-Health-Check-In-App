import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";
import React from "react";
import ImageViewer from "../imageViewer";

const DATA = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
];

interface FriendsProps {
  numberFriends: number;
}

export default function Friends({ numberFriends }: FriendsProps) {
  return (
    <View style={{ gap: 5 }}>
      <Text style={styles.title}>Friends ({numberFriends})</Text>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                marginRight: -20,
              }}
            >
              <ImageViewer size={50} />
            </View>
          )}
        />
        <Pressable
          style={({ pressed }) => {
            return [
              {
                opacity: pressed ? 0.75 : 1,
              },
              styles.button,
            ];
          }}
        >
          <Text style={styles.text}>Find friends</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "NiveauGroteskBold",
    fontSize: 20,
  },
  button: {
    width: 120,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#839788",
    borderRadius: 12,
  },
  text: {
    fontFamily: "NiveauGroteskBold",
    fontSize: 16,
    color: "white",
  },
});
