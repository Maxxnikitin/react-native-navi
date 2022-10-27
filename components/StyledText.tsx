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
  const colorScheme = useColorScheme();

  return (
    <Text
      {...props}
      lightColor={Colors[colorScheme].btnText}
      darkColor={Colors[colorScheme].btnText}
      style={[
        props.style,
        {
          fontFamily: "roboto-bold",
          fontWeight: "bold",
          fontSize: 18,
          lineHeight: 21,
        },
      ]}
    />
  );
}
