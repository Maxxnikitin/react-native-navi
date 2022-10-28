import { AntDesign } from "@expo/vector-icons";
import { FC, useState } from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native";
import Colors from "../../../constants/Colors";
import { LabelText } from "../../StyledText";
import { View } from "../../Themed";
import { IInput } from "./types";

export const Input: FC<IInput> = ({
  labelText,
  keyboardType,
  style,
  boxStyle,
  errorText = "",
  isLogin = false,
  autoCapitalize = "none",
  clearButtonMode = "always",
  onChangeText,
  ...props
}) => {
  const [inputType, setInputType] = useState<KeyboardTypeOptions>(
    keyboardType || "email-address"
  );

  const handleChangeInput = (text: string) => {
    if (text.startsWith("+") || text.startsWith("7") || text.startsWith("8")) {
      setInputType("phone-pad");
    } else {
      setInputType("email-address");
    }
    onChangeText && onChangeText(text);
  };

  return (
    <View style={[styles.content, boxStyle]}>
      <LabelText style={styles.label}>{labelText}</LabelText>
      <TextInput
        style={[styles.input, style]}
        onChangeText={handleChangeInput}
        keyboardType={inputType}
        autoCapitalize={autoCapitalize}
        clearButtonMode={clearButtonMode}
        {...props}
      />
      {errorText && (
        <View>
          <AntDesign
            color={Colors.light.yellowColor}
            name="pluscircleo"
            size={21}
          />
          <LabelText style={styles.error}>{errorText}</LabelText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginBottom: 24,
  },
  label: {
    color: Colors.light.labelText,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.labelText,
    paddingVertical: 8,
    paddingHorizontal: 0,
    fontFamily: "roboto-medium",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 21,
    color: "white",
  },
  error: {
    color: Colors.light.yellowColor,
    marginTop: 8,
  },
});
