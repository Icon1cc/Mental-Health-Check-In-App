import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TextInput,
} from "react-native";

import Header from "@/components/authentication/title-header";
import Input from "@/components/authentication/input";
import Button from "@/components/authentication/button";

import React, { useState } from "react";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

const SignUp = () => {
  const [subtitle, setSubtitle] = useState(
    "Create an account to access all the features of BrainMe!"
  );
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [verification, setVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Header title="Register" subtitle={subtitle} />
            {verification ? (
              <View style={{ gap: 40 }}>
                <View style={{ gap: 5 }}>
                  <Text style={{ fontSize: 16, paddingLeft: 4 }}>
                    Verification Code
                  </Text>
                  <TextInput
                    placeholder={"EX: 123456"}
                    placeholderTextColor={"#A0A0A0"}
                    value={verificationCode}
                    onChangeText={setVerificationCode}
                    textAlign="center"
                    keyboardType="number-pad"
                    maxLength={6}
                    style={styles.input}
                  />
                </View>
                <Button
                  title="SUBMIT"
                  onPress={() => {
                    setVerification(true);
                    setSubtitle(
                      "Please check your email to verify your account."
                    );
                  }}
                />
              </View>
            ) : (
              <>
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
                <Button
                  title="REGISTER"
                  onPress={() => {
                    setVerification(true);
                    setSubtitle(
                      "Please check your email to verify your account."
                    );
                  }}
                />
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
              </>
            )}
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
  input: {
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 0.25,
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
