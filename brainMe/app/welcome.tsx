import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useUser } from "@clerk/clerk-expo";
import React, { useEffect } from "react";

// This function clears the authentication session when the component is unmounted.
WebBrowser.maybeCompleteAuthSession();

// This enum defines the available authentication providers.
enum Strategy {
  Google = "oauth_google",
  Apple = "oauth_apple",
  Facebook = "oauth_facebook",
}

export default function Welcome() {
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
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          onSelectAuth(Strategy.Google);
        }}
      >
        <Text>Log in</Text>
      </Pressable>
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
    padding: 10,
    borderRadius: 5,
  },
});
