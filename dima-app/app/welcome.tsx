import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { Link, useRouter } from "expo-router";
import { useOAuth } from "@clerk/clerk-expo";
import React from "react";

import Colors from "@/constants/Colors";
import Signer from "@/components/authentication/welcome/signer";

WebBrowser.maybeCompleteAuthSession();

enum Strategy {
  Google = "oauth_google",
}

export default function WelcomeScreen() {
  useWarmUpBrowser(); // Android to load up the screen faster.
  const router = useRouter();

  const { startOAuthFlow: googleAuth } = useOAuth({
    strategy: Strategy.Google,
  });

  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();
      // The user has successfully logged in.
      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (err) {
      console.error("OAuth error: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ gap: 3, paddingLeft: 10 }}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={{ width: 180, fontSize: 24 }}>
          Welcome to
          <Text style={{ fontSize: 40, fontFamily: "niv-b" }}> BrainMe</Text>
        </Text>
        <Text style={{ fontSize: 18 }}>
          A place where you can track all your expenses and incomes...
        </Text>
      </View>

      <View style={{ gap: 17 }}>
        <Text style={{ fontSize: 16, fontFamily: "niv-b", paddingLeft: 5 }}>
          Let’s Get Started...
        </Text>
        <View style={{ gap: 10 }}>
          <Signer
            title="Continue with Google"
            type="google"
            onPress={() => onSelectAuth(Strategy.Google)}
          />
          <Signer title="Continue with Email" type="email" />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={{ fontFamily: "niv-l", fontSize: 16 }}>
          Don't have an account?
        </Text>
        <Link href="/sign-up" asChild>
          <Pressable>
            <Text style={styles.login}>Register</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 17,
    gap: 40,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 100,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  login: {
    fontFamily: "niv-l",
    fontSize: 16,
    color: Colors.secondary,
    textDecorationLine: "underline",
  },
});
