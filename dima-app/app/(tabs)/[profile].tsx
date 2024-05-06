import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import React from "react";

import Background from "@/components/profile/profile-background";
import AccountSettings from "@/components/profile/account-settings";
import More from "@/components/profile/more";

const Placeholder = require("@/assets/images/profile/johnny.jpg");

const Separator = () => {
  return <View style={{ borderWidth: 0.3, borderColor: "#CACACA" }} />;
};

const Profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F1F1" }}>
      <Background />
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={Placeholder} style={styles.image} />
          <Text style={{ fontSize: 18 }}>Alexandre Boving</Text>
        </View>
        <Separator />
        <ScrollView
          contentContainerStyle={{ gap: 20, paddingTop: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <AccountSettings />
          <Separator />
          <More />
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
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
