import { View, FlatList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

import Question from "@/components/quizz/question";

const url = "https://the-trivia-api.com/api/questions";

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

  const [data, setData] = useState([]);

  // Ref to the FlatList.
  const _FlatList = useRef<FlatList>(null);

  // Fetch the questions.
  const fetchQuestions = async () => {
    try {
      const params = {
        limit: 5,
        difficulty: "hard",
        category: "science",
      };
      const response = await axios.get(`${url}`, { params });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Scroll to the next question.
  const scrollToNextQuestion = () => {
    _FlatList.current?.scrollToIndex({
      index: 1,
      animated: true,
    });
  };

  /*useEffect(() => {
    const interval = setInterval(() => {
      scrollToNextQuestion();
    }, 10000);

    return () => clearInterval(interval);
  }, []);*/

  // Fetch the questions when the component mounts.
  useEffect(() => {
    fetchQuestions();
  }, []);
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
