import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up now</Text>
      <Text style={styles.subtitle}>Join BrainMe and invite friends</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 17,
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontFamily: "Pacifico",
    color: "white",
    fontSize: 32,
  },
  subtitle: {
    fontFamily: "NiveauGroteskLight",
    color: "white",
    fontSize: 20,
    opacity: 0.75,
  },
});
