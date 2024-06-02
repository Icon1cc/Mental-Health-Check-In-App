import { ConvexClientProvider } from "@/providers/convex-client-providers";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Pacifico_400Regular, useFonts } from "@expo-google-fonts/pacifico";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Load the app's fonts.
  const [loaded] = useFonts({
    NiveauGroteskLight: require("../assets/fonts/NiveauGroteskLight.otf"),
    NiveauGroteskLightItalic: require("../assets/fonts/NiveauGroteskLight-Italic.otf"),
    NiveauGrotesk: require("../assets/fonts/NiveauGroteskRegular.otf"),
    NiveauGroteskRegularSmallcaps: require("../assets/fonts/NiveauGroteskRegular-SmallCaps.otf"),
    NiveauGroteskMedium: require("../assets/fonts/NiveauGroteskMedium.otf"),
    NiveauGroteskBold: require("../assets/fonts/NiveauGroteskBold.otf"),
    Pacifico: Pacifico_400Regular,
  });

  // Hide the splash screen when the app is loaded.
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
      <SafeAreaProvider>
        <ThemeProvider value={DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(app)" />
            <Stack.Screen name="welcome" />
            <Stack.Screen name="sign-up" />
          </Stack>
        </ThemeProvider>
        <StatusBar style="light" />
      </SafeAreaProvider>
    </ConvexClientProvider>
  );
}
