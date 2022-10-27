import { AntDesign } from "@expo/vector-icons";
import { FC, useState } from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";
import Colors from "../../../constants/Colors";
import { btnBorderRadius } from "../../../constants/Dimens";
import { ButtonText } from "../../StyledText";
import { View } from "../../Themed";

interface IButton extends TouchableHighlightProps {
  text: string;
  kind?: "primary" | "secondary" | "link";
  isDarkMode?: boolean;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
}

export const Button: FC<IButton> = ({
  text,
  kind = "primary",
  isDarkMode = false,
  disabled = false,
  isLeftIcon = false,
  isRightIcon = false,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const isWhiteBtn = kind === "primary" && isDarkMode;
  const iconsColor = disabled
    ? Colors.light.btnDisabledTextColor
    : isPressed
    ? isWhiteBtn
      ? styles.primaryActiveTextDark.color
      : styles[`${kind}ActiveText`].color
    : kind === "primary"
    ? isWhiteBtn
      ? styles.primaryTextDark.color
      : Colors.light.btnText
    : kind === "secondary"
    ? Colors.light.secondaryBtnBorderColor
    : "";

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
          styles[kind],
          isWhiteBtn && styles.primaryDark,
          isPressed && !isWhiteBtn && styles[`${kind}Active`],
          disabled && styles.disabled,
        ]}
      >
        {isLeftIcon && (
          <AntDesign
            style={styles.leftIcon}
            color={iconsColor}
            name="pluscircleo"
            size={21}
          />
        )}
        <ButtonText
          style={[
            styles.text,
            styles[`${kind}Text`],
            isWhiteBtn && styles.primaryTextDark,
            isPressed &&
              (isWhiteBtn
                ? styles.primaryActiveTextDark
                : styles[`${kind}ActiveText`]),
            disabled && styles.disabledTextColor,
          ]}
        >
          {text}
        </ButtonText>
        {isRightIcon && (
          <AntDesign
            style={styles.rightIcon}
            color={iconsColor}
            name="right"
            size={21}
          />
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 90,
    borderRadius: btnBorderRadius,
  },
  primary: {
    backgroundColor: Colors.light.btnColor,
  },
  primaryDark: {
    backgroundColor: Colors.light.text,
  },
  primaryText: {
    color: Colors.light.text,
  },
  primaryTextDark: {
    color: Colors.light.btnColor,
  },
  primaryActive: {
    backgroundColor: Colors.light.btnHoverColor,
  },
  primaryActiveText: {
    color: Colors.light.btnHoverText,
  },
  primaryActiveDark: {},
  primaryActiveTextDark: {
    color: Colors.light.btnHoverColor,
  },
  secondary: {
    borderWidth: 1,
    borderColor: Colors.light.secondaryBtnBorderColor,
  },
  secondaryText: {
    color: Colors.light.secondaryBtnBorderColor,
  },
  secondaryActive: {
    borderColor: Colors.light.btnHoverColor,
  },
  secondaryActiveText: {
    color: Colors.light.btnHoverColor,
  },
  link: {},
  linkText: {
    color: Colors.light.text,
  },
  linkActive: {},
  linkActiveText: {
    color: Colors.light.btnHoverText,
  },
  disabled: {
    backgroundColor: Colors.light.btnDisabledColor,
    borderWidth: 1,
    borderColor: Colors.light.btnDisabledTextColor,
  },
  disabledTextColor: {
    color: Colors.light.btnDisabledTextColor,
  },

  buttonTextBox: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: btnBorderRadius,
  },
  text: {
    alignSelf: "center",
  },
  rightIcon: {
    marginLeft: 10,
  },
  leftIcon: {
    marginRight: 10,
  },
});
