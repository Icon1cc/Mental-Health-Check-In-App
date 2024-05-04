import { Text } from "react-native";
import { useConvexAuth } from "convex/react";
import { Redirect, Stack, useRouter } from "expo-router";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

export default function Layout() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();
  console.log("Layout useUser: ", isLoaded, isSignedIn);
  //const { isLoading, isAuthenticated } = useConvexAuth();
  //console.log("Layout useConvex: ", isLoading, isAuthenticated);

  // We can keep the splack sceen open, or render a loading screen like we can do here.
  if (!isLoaded) {
    return <Text>Loading...</Text>;
  }

  if (!isSignedIn) {
    return <Redirect href={"/welcome"} />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
