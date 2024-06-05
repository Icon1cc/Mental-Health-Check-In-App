import { View, FlatList, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState, useEffect } from "react";

import Question from "@/components/quizz/question";

const url = "https://the-trivia-api.com/api/questions";

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

  // State to store the questions.
  const [data, setData] = useState([]);

  // Ref to the FlatList.
  const _FlatList = useRef<FlatList>(null);

  // Fetch the questions.
  const fetchQuestions = async () => {
    try {
      const params = new URLSearchParams({
        limit: "5",
        difficulties: "hard",
        categories: "science",
      });
      const response = await fetch(`${url}?${params}`);
      const data = await response.json();
      setData(
        data.map((question: any) => ({
          question: question.question,
          answers: question.incorrectAnswers,
          correctAnswer: question.correctAnswer,
        }))
      );
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
        paddingBottom: insets.bottom + 17 * 2,
      }}
    >
      <TimeBar />
      <FlatList
        ref={_FlatList}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
        keyExtractor={(item) => item.correctAnswer}
        renderItem={({ item, index }) => (
          <Question
            totalQuestions={data.length}
            currentQuestion={index + 1}
            question={item.question}
            answers={item.answers}
            correctAnswer={item.correctAnswer}
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
