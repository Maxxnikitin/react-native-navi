import { FC } from "react";
import { Image, Linking, Platform, StyleSheet } from "react-native";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import {
  DifficultiesLoggingPhone,
  DifficultiesLoggingText,
  EmergencyCallText,
} from "../StyledText";
import { View } from "../Themed";
import {
  difficultiesLoggingText,
  emergencyCallText,
  enterText,
  phoneNumber,
  regIndividuals,
  regLegalEntities,
} from "../../res/values-ru/strings";
import Logo from "../../assets/icons/Logo";
import { Button } from "../ui/button";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export const EnterPage: FC = () => {
  const handlePhonePress = () => {
    const phoneNum = "*5104";
    Linking.openURL(
      Platform.OS === "android" ? `tel:${phoneNum}` : `telprompt:${phoneNum}`
    );
  };

  return (
    <View style={styles.content}>
      <View style={styles.iconBox}>
        <PhoneIcon />
        <EmergencyCallText style={styles.iconText}>
          {emergencyCallText}
        </EmergencyCallText>
      </View>
      <Logo style={styles.logo} />
      <View style={styles.btnsBox}>
        <Button
          style={styles.btnMarginBottom}
          text={enterText}
          isRightIcon
          isDarkMode
        />
        <Button
          style={styles.btnMarginBottom}
          text={regIndividuals}
          kind="link"
        />
        <Button text={regLegalEntities} kind="link" />
      </View>
      <View style={styles.difficultiesLoggingBox}>
        <DifficultiesLoggingText style={styles.difficultiesLoggingText}>
          {difficultiesLoggingText}
        </DifficultiesLoggingText>
        <View style={styles.phoneBox}>
          <AntDesign
            style={styles.phoneIcon}
            name="phone"
            size={21}
            color={Colors.light.text}
          />
          <DifficultiesLoggingPhone onPress={handlePhonePress}>
            {phoneNumber}
          </DifficultiesLoggingPhone>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 30,
  },
  iconBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    marginLeft: 10,
  },
  logo: {
    alignSelf: "center",
  },
  btnsBox: {},
  btnMarginBottom: {
    marginBottom: 20,
  },
  difficultiesLoggingBox: {
    alignItems: "center",
  },
  difficultiesLoggingText: {
    textAlign: "center",
    paddingHorizontal: 26,
  },
  phoneBox: {
    flexDirection: "row",
    marginTop: 15,
  },
  phoneIcon: {
    marginRight: 5,
  },
});
