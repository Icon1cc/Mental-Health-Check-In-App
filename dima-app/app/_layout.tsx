import { StatusBar } from "expo-status-bar";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { ConvexClientProvider } from "@/providers/convex-client-providers";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    NiveauGrotesk: require("../assets/fonts/NiveauGroteskRegular.otf"),
    "niv-b": require("../assets/fonts/NiveauGroteskBold.otf"),
    "niv-l": require("../assets/fonts/NiveauGroteskLight.otf"),
    "niv-li": require("../assets/fonts/NiveauGroteskLight-Italic.otf"),
    "niv-r-smallcaps": require("../assets/fonts/NiveauGroteskRegular-SmallCaps.otf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ConvexClientProvider>
      <RootLayoutNav />
    </ConvexClientProvider>
  );
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Slot />
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
