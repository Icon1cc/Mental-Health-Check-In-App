import { Text, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import React from "react";

import ImageViewer from "../imageViewer";

interface FriendFinderProps {
  username: string;
  points: number;
}

export default function FriendFinder(props: FriendFinderProps) {
  return (
    <Link
      href={{
        pathname: "/(app)/(profile)/[profile]",
        params: { username: props.username },
      }}
      asChild
    >
      <Pressable style={styles.container}>
        <ImageViewer size={40} />
        <Text style={styles.username}>{props.username}</Text>
        <Text style={styles.points}>{props.points} points</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomWidth: 0.75,
    borderBottomColor: "lightgray",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  username: {
    flex: 1,
    fontFamily: "NiveauGroteskBold",
    fontSize: 20,
    color: "rgb(50, 50, 50)",
  },
  points: {
    fontFamily: "NiveauGroteskLight",
    fontSize: 16,
    color: "rgb(50, 50, 50)",
  },
});
