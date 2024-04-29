import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

interface InputProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input = ({
  title,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: InputProps) => {
  return (
    <View style={{ gap: 5 }}>
      <Text style={{ fontSize: 16, paddingLeft: 4 }}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"#A0A0A0"}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    paddingLeft: 15,
    borderWidth: 0.25,
  },
});
