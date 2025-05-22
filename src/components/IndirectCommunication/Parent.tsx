import IndirectCommunicationChild from "./Child";

import { useState } from "react";
import { Text } from "react-native";

export default function IndirectComponent() {

  const [number, setNumber] = useState(0);

  function showValue(number: number) {
    setNumber(number);
  }

  return (
    <>
      <Text>{number}</Text>
      <IndirectCommunicationChild
        min={1}
        max={100}
        onPress={showValue} />
    </>
  )
}
