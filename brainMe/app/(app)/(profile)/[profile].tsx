import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";

import { Id, Doc } from "@/convex/_generated/dataModel";

import ImageViewer from "@/components/imageViewer";
import Header from "@/components/profile/header";
import Grid from "@/components/profile/grid";
import FootButtons from "@/components/profile/footer-buttons";
import FootFriends from "@/components/profile/footer-friends";

export default function Profile() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top + 17 * 2 }}>
      <StatusBar style="light" />
    </View>
  );
}

interface ProfileLayoutProps {
  ownUser?: boolean;
  user:
    | {
        _id: Id<"user">;
        _creationTime: number;
        user_id: string;
        username: string;
        ranking: number;
        gamesPlayed: number;
        points: number;
        completionRate: number;
        correctAnswers: number;
        wrongAnswers: number;
      }
    | undefined;
}

export function ProfileLayout({ user, ownUser }: ProfileLayoutProps) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageViewer size={90} />
      </View>
      <Header title="Jessica Richman" subtitle="@Rookie123" />
      <Grid
        rank={user?.ranking || 0}
        gamesPlayed={user?.gamesPlayed || 0}
        points={user?.points || 0}
        completionRate={user?.completionRate || 0}
        correctAnswers={user?.correctAnswers || 0}
        wrongAnswers={user?.wrongAnswers || 0}
      />
      {ownUser ? <FootFriends /> : <FootButtons onPressFollow={() => {}} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 17 * 4,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingHorizontal: 17,
    paddingTop: 17 * 3,
    paddingBottom: 17 * 2,
    justifyContent: "space-between",
  },
  image: {
    position: "absolute",
    alignSelf: "center",
    top: -45,
  },
});
