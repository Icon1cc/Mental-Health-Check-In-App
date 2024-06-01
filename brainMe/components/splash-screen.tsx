import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BrainMe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#024959",
  },
  text: {
    color: "white",
    fontFamily: "Pacifico",
    fontSize: 40,
  },
});
