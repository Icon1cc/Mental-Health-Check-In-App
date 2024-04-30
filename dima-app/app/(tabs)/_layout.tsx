import { Redirect } from "expo-router";
import { useConvexAuth } from "convex/react";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    // We return a loading screen here.
  }

  if (!isAuthenticated) {
    // We return the authenticated layout here.
    return <Redirect href="/(auth)/welcome" />;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
