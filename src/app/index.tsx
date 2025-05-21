import { ButtonComponent } from "@/components/FirstComponent";

import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const elements: any = [];
for (let i = 0; i <= 50; i++) {
  elements.push(<Text key={i}>Item {i}</Text>);
}

export default function Index() {
  return (
    <ScrollView style={styles.err}>
      <Text>Hello</Text>
      <ButtonComponent />

      {elements}
      r
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  err: {
    backgroundColor: "whitesmoke"
  }
})