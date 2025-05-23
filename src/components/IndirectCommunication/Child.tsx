import { useState } from "react";
import { Button } from "react-native";

export default function IndirectCommunicationChild(props: any) {

  function genNum(min: number, max: number): number {
    const fator = max - min + 1;
    return Math.floor(Math.random() * fator) + props.min;
  }

  const [str, setStr] = useState("Número gerado");

  function genText(str: string): string {
    setStr(str + ":");
    return str;    
  }

  return (
    <Button
      title="Executar"
      onPress={function () {
        const n: number = genNum(props.min, props.max);
        props.onPress(n, genText(str));
      }}
    ></Button>
  )

}