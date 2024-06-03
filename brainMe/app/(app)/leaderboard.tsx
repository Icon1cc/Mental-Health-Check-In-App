import { View, Text, FlatList } from "react-native";
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
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
      }}
    >
      <VerticalBox position={2} username={username} score={score} />
      <VerticalBox position={1} username={username} score={score} top />
      <VerticalBox position={3} username={username} score={score} />
    </View>
  );
}

export default function LeaderBoard() {
  // Logic in order to filter the data. INSERT HERE.
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={DATA}
        ListHeaderComponent={<ListHeader username="Mike L." score={0} />}
        ListHeaderComponentStyle={{ marginBottom: 17 }}
        ListEmptyComponent={<Text>No data</Text>}
        ItemSeparatorComponent={() => <View style={{ height: 17 }} />}
        contentContainerStyle={{ padding: 17 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <PodiumBox
            position={index + 1}
            username={item.username}
            score={item.score}
          />
        )}
      />
    </View>
  );
}
