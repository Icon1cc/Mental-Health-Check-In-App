import { Text, Pressable, Image, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";

interface SignerProps {
  title: string;
  type: "email" | "google";
  onPress?: () => void;
}

export default function Signer({ title, type, onPress }: SignerProps) {
  return {
    email: (
      <Link href="/sign-in" asChild>
        <Pressable style={styles.button}>
          <Fontisto name="email" size={24} color="#000" />
          <Text>{title}</Text>
        </Pressable>
      </Link>
    ),
    google: (
      <Pressable style={styles.button} onPress={onPress}>
        <Image source={require("@/assets/images/authentication/google.png")} />
        <Text>{title}</Text>
      </Pressable>
    ),
  }[type];
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 15,
    borderWidth: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
