import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";

import Header from "@/components/auth/header";
import Input from "@/components/auth/input";
import Separator from "@/components/auth/separator";
import AuthButton from "@/components/auth/auth-button";

// This function clears the authentication session when the component is unmounted.
WebBrowser.maybeCompleteAuthSession();

// This enum defines the available authentication providers.
enum Strategy {
  Google = "oauth_google",
  Apple = "oauth_apple",
  Facebook = "oauth_facebook",
}

export default function SignUp() {
  // This hook warms up the browser to make the OAuth flow faster.
  useWarmUpBrowser();

  // This hook provides the router object, which allows you to navigate between screens.
  const router = useRouter();

  // This hook provides information about the user's authentication state.
  const { isLoaded, isSignedIn } = useUser();

  // This hook initializes the OAuth flow for each provider.
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: "oauth_facebook",
  });

  // This function is called when the user selects an authentication provider.
  // It starts the OAuth flow for the selected provider.
  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
      [Strategy.Facebook]: facebookAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };

  // This effect redirects the user to the home screen if they are already signed in.
  // It runs when the user's authentication state changes.
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/");
    }
  }, [isLoaded, isSignedIn]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#024959", gap: 17 }}>
      <Header />
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        style={styles.container}
      >
        <Input
          title="Email"
          placeholder="winner@email.com"
          keyboardType="email-address"
        />
        <Input title="Your username" placeholder="Rookie123" />
        <Input title="Your password" placeholder="*****************" />
        <Separator />
        <View style={styles.authContainer}>
          <AuthButton
            image="google"
            onPress={() => onSelectAuth(Strategy.Google)}
          />
          <AuthButton
            image="facebook"
            onPress={() => onSelectAuth(Strategy.Facebook)}
          />
          <AuthButton
            image="apple"
            onPress={() => onSelectAuth(Strategy.Apple)}
          />
        </View>
        <Pressable style={styles.pressable}>
          <Text style={{ color: "white", fontSize: 20, letterSpacing: 2 }}>
            Sign up
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentContainer: {
    paddingHorizontal: 17,
    paddingTop: 34,
    gap: 34,
  },
  authContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pressable: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#024959",
    borderRadius: 15,
  },
});
