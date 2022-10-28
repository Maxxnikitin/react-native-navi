import { FC } from "react";
import { StyleSheet } from "react-native";
import { EnterLayout } from "../../components/enter-layout";
import { PrimaryText } from "../../components/StyledText";
import { View } from "../../components/Themed";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/Input";
import Colors from "../../constants/Colors";
import {
  loginLabelText,
  passwordRecoveryText,
  passwordRecoveryTitle,
  sendNewPasswordText,
} from "../../res/values-ru/strings";
import { RootStackScreenProps } from "../../types";
import { makerNavigationCallback } from "../../utils/utils";

export const RecoveryPasswordScreen: FC<
  RootStackScreenProps<"RecoveryPassword">
> = ({ navigation }) => {
  return (
    <EnterLayout>
      <View style={styles.content}>
        <PrimaryText style={styles.title} isBold>
          {passwordRecoveryTitle}
        </PrimaryText>
        <PrimaryText style={styles.text}>{passwordRecoveryText}</PrimaryText>
        <Input style={styles.input} labelText={loginLabelText} isLogin />
        <Button
          style={styles.btn}
          text={sendNewPasswordText}
          isDarkMode
          isRightIcon
          onPress={makerNavigationCallback(
            navigation,
            "RecoveryRejectPassword"
          )}
        />
      </View>
    </EnterLayout>
  );
};

const styles = StyleSheet.create({
  content: {},
  title: {
    color: Colors.light.text,
    marginBottom: 30,
  },
  text: {
    marginBottom: 30,
    color: Colors.light.labelText,
  },
  btn: {
    marginTop: 8,
  },
  input: {
    marginBottom: 15,
  },
});
