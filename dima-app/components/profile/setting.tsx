import { Text, Switch, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import React, { useState } from "react";

interface SettingProps {
  title: string;
  lever?: boolean;
}

const Setting = ({ title, lever }: SettingProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>{title}</Text>
      {lever ? (
        <Switch
          trackColor={{ false: "#767577", true: Colors.primary }}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      ) : (
        <Ionicons name="chevron-forward" size={24} color="black" />
      )}
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
