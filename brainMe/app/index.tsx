import { View, Text, SafeAreaView } from "react-native";
import React from "react";

// Backend API.
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const addUser = useMutation(api.user.addUser);

  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
}
