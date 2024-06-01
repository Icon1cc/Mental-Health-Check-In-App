import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import React from "react";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          signOut();
        }}
      >
        <Text>Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
  },
});
