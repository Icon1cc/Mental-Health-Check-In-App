import { View, StyleSheet } from "react-native";
import React from "react";

import Stat from "./stat";

interface GridProps {
  rank: number;
  gamesPlayed: number;
  points: number;
  completionRate: number;
  correctAnswers: number;
  wrongAnswers: number;
}

export default function Grid(props: GridProps) {
  return (
    <View style={{ gap: 17 }}>
      <View style={styles.grid}>
        <Stat
          number={props.rank}
          hashtag
          description="Leaderboard ranking"
          icon="star"
        />
        <Stat
          number={props.gamesPlayed}
          description="Quizz completed"
          icon="joystick"
        />
        <Stat number={props.points} description="Total points" icon="coin" />
      </View>
      <View style={styles.grid}>
        <Stat
          number={props.completionRate}
          percentage
          description="Completion rate"
          icon="poition"
        />
        <Stat
          number={props.correctAnswers}
          percentage
          description="Correct answers"
          icon="target"
        />
        <Stat
          number={props.wrongAnswers}
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
