import { Text, StyleSheet, Pressable } from "react-native";
import React from "react";

import ImageViewer from "../imageViewer";

interface VerticalBoxProps {
  position: number;
  username: string;
  score: number;
  top?: boolean;
}

export default function VerticalBox({
  position,
  username,
  score,
  top,
}: VerticalBoxProps) {
  const width = top ? 125 : 100;
  const height = top ? 200 : 175;
  const size = top ? 90 : 60;
  const fontSize = top ? 24 : 20;
  return (
    <Pressable style={[styles.box, { width: width, height: height }]}>
      <Text style={{ fontFamily: "NiveauGroteskBold", fontSize: fontSize }}>
        #{position}
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
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderRadius: 12,
    backgroundColor: "white",
  },
});
