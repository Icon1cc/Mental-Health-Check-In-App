import { View, Text } from "react-native";
import React from "react";

interface TitleHeaderProps {
  title: string;
  subtitle: string;
}

const TitleHeader = ({ title, subtitle }: TitleHeaderProps) => {
  return (
    <View style={{ gap: 10, width: 300 }}>
      <Text style={{ fontFamily: "niv-b", fontSize: 32 }}>{title}</Text>
      <Text>{subtitle}</Text>
    </View>
  );
};

export default TitleHeader;
