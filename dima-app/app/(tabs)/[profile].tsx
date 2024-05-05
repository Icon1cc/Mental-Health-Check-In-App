import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import Background from "@/components/profile/profile-background";

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F1F1" }}>
      <Background />
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 100,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderStartStartRadius: 15,
    borderStartEndRadius: 15,
    padding: 15,
  },
});
