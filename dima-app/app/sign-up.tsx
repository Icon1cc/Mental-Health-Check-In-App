import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { useSignUp } from "@clerk/clerk-expo";
import React, { useState } from "react";

import Colors from "@/constants/Colors";
import Header from "@/components/authentication/title-header";
import Input from "@/components/authentication/input";
import Button from "@/components/authentication/button";

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [subtitle, setSubtitle] = useState(
    "Create an account to access all the features of BrainMe!"
  );
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

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
      setSubtitle(
        "Please check your email for a verification code to complete the registration."
      );
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
      router.replace("/");
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
        <View style={styles.container}>
          <Header title="Register" subtitle={subtitle} />
          {pendingVerification ? (
            <View style={{ gap: 40 }}>
              <Input
                title="Verification Code"
                placeholder="EX: 123456"
                value={verificationCode}
                textAlign="center"
                maxLength={6}
                onChangeText={setVerificationCode}
                keyboardType="number-pad"
                secureTextEntry={false}
              />
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
                  keyboardType="email-address"
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
                <Link replace href={"/welcome"} asChild>
                  <Pressable>
                    <Text style={styles.login}>Login</Text>
                  </Pressable>
                </Link>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 17,
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
