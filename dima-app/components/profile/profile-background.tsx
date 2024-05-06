import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const ProfileBackground = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Ionicons name="settings-outline" size={32} color="white" />
        <Text style={{ color: "white", fontSize: 32, fontFamily: "niv-b" }}>
          Settings
        </Text>
      </View>
    </View>
  );
};

export default ProfileBackground;

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    width: "100%",
    height: 250,
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 15,
    backgroundColor: "#367B62",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  header: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
