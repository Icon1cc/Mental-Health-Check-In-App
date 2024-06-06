import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

import Colors from "@/constants/Colors";
import ImageViewer from "@/components/imageViewer";

const DATA = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
];

interface FootFriendsProps {}

export default function FootFriends(props: FootFriendsProps) {
  // router.
  const router = useRouter();
  return (
    <View style={{ gap: 5 }}>
      <Text style={styles.friends}>Friends ({6})</Text>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                marginRight: -15,
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
    width: 120,
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
