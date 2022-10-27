import { AntDesign } from "@expo/vector-icons";
import { FC, useState } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";
import Colors from "../../../constants/Colors";
import { btnBorderRadius } from "../../../constants/Dimens";
import useColorScheme from "../../../hooks/useColorScheme";
import { ButtonText } from "../../StyledText";
import { View } from "../../Themed";

interface IButton extends TouchableHighlightProps {
  text: string;
  kind?: "primary" | "secondary" | "link";
}

export const Button: FC<IButton> = ({
  text,
  kind = "primary",
  disabled = false,
  ...props
}) => {
  const colorScheme = useColorScheme();
  const [isPressed, setIsPressed] = useState(false);

  const btns = StyleSheet.create({
    primary: {
      backgroundColor: Colors[colorScheme].btnColor,
      color: Colors[colorScheme].btnText,
    },
    primaryActive: {
      backgroundColor: Colors[colorScheme].btnHoverColor,
    },
    primaryActiveText: {
      color: Colors[colorScheme].btnHoverText,
    },
    primaryDisabled: {
      backgroundColor: Colors[colorScheme].btnDisabledColor,
      borderWidth: 1,
      borderColor: Colors[colorScheme].btnDisabledTextColor,
    },
    primaryDisabledTextColor: {
      color: Colors[colorScheme].btnDisabledTextColor,
    },
  });

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);

  return (
    <TouchableHighlight
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      style={styles.button}
      disabled={disabled}
      {...props}
    >
      <View
        style={[
          styles.buttonTextBox,
          kind === "primary" && btns.primary,
          isPressed && btns.primaryActive,
          disabled && btns.primaryDisabled,
        ]}
      >
        <ButtonText
          style={[
            styles.text,
            isPressed && btns.primaryActiveText,
            disabled && btns.primaryDisabledTextColor,
          ]}
        >
          {text}
        </ButtonText>
        <AntDesign
          style={styles.icon}
          color={
            disabled
              ? Colors[colorScheme].btnDisabledTextColor
              : isPressed
              ? Colors[colorScheme].btnHoverText
              : kind === "primary"
              ? Colors[colorScheme].btnText
              : ""
          }
          name="right"
          size={21}
        />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 90,
    borderRadius: btnBorderRadius,
  },
  primary: {},
  buttonTextBox: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: btnBorderRadius,
  },
  text: {
    alignSelf: "center",
  },
  icon: {
    marginLeft: 10,
  },
});
