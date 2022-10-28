import { StyleProp, TextInputProps, TextStyle } from "react-native";

export interface IInput extends TextInputProps {
  labelText: string;
  errorText?: string;
  boxStyle?: StyleProp<TextStyle>;
  isLogin?: boolean;
}
