import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";

import AnswersButton from "./answers-button";

interface QuestionProps {
  totalQuestions: number;
  currentQuestion: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export default function Question({
  totalQuestions,
  currentQuestion,
  question,
  answers,
  correctAnswer,
}: QuestionProps) {
  const { width } = Dimensions.get("window");
  return (
    <View style={[styles.container, { width: width }]}>
      <View style={styles.headContainer}>
        <Text style={styles.remaining}>
          Question {currentQuestion} out of {totalQuestions}
        </Text>
        <Text style={styles.question}>{question}</Text>
      </View>
      <View style={{ gap: 17 }}>
        <AnswersButton answer={answers[0]} correctAnswer={correctAnswer} />
        <AnswersButton answer={answers[1]} correctAnswer={correctAnswer} />
        <AnswersButton answer={answers[2]} correctAnswer={correctAnswer} />
        <AnswersButton answer={answers[3]} correctAnswer={correctAnswer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingHorizontal: 17,
  },
  headContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  remaining: {
    fontFamily: "NiveauGroteskLight",
    fontSize: 20,
    color: "white",
    opacity: 0.5,
  },
  question: {
    fontFamily: "NiveauGroteskBold",
    fontSize: 38,
    color: "white",
    textAlign: "center",
  },
});
