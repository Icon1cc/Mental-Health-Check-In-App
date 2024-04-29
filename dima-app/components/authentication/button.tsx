import { Text, StyleSheet, Pressable } from "react-native";
import Colors from "@/constants/Colors";
import React from "react";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#314053",
    borderRadius: 15,
  },
  text: {
    color: "white",
    fontFamily: "niv-r-smallcaps",
    fontSize: 18,
    letterSpacing: 2,
  },
});