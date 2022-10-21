import { yellowColor } from "../constants/Colors";
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
