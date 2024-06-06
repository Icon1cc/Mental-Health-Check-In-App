import { View, Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

import Colors from "@/constants/Colors";

interface FootButtonsProps {
  onPressFollow: () => void;
  friend: boolean;
}

export default function FootButtons(props: FootButtonsProps) {
  const [pressed, setPressed] = useState(props.friend);
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, styles.buttonMessage]}>
        <Text style={styles.text}>Send Message</Text>
      </Pressable>
      {pressed ? (
        <Pressable
          style={({ pressed }) => {
            return [
              {
                opacity: pressed ? 0.75 : 1,
              },
              styles.button,
              styles.buttonFollow,
            ];
          }}
          onPress={() => setPressed(!pressed)}
        >
          <Text style={[styles.text, { color: "white" }]}>Add friend</Text>
          <Ionicons name="person-add" size={24} color="white" />
        </Pressable>
      ) : (
        <Pressable
          style={({ pressed }) => {
            return [
              {
                opacity: pressed ? 0.75 : 1,
              },
              styles.button,
              styles.buttonFollow,
            ];
          }}
          onPress={() => setPressed(!pressed)}
        >
          <Text style={[styles.text, { color: "white" }]}>Unfriend</Text>
        </Pressable>
      )}
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
    backgroundColor: Colors.primary,
  },
  text: {
    fontFamily: "NiveauGroteskBold",
    fontSize: 20,
    color: Colors.primary,
  },
});
