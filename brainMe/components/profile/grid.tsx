import { View, StyleSheet } from "react-native";
import React from "react";

import Stat from "./stat";

export default function Grid() {
  return (
    <View style={{ gap: 17 }}>
      <View style={styles.grid}>
        <Stat number={123} hashtag description="World rank" icon="star" />
        <Stat number={12} description="Games played" icon="joystick" />
        <Stat number={1084} description="Points total" icon="coin" />
      </View>
      <View style={styles.grid}>
        <Stat
          number={123}
          percentage
          description="Completion rate"
          icon="poition"
        />
        <Stat
          number={12}
          percentage
          description="Correct answers"
          icon="target"
        />
        <Stat
          number={12}
          percentage
          description="Incorrect answers"
          icon="skull"
        />
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
