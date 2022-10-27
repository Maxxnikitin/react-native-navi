import Colors, { yellowColor } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function EmergencyCallText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        props.style,
        {
          fontFamily: "roboto-bold",
          fontWeight: "bold",
          fontSize: 18,
          lineHeight: 21,
          color: yellowColor,
          maxWidth: 110,
        },
      ]}
    />
  );
}

export function ButtonText(props: TextProps) {
  return (
    <Text
      {...props}
      lightColor={Colors.light.btnText}
      style={[
        {
          fontFamily: "roboto-bold",
          fontWeight: "bold",
          fontSize: 18,
          lineHeight: 21,
        },
        props.style,
      ]}
    />
  );
}

export function DifficultiesLoggingText(props: TextProps) {
  return (
    <Text
      {...props}
      lightColor={Colors.light.btnText}
      style={[
        {
          fontFamily: "roboto-regular",
          fontWeight: "400",
          fontSize: 18,
          lineHeight: 21,
          color: Colors.light.textDifficultiesLogging,
        },
        props.style,
      ]}
    />
  );
}

export function DifficultiesLoggingPhone(props: TextProps) {
  return (
    <Text
      {...props}
      lightColor={Colors.light.btnText}
      style={[
        {
          fontFamily: "roboto-bold",
          fontWeight: "bold",
          fontSize: 18,
          lineHeight: 21,
          color: Colors.light.text,
        },
        props.style,
      ]}
    />
  );
}
