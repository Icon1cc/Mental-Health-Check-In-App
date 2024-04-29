import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
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
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={[
            styles.container,
            { height: Dimensions.get("window").height },
          ]}
          keyboardVerticalOffset={100}
        >
          <Header
            title="Login"
            subtitle="Login now to track all your expenses and income at a place!"
          />

          <View style={{ gap: 20 }}>
            <Input
              title="Email"
              placeholder="Ex:abc@gmail.com"
              value={email}
              onChangeText={setEmail}
            />
            <View style={{ gap: 10 }}>
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

          <View style={{ flex: 1 }} />

          <Button title="LOGIN" onPress={() => {}} />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    gap: 40,
    backgroundColor: "red",
  },
});
