import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "NiveauGroteskBold",
    fontSize: 24,
  },
  subtitle: {
    fontFamily: "NiveauGroteskLight",
    fontSize: 16,
  },
});
