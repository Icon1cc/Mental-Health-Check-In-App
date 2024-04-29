import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
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

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Header
              title="Register"
              subtitle="Create an account to access all the features of BrainMe!"
            />
            1024x1024
            <View style={{ gap: 30 }}>
              <Input
                title="Email"
                placeholder="Ex:abc@gmail.com"
                value={email}
                onChangeText={setEmail}
                secureTextEntry={false}
              />
              <Input
                title="Your Name"
                placeholder="Ex:John Smith"
                value={name}
                onChangeText={setName}
                secureTextEntry={false}
              />

              <Input
                title="Your Password"
                placeholder="Insert your password here..."
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>
            <Button title="REGISTER" onPress={() => {}} />
            <View style={styles.footer}>
              <Text style={{ fontFamily: "niv-l", fontSize: 16 }}>
                Already have an account?
              </Text>
              <Link replace href={"/(auth)/sign-in"} asChild>
                <Pressable>
                  <Text style={styles.login}>Login</Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 15,
    gap: 40,
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
