import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import Colors from "@/constants/Colors";

interface FootButtonsProps {
  onPressFollow: () => void;
}

export default function FootButtons(props: FootButtonsProps) {
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, styles.buttonMessage]}>
        <Text style={styles.text}>Send Message</Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonFollow]}
        onPress={props.onPressFollow}
      >
        <Text style={[styles.text, { color: "white" }]}>Follow</Text>
        <Ionicons name="person-add" size={24} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
  },
  button: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonMessage: {
    borderWidth: 1,
    borderColor: Colors.primary,
    backgroundColor: "white",
  },
  buttonFollow: {
    backgroundColor: "#839788",
  },
  text: {
    fontFamily: "NiveauGroteskBold",
    fontSize: 20,
    color: Colors.primary,
  },
});
