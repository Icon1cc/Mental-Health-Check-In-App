import { Link } from "expo-router";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

interface HeaderLeftProps {
  backward: "/welcome" | "/sign-in" | "/(tabs)/profile";
  style?: string;
}

const HeaderLeft = ({ backward, style }: HeaderLeftProps) => {
  return (
    <Link href={backward} asChild>
      <Pressable>
        <Ionicons name="arrow-back-outline" size={24} color={style} />
      </Pressable>
    </Link>
  );
};

export default HeaderLeft;
