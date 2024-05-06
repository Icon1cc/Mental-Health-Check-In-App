import { Link } from "expo-router";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

interface HeaderLeftProps {
  backward: "/welcome" | "/sign-in";
}

const HeaderLeft = ({ backward }: HeaderLeftProps) => {
  return (
    <Link href={backward} asChild>
      <Pressable
        style={{
          width: 60,
          height: 60,
          paddingTop: 15,
        }}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </Pressable>
    </Link>
  );
};

export default HeaderLeft;
