import { StatusBar } from "expo-status-bar";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import { ConvexClientProvider } from "@/providers/convex-client-providers";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
      <StatusBar style="dark" />
    </ConvexClientProvider>
  );
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen
          name="sign-in"
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => {
              return (
                <Link href="/welcome" asChild>
                  <Pressable
                    style={{
                      width: 60,
                      height: 60,
                      paddingTop: 15,
                    }}
                  >
                    <Ionicons
                      name="arrow-back-outline"
                      size={30}
                      color="black"
                    />
                  </Pressable>
                </Link>
              );
            },
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => {
              return (
                <Link href="/welcome" asChild>
                  <Pressable
                    style={{
                      width: 60,
                      height: 60,
                      paddingTop: 15,
                    }}
                  >
                    <Ionicons
                      name="arrow-back-outline"
                      size={30}
                      color="black"
                    />
                  </Pressable>
                </Link>
              );
            },
          }}
        />
        <Stack.Screen
          name="forgot"
          options={{
            headerTransparent: true,
            headerTitle: "",
            headerLeft: () => {
              return (
                <Link href="/sign-in" asChild>
                  <Pressable
                    style={{
                      width: 60,
                      height: 60,
                      paddingTop: 15,
                    }}
                  >
                    <Ionicons
                      name="arrow-back-outline"
                      size={30}
                      color="black"
                    />
                  </Pressable>
                </Link>
              );
            },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
