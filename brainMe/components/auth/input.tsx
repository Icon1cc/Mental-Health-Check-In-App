import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

interface InputProps {
  title: string;
  placeholder: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

export default function Input({
  title,
  placeholder,
  keyboardType,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  title: {
    fontFamily: "NiveauGroteskMedium",
    fontSize: 16,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
});
