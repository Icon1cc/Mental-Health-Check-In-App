import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";

import Colors from "@/constants/Colors";
import AccountSettings from "@/components/account/account-settings";
import More from "@/components/account/more";

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F1F1F1" }}>
      <View style={styles.background} />
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image
            source={require("@/assets/images/profile/johnny.jpg")}
            style={styles.image}
          />
          <Text style={{ fontSize: 20 }}>Alexandre Boving</Text>
        </View>
        <Separator />
        <ScrollView
          contentContainerStyle={{ gap: 17 }}
          showsVerticalScrollIndicator={false}
        >
          <AccountSettings />
          <Separator />
          <More />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function Separator() {
  return <View style={{ borderWidth: 0.3, borderColor: "#CACACA" }} />;
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    height: 250,
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  container: {
    flex: 1,
    marginHorizontal: 17,
    backgroundColor: "white",
    borderStartStartRadius: 12,
    borderStartEndRadius: 12,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 17,
    gap: 17,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
