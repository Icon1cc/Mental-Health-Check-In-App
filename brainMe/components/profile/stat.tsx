import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ImageViewer from "../imageViewer";

import Colors from "@/constants/Colors";

interface StatProps {
  number: number;
  description: string;
  percentage?: boolean;
  hashtag?: boolean;
  icon: "star" | "joystick" | "coin" | "poition" | "target" | "skull";
}

export default function Stat({
  number,
  percentage,
  hashtag,
  description,
  icon,
}: StatProps) {
  // Split the description into words
  const words = description.split(" ");

  // Format the number.
  const numberAbove1000 =
    number > 1000
      ? number.toString()[0] + "," + number.toString().slice(1)
      : number;
  const numberFormatted = percentage
    ? `${numberAbove1000}%`
    : hashtag
      ? `#${numberAbove1000}`
      : numberAbove1000;

  return (
    <View style={styles.container}>
      <ImageViewer icon={icon} size={30} />

      <Text style={styles.number}>{numberFormatted}</Text>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.description}>{words[0]}</Text>
        {words[1] && <Text style={styles.description}>{words[1]}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
  number: {
    fontFamily: "NiveauGroteskBold",
    fontSize: 20,
    color: Colors.primary,
  },
  description: {
    fontFamily: "NiveauGroteskLight",
    fontSize: 16,
    color: Colors.primary,
  },
});
