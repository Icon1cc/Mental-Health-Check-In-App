import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack as ExpoStack } from "expo-router";
import { ConvexClientProvider } from "@/providers/convex-client-providers";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import WelcomeScreen from '../components/authentication/sign_up';
import { createStackNavigator } from "@react-navigation/stack";

export {
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
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
      <StatusBar style="auto" />
    </ConvexClientProvider>
  );
}

const Stack = createStackNavigator();

function RootLayoutNav() {
  return (
    <ConvexClientProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          {/* ...other routes */}
        </Stack.Navigator>
      </ThemeProvider>
      <StatusBar style="auto" />
    </ConvexClientProvider>
  );
}
