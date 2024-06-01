import { Image, StyleSheet, Pressable } from "react-native";
import React from "react";

interface AuthButtonProps {
  image: string;
  onPress: () => void;
}

export default function AuthButton({ image, onPress }: AuthButtonProps) {
  const placeholder =
    image === "facebook"
      ? require("@/assets/images/auth/facebook.png")
      : image === "apple"
        ? require("@/assets/images/auth/apple.png")
        : image === "google"
          ? require("@/assets/images/auth/google.png")
          : null;
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={placeholder} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  image: {
    resizeMode: "contain",
    height: 24,
    width: 24,
  },
});
