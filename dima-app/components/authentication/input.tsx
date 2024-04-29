import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

interface InputProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry: boolean;
}

const Input = ({
  title,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);
  return (
    <View style={{ gap: 5 }}>
      <Text style={{ fontSize: 16, paddingLeft: 4 }}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={"#A0A0A0"}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          secureTextEntry={showPassword}
        />
        {secureTextEntry ? (
          showPassword ? (
            <MaterialIcons
              name="visibility-off"
              size={24}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          ) : (
            <MaterialIcons
              name="visibility"
              size={24}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          )
        ) : null}
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 0.25,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  input: {
    height: "100%",
    flex: 1,
  },
});
