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
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {},
});
