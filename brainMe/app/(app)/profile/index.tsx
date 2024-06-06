import { View, StyleSheet } from "react-native";
import React from "react";

import ImageViewer from "@/components/imageViewer";
import Header from "@/components/profile/header";
import Grid from "@/components/profile/grid";
import FootButtons from "@/components/profile/foot-buttons";
import FootFriends from "@/components/profile/foot-friends";

const DATA = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
];

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageViewer size={90} />
      </View>
      <Header title="Jessica Richman" subtitle="@Rookie123" />
      <Grid />
      <View style={{ flex: 1 }} />
      <FootButtons onPressFollow={() => {}} />
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
    paddingVertical: 51,
    gap: 34,
  },
  image: {
    position: "absolute",
    alignSelf: "center",
    top: -45,
  },
});
