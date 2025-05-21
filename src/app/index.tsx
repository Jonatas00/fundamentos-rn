import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [number, setNumber] = useState(0);

  function genRandomNumber(): void {
    let number: number = Math.floor(Math.random() * 50)

    setNumber(number)
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>Gerar número aleatório</Text>

      <Text>Número aleatório gerado: {number}</Text>

      <TouchableOpacity style={style.input} onPress={genRandomNumber}>
        <Text>Gerar número</Text>
      </TouchableOpacity>
    </View>
  )
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    gap: 10
  },
  title: {
    fontSize: 32,
  },
  input: {
    backgroundColor: "#99e36b",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 64,
    borderRadius: 10,
  }
});