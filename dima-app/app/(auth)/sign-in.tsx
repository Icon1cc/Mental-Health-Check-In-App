import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

import Header from "@/components/authentication/title-header";
import Input from "@/components/authentication/input";
import Button from "@/components/authentication/button";

import React, { useState } from "react";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1 }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
              <Header
                title="Login"
                subtitle="Login now to track all your expenses and income at a place!"
              />

              <View style={{ gap: 30 }}>
                <Input
                  title="Email"
                  placeholder="Ex:abc@gmail.com"
                  value={email}
                  onChangeText={setEmail}
                />
                <View style={{ gap: 15 }}>
                  <Input
                    title="Your Password"
                    placeholder="Insert your password here..."
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                  />
                  <Link href={"/(auth)/forgot"} asChild>
                    <Pressable>
                      <Text
                        style={{
                          color: Colors.secondary,
                          textDecorationLine: "underline",
                        }}
                      >
                        Forgot Password?
                      </Text>
                    </Pressable>
                  </Link>
                </View>
              </View>

              <Button title="LOGIN" onPress={() => {}} />

              <View style={styles.footer}>
                <Text style={{ fontFamily: "niv-l", fontSize: 16 }}>
                  Don't have an account?
                </Text>
                <Pressable>
                  <Text style={styles.login}>Register</Text>
                </Pressable>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 15,
    gap: 40,
  },
  footer: {
    marginTop: 30,
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
