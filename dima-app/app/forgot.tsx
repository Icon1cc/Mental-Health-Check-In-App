import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";

import Header from "@/components/authentication/title-header";
import Input from "@/components/authentication/input";
import Button from "@/components/authentication/button";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [selectedOption, setSelectedOption] = useState<1 | 2 | 3>(3); // Initial option is 1.

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1 }}>
        {selectedOption === 1 && (
          <View style={styles.container}>
            <Header
              title="Forgot Password"
              subtitle="Recover your password if you have forgot the password!"
            />
            <Input
              title="Email"
              placeholder="Ex: abc@gmail.com"
              value={email}
              onChangeText={setEmail}
              secureTextEntry={false}
              keyboardType="email-address"
            />
            <Button title="SUBMIT" onPress={() => {}} />
          </View>
        )}
        {selectedOption === 2 && (
          <View style={styles.container}>
            <Header
              title="Forgot Password"
              subtitle="We have sent an email to your email account with a verification code!"
            />
            <Input
              title="Verification Code"
              placeholder="Ex: 123456"
              value={email}
              onChangeText={setEmail}
              secureTextEntry={false}
              keyboardType="number-pad"
              textAlign="center"
            />
            <Button title="SUBMIT" onPress={() => {}} />
          </View>
        )}
        {selectedOption === 3 && (
          <View style={styles.container}>
            <Header
              title="Forgot Password"
              subtitle="Set your new password to login into your account!"
            />
            <Input
              title="Enter New Password"
              placeholder="Insert your password here..."
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry={true}
            />
            <Button title="SUBMIT" onPress={() => {}} />
          </View>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Forgot;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
    gap: 30,
  },
});
