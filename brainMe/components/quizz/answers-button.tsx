import { Pressable, Text, StyleSheet } from "react-native";
import React from "react";

interface AnswersButtonProps {
  answer: string;
  correctAnswer?: string;
}

export default function AnswersButton({
  answer,
  correctAnswer,
}: AnswersButtonProps) {
  return (
    <Pressable style={styles.button}>
      <Text style={{ fontSize: 20 }}>{answer}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
