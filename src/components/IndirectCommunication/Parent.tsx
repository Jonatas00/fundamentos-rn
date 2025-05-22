import IndirectCommunicationChild from "./Child";

import { useState } from "react";
import { Text } from "react-native";

export default function IndirectComponent() {

  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);

  function showValue(number: number, text: string): void {
    setText(text);
    setNumber(number);
  }

  return (
    <>
      <Text>{text}: {number}</Text>
      <IndirectCommunicationChild
        min={1}
        max={100}
        onPress={showValue} />
    </>
  )
}
