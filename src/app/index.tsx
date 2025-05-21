import { ButtonComponent } from "@/components/FirstComponent";

import React from "react";
import { ScrollView, Text } from "react-native";

export default function Index() {
  return (
    <ScrollView>
      <Text>Hello</Text>
      <ButtonComponent title="Teste" onPress={() => console.warn("44")} />
      <ButtonComponent title="Botão2" onPress={() => console.warn("3")} />

    </ScrollView >
  )
}
