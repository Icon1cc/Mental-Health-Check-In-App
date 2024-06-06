import { View, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";

import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import ImageViewer from "@/components/imageViewer";
import Header from "@/components/profile/header";
import Grid from "@/components/profile/grid";
import FootButtons from "@/components/profile/footer-buttons";
import FootFriends from "@/components/profile/footer-friends";

export default function Profile() {
  // Convex API.
  const convex = useConvex();

  // Local search params.
  const { _id } = useLocalSearchParams();

  // Safe area insets.
  const insets = useSafeAreaInsets();

  // User state.
  const [user, setUser] = useState<{
    _id: Id<"user">;
    _creationTime: number;
    user_id: string;
    username: string;
    name: string;
    ranking: number;
    gamesPlayed: number;
    points: number;
    completionRate: number;
    correctAnswers: number;
    wrongAnswers: number;
    friends?: Id<"user">[];
  } | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = await convex.query(api.user.get, {
        _id: _id as Id<"user">,
      });
      if (user) {
        setUser(user);
      }
    };
    if (_id) loadUser();
  }, [_id]);
  return (
    <View style={{ flex: 1, paddingTop: insets.top + 17 * 2 }}>
      <StatusBar style="light" />
      <ProfileLayout user={user} />
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
        name: string;
        ranking: number;
        gamesPlayed: number;
        points: number;
        completionRate: number;
        correctAnswers: number;
        wrongAnswers: number;
        friends?: Id<"user">[];
      }
    | undefined
    | null;
}

export function ProfileLayout({ user, ownUser }: ProfileLayoutProps) {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <ImageViewer size={90} />
      </View>
      <Header
        title={user?.name as string}
        subtitle={user?.username as string}
      />
      <Grid
        rank={user?.ranking as number}
        gamesPlayed={user?.gamesPlayed as number}
        points={user?.points as number}
        completionRate={user?.completionRate as number}
        correctAnswers={user?.correctAnswers as number}
        wrongAnswers={user?.wrongAnswers as number}
      />
      {ownUser ? (
        <FootFriends friends={user?.friends as string[]} />
      ) : (
        <FootButtons onPressFollow={() => {}} friend />
      )}
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
