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

const SignIn = () => {
  const [email, setEmail] = useState("");
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
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 15,
    gap: 40,
  },
});
