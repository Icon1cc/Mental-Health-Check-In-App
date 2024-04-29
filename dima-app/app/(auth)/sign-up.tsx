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

import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import { useSignUp } from "@clerk/clerk-expo";

import React, { useState } from "react";

const SignUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [subtitle, setSubtitle] = useState(
    "Create an account to access all the features of BrainMe!"
  );
  const [email, setEmail] = useState("alexandre.boving@gmail.com");
  const [name, setName] = useState("Alexandre");
  const [password, setPassword] = useState("@zecué.3.ZEveb!èèéoif");

  const [pendingVerification, setPendingVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        username: name,
        emailAddress: email,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

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
            {pendingVerification ? (
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
                <Button title="SUBMIT" onPress={onPressVerify} />
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
                <Button title="REGISTER" onPress={onSignUpPress} />
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
