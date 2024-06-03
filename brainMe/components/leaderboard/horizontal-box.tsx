import { View, Text, StyleSheet } from "react-native";
import React from "react";

import ImageViewer from "../imageViewer";

interface HorizontalBoxProps {
  position: number;
  username: string;
  score: number;
}

export default function HorizontalBox({
  position,
  username,
  score,
}: HorizontalBoxProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.position}>#{position}</Text>
      <View style={styles.userContainer}>
        <ImageViewer size={40} />
        <Text style={styles.position}>{username}</Text>
      </View>
      <Text style={styles.score}>{score} points</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
    paddingHorizontal: 17,
    height: 60,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#D9D9D9",
  },
  position: {
    fontFamily: "NiveauGroteskBold",
    fontSize: 20,
  },
  userContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  score: {
    fontFamily: "NiveauGroteskLight",
    fontSize: 16,
  },
});
