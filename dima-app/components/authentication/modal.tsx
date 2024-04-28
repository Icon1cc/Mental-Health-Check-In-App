import { View, Text, Modal, StyleSheet, ScrollView } from "react-native";

import SignIn from "./sign-in";
import SignUp from "./sign-up";

import React from "react";

interface ModalProps {
  // Define props here
  visible: boolean;
}

const ModalPage = ({ visible }: ModalProps) => {
  return (
    <Modal visible={visible} animationType="fade">
      <ScrollView
        style={styles.container}
        horizontal={true}
        contentInsetAdjustmentBehavior="automatic"
      >
        <SignIn />
        <SignUp />
      </ScrollView>
    </Modal>
  );
};

export default ModalPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});
