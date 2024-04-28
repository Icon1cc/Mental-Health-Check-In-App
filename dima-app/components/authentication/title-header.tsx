import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface TitleHeaderProps {
  title: string;
  subtitle: string;
}

const TitleHeader = ({ title, subtitle }: TitleHeaderProps) => {
  return (
    <View>
      <Text>TitleHeader</Text>
    </View>
  );
};

export default TitleHeader;

const styles = StyleSheet.create({});
