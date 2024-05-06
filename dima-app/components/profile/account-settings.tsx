import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

import Setting from "./setting";
import { Link } from "expo-router";

const AccountSettings = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#ADADAD", fontSize: 18 }}>Account Settings</Text>
      <Link href={"/accounts/edit"} asChild>
        <Pressable>
          <Setting title="Edit Profile" />
        </Pressable>
      </Link>
      <Link href={"/accounts/change-password"} asChild>
        <Pressable>
          <Setting title="Change password" />
        </Pressable>
      </Link>
      <Setting title="Select another idea" />
      <Setting title="Push notifications" lever={true} />
    </View>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    gap: 30,
  },
});
