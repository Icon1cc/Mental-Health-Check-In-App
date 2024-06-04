import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";

import Question from "@/components/quizz/question";

const DATA = [
  {
    id: 1,
    title: "Question 1",
  },
  {
    id: 2,
    title: "Question 2",
  },
  {
    id: 3,
    title: "Question 3",
  },
  {
    id: 4,
    title: "Question 4",
  },
  {
    id: 5,
    title: "Question 5",
  },
];

function TimeBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 17,
      }}
    >
      <Ionicons name="hourglass-outline" size={24} color="white" />
      <View style={styles.timeBarContainer}>
        <View
          style={{ backgroundColor: "white", width: "70%", height: "100%" }}
        />
      </View>
    </View>
  );
}

export default function Quizz() {
  // Get the safe area insets.
  const insets = useSafeAreaInsets();

  // Ref to the FlatList.
  const _FlatList = useRef<FlatList>(null);

  // Scroll to the next question.
  const scrollToNextQuestion = () => {
    _FlatList.current?.scrollToIndex({
      index: 1,
      animated: true,
    });
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top + 17 * 2,
        paddingBottom: insets.bottom,
      }}
    >
      <TimeBar />
      <FlatList
        ref={_FlatList}
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Question
            totalQuestions={DATA.length}
            currentQuestion={item.id}
            question="What is the capital of France?"
            answers={["Paris", "London", "Berlin", "Madrid"]}
            correctAnswer="Paris"
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timeBarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 12,
  },
});
