import { Button } from "react-native";

export function ButtonComponent() {
  return <>
    <Button title="Botão!!!!" onPress={() => console.warn("Botão Clicado!")}>
    </Button>
  </>
}