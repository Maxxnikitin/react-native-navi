import { FC } from "react";
import { StyleSheet } from "react-native";
import { View } from "../../components/Themed";
import {
  enterText,
  regIndividualsText,
  regLegalEntitiesText,
} from "../../res/values-ru/strings";
import Logo from "../../assets/icons/Logo";
import { Button } from "../../components/ui/button";
import { RootStackScreenProps } from "../../types";
import { EnterLayout } from "../../components/enter-layout";
import { makerNavigationCallback } from "../../utils/utils";

export const EnterScreen: FC<RootStackScreenProps<"Enter">> = ({
  navigation,
}) => {
  return (
    <EnterLayout>
      <Logo style={styles.logo} />
      <View style={styles.btnsBox}>
        <Button
          style={styles.btnMarginBottom}
          text={enterText}
          isRightIcon
          isDarkMode
          onPress={makerNavigationCallback(navigation, "Login")}
        />
        <Button
          style={styles.btnMarginBottom}
          text={regIndividualsText}
          kind="link"
        />
        <Button text={regLegalEntitiesText} kind="link" />
      </View>
    </EnterLayout>
  );
};

const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 90,
  },
  btnsBox: {},
  btnMarginBottom: {
    marginBottom: 20,
  },
});
