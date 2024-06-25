import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";

import ImageViewer from "../imageViewer";

interface VerticalBoxProps {
  position: number;
  username: string;
  score: number;
  color: string;
}

export default function VerticalBox({
  position,
  username,
  score,
  first,
  color,
}: VerticalBoxProps) {
  const size = first ? 90 : 60;
  const fontSize = first ? 24 : 20;

  return (
    <Pressable
      style={
        position === 1
          ? {
              ...styles.box,
              backgroundColor: color,
              borderTopStartRadius: 30,
              borderBottomStartRadius: 30,
            }
          : styles.box
      }
    >
      <Text style={{ fontFamily: "NiveauGroteskBold", fontSize: fontSize }}>
        {position}
      </Text>
      <ImageViewer size={size} />
      <Text style={{ fontFamily: "NiveauGroteskBold", fontSize: 20 }}>
        {username}
      </Text>
      <Text style={{ fontFamily: "NiveauGroteskLight", fontSize: 16 }}>
        {score} points
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 175,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  box1: {
    backgroundColor: "#EEE0CB",
  },
  box2: {
    backgroundColor: "#839788",
  },
  box3: {
    backgroundColor: "#BAA898",
  },
});
