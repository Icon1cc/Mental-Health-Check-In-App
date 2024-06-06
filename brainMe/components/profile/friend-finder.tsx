import { View, Text, StyleSheet } from "react-native";
import React from "react";

import ImageViewer from "../imageViewer";

interface FriendFinderProps {
  username: string;
  points: number;
}

export default function FriendFinder(props: FriendFinderProps) {
  return (
    <View style={styles.container}>
      <ImageViewer size={40} />
      <Text style={styles.username}>{props.username}</Text>
      <Text style={styles.points}>{props.points} points</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "white",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
    gap: 10,
  },
  username: {
    flex: 1,
    fontFamily: "NiveauGroteskBold",
    fontSize: 20,
  },
  points: {
    fontFamily: "NiveauGroteskLight",
    fontSize: 16,
  },
});
