import { FC } from "react";
import { Image, StyleSheet } from "react-native";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import { EmergencyCallText } from "../StyledText";
import { Text, View } from "../Themed";
import { emergencyCallText, enterText } from "../../res/values-ru/strings";
import Logo from "../../assets/icons/Logo";
import { Button } from "../ui/button";

export const EnterPage: FC = () => {
  return (
    <View style={styles.content}>
      <View style={styles.iconBox}>
        <PhoneIcon />
        <EmergencyCallText style={styles.iconText}>
          {emergencyCallText}
        </EmergencyCallText>
      </View>
      <Logo style={styles.logo} />
      <Button text={enterText} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 30,
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 90,
  },
  iconText: {
    marginLeft: 10,
  },
  logo: {
    alignSelf: "center",
  },
});
