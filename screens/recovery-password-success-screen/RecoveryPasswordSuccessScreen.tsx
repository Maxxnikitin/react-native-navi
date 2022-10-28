import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet } from "react-native";
import { EnterLayout } from "../../components/enter-layout";
import { PrimaryText, Title } from "../../components/StyledText";
import { Button } from "../../components/ui/button";
import Colors from "../../constants/Colors";
import {
  enterText,
  successNewPasswordText,
  successNewPasswordTitle,
} from "../../res/values-ru/strings";
import { RootStackScreenProps } from "../../types";
import { makerNavigationCallback } from "../../utils/utils";

export const RecoveryPasswordSuccessScreen: FC<
  RootStackScreenProps<"RecoverySuccessPassword">
> = ({ navigation }) => {
  return (
    <EnterLayout withHeader={false}>
      <AntDesign
        style={styles.icon}
        name="checkcircleo"
        size={64}
        color={Colors.light.text}
      />
      <Title style={styles.title}>{successNewPasswordTitle}</Title>
      <PrimaryText style={styles.text}>{successNewPasswordText}</PrimaryText>
      <Button
        text={enterText}
        isDarkMode
        isRightIcon
        onPress={makerNavigationCallback(navigation, "Login")}
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
  },
  text: {
    marginBottom: 30,
  },
});
