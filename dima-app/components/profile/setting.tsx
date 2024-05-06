import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

interface SettingProps {
  title: string;
}

const Setting = ({ title }: SettingProps) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>{title}</Text>
      <Ionicons name="chevron-forward" size={24} color="black" />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
