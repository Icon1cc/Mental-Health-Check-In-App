import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Setting from "./setting";

const More = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#ADADAD", fontSize: 18 }}>More</Text>
      <Setting title="About us" />
      <Setting title="Privacy poliy" />
      <Setting title="Sign out" />
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    gap: 30,
  },
});
