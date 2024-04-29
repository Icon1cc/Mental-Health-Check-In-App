import { StyleSheet, Text, View, Pressable, Image } from "react-native";

import { Fontisto } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

import { Link } from "expo-router";

import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";

import React from "react";

const Placeholder = require("@/assets/images/authentication/google.png");
<<<<<<< Updated upstream
const Placeholderlogo = require("@/assets/images/logo.png");
=======
const PlaceholderLogo = require("@/assets/images/logo.png");
>>>>>>> Stashed changes

WebBrowser.maybeCompleteAuthSession();

enum Strategy {
  Google = "oauth_google",
}

const WelcomeScreen = () => {
  useWarmUpBrowser(); // Android to load up the screen faster.

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
      }
    } catch (err) {
      console.error("OAuth error: ", err);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ gap: 5 }}>
        <Image
<<<<<<< Updated upstream
          source={Placeholderlogo}
=======
          source={PlaceholderLogo}
>>>>>>> Stashed changes
          style={{
            width: 150,
            height: 150,
            resizeMode: "contain",
            borderRadius: 100,
          }}
        />
        <Text style={{ width: 180, fontSize: 24, paddingLeft: 10 }}>
          Welcome to
          <Text style={{ fontSize: 40, fontFamily: "niv-b" }}> BrainMe</Text>
        </Text>
        <Text style={{ fontSize: 18, paddingLeft: 10 }}>
          A place where you can track all your expenses and incomes...
        </Text>
      </View>

      <View style={{ gap: 15 }}>
        <Text style={{ fontSize: 16, fontFamily: "niv-b", paddingLeft: 5 }}>
          Let’s Get Started...
        </Text>
        <View style={{ gap: 10 }}>
          <Pressable
            style={styles.button}
            onPress={() => onSelectAuth(Strategy.Google)}
          >
            <Image source={Placeholder} style={{ width: 26, height: 26 }} />
            <Text style={{}}>Continue with Google</Text>
          </Pressable>
          <Link href="/(auth)/sign-in" asChild>
            <Pressable style={styles.button}>
              <Fontisto name="email" size={24} color="black" />
              <Text style={{}}>Continue with Email</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={{ fontFamily: "niv-l", fontSize: 16 }}>
          Don't have an account?
        </Text>
        <Pressable>
          <Text style={styles.login}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 40,
    paddingHorizontal: 15,
  },
  button: {
    height: 50,
    borderRadius: 15,
    borderWidth: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
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

export default WelcomeScreen;
