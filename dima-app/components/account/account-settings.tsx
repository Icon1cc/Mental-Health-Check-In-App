import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

import Setting from "./setting";
import { Link } from "expo-router";

const AccountSettings = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "gray", fontSize: 18, fontFamily: "niv-l" }}>
        Account Settings
      </Text>
      <Link href={"/(tabs)/account/edit"} asChild>
        <Pressable>
          <Setting title="Edit Profile" />
        </Pressable>
      </Link>
      <Link href={"/(tabs)/account/change-password"} asChild>
        <Pressable>
          <Setting title="Change Password" />
        </Pressable>
      </Link>
      <Setting title="Select Another Idea" />
      <Setting title="Push Notifications" lever={true} />
    </View>
  );
};

export default AccountSettings;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 17,
    paddingTop: 17,
    gap: 30,
  },
});
