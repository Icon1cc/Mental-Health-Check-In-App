import { View, Text, StyleSheet } from "react-native";
import React from "react";

import Stat from "./stat";

interface GridProps {}

export default function Grid() {
  return (
    <View style={{ gap: 17 }}>
      <View style={styles.grid}>
        <Stat number={123} description="Total Points" />
        <Stat number={12} description="Games played" />
        <Stat number={12} percentage description="World Rank" />
      </View>
      <View style={styles.grid}>
        <Stat number={123} description="Total Points" />
        <Stat number={12} description="Games played" />
        <Stat number={12} percentage description="World Rank" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
  },
});
