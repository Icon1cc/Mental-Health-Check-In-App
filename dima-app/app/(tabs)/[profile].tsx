import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import React from "react";

import Background from "@/components/profile/profile-background";
import Setting from "@/components/profile/setting";

const Placeholder = require("@/assets/images/profile/johnny.jpg");

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F1F1" }}>
      <Background />
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={Placeholder} style={styles.image} />
          <Text style={{ fontSize: 18 }}>Alexandre Boving</Text>
        </View>
        <View style={{ borderWidth: 0.25, borderColor: "#CACACA" }} />
        <ScrollView contentContainerStyle={{ gap: 30, paddingVertical: 15 }}>
          <Text style={{ color: "#ADADAD", fontSize: 18 }}>
            Account Settings
          </Text>
          <Setting title="Edit Profile" />
          <Setting title="Change password" />
          <Setting title="Select another idea" />
          <Setting title="Push notifications" />
          <View style={{ borderWidth: 0.4, borderColor: "#CACACA" }} />
        </ScrollView>
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
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingTop: 15,
    paddingBottom: 25,
    paddingHorizontal: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
