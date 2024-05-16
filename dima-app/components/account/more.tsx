import { View, Text, Pressable, StyleSheet } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import React from "react";

import Setting from "./setting";

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return (
    <Pressable
      onPress={() => {
        signOut();
      }}
    >
      <Text style={{ fontSize: 18, color: "red" }}>Sign out</Text>
    </Pressable>
  );
};

const More = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "gray", fontSize: 18, fontFamily: "niv-l" }}>
        More
      </Text>
      <Setting title="About us" />
      <Setting title="Privacy poliy" />
      <SignOut />
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    gap: 30,
  },
});
