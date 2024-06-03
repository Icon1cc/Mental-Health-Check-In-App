import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface StatProps {
  number: number;
  percentage?: boolean;
  hashtag?: boolean;
  description: string;
}

export default function Stat({
  number,
  percentage,
  hashtag,
  description,
}: StatProps) {
  const words = description.split(" ");
  const firstWord = words[0];
  const secondWord = words[1] || "";

  const numberText = percentage ? `${number}%` : number;
  const numberHashtag = hashtag ? `#${number}` : number;
  const numberFormatted = percentage ? numberText : numberHashtag;
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{numberFormatted}</Text>
      <Text style={styles.description}>{firstWord}</Text>
      {secondWord && <Text style={styles.description}>{secondWord}</Text>}
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
  },
  number: {
    fontFamily: "NiveauGroteskBold",
    fontSize: 20,
  },
  description: {
    fontFamily: "NiveauGroteskLight",
    fontSize: 16,
  },
});
