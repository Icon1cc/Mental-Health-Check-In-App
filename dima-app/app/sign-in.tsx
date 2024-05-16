import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { useSignIn } from "@clerk/clerk-expo";
import React, { useState } from "react";

import Colors from "@/constants/Colors";
import Header from "@/components/authentication/title-header";
import Input from "@/components/authentication/input";
import Button from "@/components/authentication/button";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      });

      await setActive({ session: completeSignIn.createdSessionId });
      if (completeSignIn.createdSessionId) {
        router.replace("/");
      }
    } catch (err: any) {
      console.log(err, "Error: ", JSON.stringify(err, null, 2));
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Header
            title="Log In"
            subtitle="Login now to track all your expenses and income at a place!"
          />

          <View style={{ gap: 30 }}>
            <Input
              title="Email"
              placeholder="Ex:abc@gmail.com"
              value={email}
              onChangeText={setEmail}
              secureTextEntry={false}
            />
            <View style={{ gap: 15 }}>
              <Input
                title="Your Password"
                placeholder="Insert your password here..."
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
              <Link href={"/forgot"} asChild>
                <Pressable>
                  <Text style={styles.forgot}>Forgot Password?</Text>
                </Pressable>
              </Link>
            </View>
          </View>

          <Button title="LOGIN" onPress={onSignInPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 17,
    gap: 40,
  },
  forgot: {
    color: Colors.secondary,
    textDecorationLine: "underline",
  },
});
