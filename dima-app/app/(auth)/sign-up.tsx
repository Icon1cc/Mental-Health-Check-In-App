import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import Header from "@/components/authentication/title-header";

import React from "react";

const SignUp = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header
          title="Register"
          subtitle="Create an account to access all the features of BrainMe!"
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    gap: 20,
  },
});
