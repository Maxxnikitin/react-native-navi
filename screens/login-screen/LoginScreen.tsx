import { FC } from "react";
import { StyleSheet } from "react-native";
import { EnterLayout } from "../../components/enter-layout";
import { PrimaryText } from "../../components/StyledText";
import { Text, View } from "../../components/Themed";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/Input";
import Colors from "../../constants/Colors";
import {
  furtherText,
  isForgotText,
  loginLabelText,
  loginTitle,
  passwordLabelText,
} from "../../res/values-ru/strings";
import { RootStackScreenProps } from "../../types";

export const LoginScreen: FC<RootStackScreenProps<"Login">> = ({
  navigation,
}) => {
  return (
    <EnterLayout>
      <View style={styles.content}>
        <PrimaryText style={styles.title}>{loginTitle}</PrimaryText>
        <Input labelText={loginLabelText} isLogin />
        <Input labelText={passwordLabelText} secureTextEntry={true} />
        <Button text={furtherText} isDarkMode isRightIcon />
        <Button style={styles.buttonMargin} text={isForgotText} kind="link" />
      </View>
    </EnterLayout>
  );
};

const styles = StyleSheet.create({
  content: {
    // marginTop: -100,
  },
  title: {
    color: Colors.light.text,
    marginBottom: 30,
  },
  buttonMargin: {
    marginTop: 30,
  },
});
