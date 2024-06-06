import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

import Colors from "@/constants/Colors";
import ImageViewer from "@/components/imageViewer";

interface FootFriendsProps {
  friends: string[];
}

export default function FootFriends({ friends }: FootFriendsProps) {
  const router = useRouter();
  const friendsFormatted = friends ? friends : [];
  return (
    <View style={{ gap: 5 }}>
      <Text style={styles.friends}>Friends ({friendsFormatted.length})</Text>
      <View style={styles.container}>
        <FlatList
          data={friendsFormatted}
          keyExtractor={(item) => item}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                marginRight: -15,
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 50,
              }}
            >
              <ImageViewer size={50} />
            </View>
          )}
        />
        <Pressable
          style={styles.button}
          onPress={() => router.push("/(app)/(profile)/finder")}
        >
          <Text style={styles.buttonText}>Find friends</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  friends: {
    fontFamily: "NiveauGroteskBold",
    fontSize: 20,
    color: Colors.primary,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#839788",
    borderRadius: 12,
  },
  buttonText: {
    fontFamily: "NiveauGroteskBold",
    fontSize: 16,
    color: "white",
  },
});
