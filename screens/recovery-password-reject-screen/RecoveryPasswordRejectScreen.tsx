import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet } from "react-native";
import { EnterLayout } from "../../components/enter-layout";
import { PrimaryText, Title } from "../../components/StyledText";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/Input";
import Colors from "../../constants/Colors";
import {
  enterText,
  loginLabelText,
  rejectNewPasswordText,
  rejectNewPasswordTitle,
  sendNewPasswordText,
} from "../../res/values-ru/strings";
import { RootStackScreenProps } from "../../types";
import { makerNavigationCallback } from "../../utils/utils";

export const RecoveryPasswordRejectScreen: FC<
  RootStackScreenProps<"RecoveryRejectPassword">
> = ({ navigation }) => {
  return (
    <EnterLayout withHeader={false}>
      <AntDesign
        style={styles.icon}
        name="closecircleo"
        size={64}
        color={Colors.light.yellowColor}
      />
      <Title style={styles.title}>{rejectNewPasswordTitle}</Title>
      <PrimaryText style={styles.text}>{rejectNewPasswordText}</PrimaryText>
      <Input style={styles.input} labelText={loginLabelText} isLogin />
      <Button
        text={sendNewPasswordText}
        isDarkMode
        isRightIcon
        onPress={makerNavigationCallback(navigation, "RecoverySuccessPassword")}
      />
    </EnterLayout>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 44,
  },
  title: {
    marginVertical: 30,
    color: Colors.light.yellowColor,
  },
  text: {
    marginBottom: 30,
    color: Colors.light.labelText,
  },
  input: {
    marginBottom: 15,
  },
});
