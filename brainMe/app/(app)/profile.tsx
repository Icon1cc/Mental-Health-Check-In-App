import { View, StyleSheet } from "react-native";
import React from "react";
import ImageViewer from "@/components/imageViewer";

import Header from "@/components/profile/header";
import Friends from "@/components/profile/friends";
import Grid from "@/components/profile/grid";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageViewer size={90} />
      </View>
      <Header title="Jessica Richman" subtitle="@Rookie123" />
      <Grid />
      <Friends numberFriends={6} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    marginTop: 51 + 17,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 17,
    paddingTop: 51,
    gap: 34,
  },
  image: {
    position: "absolute",
    alignSelf: "center",
    top: -45,
  },
});
