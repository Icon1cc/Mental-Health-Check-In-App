import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import React from "react";

export default function Home() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Link href="/quizz" asChild>
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            padding: 20,
          }}
        >
          <Text>Start Quizz</Text>
        </Pressable>
      </Link>
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
