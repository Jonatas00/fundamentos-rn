import { Button, ButtonProps } from "react-native";

export function ButtonComponent({ ...rest }: ButtonProps) {
  return <>
    <Button {...rest}>
    </Button>
  </>
}