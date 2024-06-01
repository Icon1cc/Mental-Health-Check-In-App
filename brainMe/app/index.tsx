import { View, Text, SafeAreaView } from "react-native";
import React from "react";

// Backend API.
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

import SplashScreen from "@/components/splash-screen";

export default function Home() {
  const addUser = useMutation(api.user.addUser);

  return <SplashScreen />;
}
