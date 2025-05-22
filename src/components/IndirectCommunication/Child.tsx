import { Button } from "react-native";

export default function IndirectCommunicationChild(props: any) {

  function genNum(min: number, max: number): number {
    const fator = max - min + 1;
    return Math.floor(Math.random() * fator) + props.min;
  }
  return (
    <Button
      title="Executar"
      onPress={function () {
        const n = genNum(props.min, props.max);
        props.onPress(n, "Número gerado");
      }}
    ></Button>
  )

}