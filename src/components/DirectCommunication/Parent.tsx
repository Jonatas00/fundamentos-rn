import { useState } from "react";
import { Button, View } from "react-native";
import { DirectComponentChild } from "./Child";


export function DirectComponent() {
  const [text, setText] = useState("Conexão Direta desativada")

  function changeText() {
    if (text === "Conexão Direta ativada") {
      setText("Conexão Direta desativada");
      return;
    }
    setText("Conexão Direta ativada");
  }

  return <View>
    <DirectComponentChild text={text} />
    <Button onPress={changeText} title="Botão Comunicação Direta"></Button>
  </View>



}