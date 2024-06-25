import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

import VerticalBox from "@/components/leaderboard/vertical-box";
import PodiumBox from "@/components/leaderboard/horizontal-box";
import DATA from "@/assets/data/user.json";

interface ListHeaderComponentProps {
  username: string;
  score: number;
}

function ListHeader({ username, score }: ListHeaderComponentProps) {
  return (
    <View style={styles.header}>
      <VerticalBox position={2} username={username} score={score} />
      <VerticalBox position={1} username={username} score={score} first />
      <VerticalBox position={3} username={username} score={score} />
    </View>
  );
}

export default function LeaderBoard() {
  // Logic in order to filter the data. INSERT HERE.
  return (
    <View style={{ flex: 1 }}>
      <ListHeader username="Mike L." score={0} />
      <FlatList
        data={DATA}
        ListEmptyComponent={<Text>No data</Text>}
        style={styles.listContainer}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentInsetAdjustmentBehavior="automatic"
        renderItem={({ item, index }) => (
          <PodiumBox
            position={index + 4}
            username={item.username}
            score={item.score}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 17,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "white",
    borderStartStartRadius: 30,
    borderStartEndRadius: 30,
    padding: 17,
  },
});
