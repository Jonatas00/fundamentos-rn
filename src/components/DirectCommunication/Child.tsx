import { Text } from "react-native";

export function DirectComponentChild(props: { text: string }) {
  return <>
    <Text>{props.text}</Text>
  </>



}