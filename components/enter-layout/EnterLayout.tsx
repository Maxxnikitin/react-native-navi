import { AntDesign } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import Colors from "../../constants/Colors";
import {
  difficultiesLoggingText,
  emergencyCallText,
  phoneNumber,
} from "../../res/values-ru/strings";
import { makerPhonePressCallback } from "../../utils/utils";
import {
  DifficultiesLoggingPhone,
  DifficultiesLoggingText,
  EmergencyCallText,
} from "../StyledText";
import { View } from "../Themed";
import { IEnterLayout } from "./types";

export const EnterLayout: FC<IEnterLayout> = ({
  withHeader = true,
  children,
  style,
}) => {
  return (
    <View style={[styles.content, style]}>
      {withHeader && (
        <TouchableOpacity
          style={styles.iconBox}
          onPress={makerPhonePressCallback("911")}
        >
          <PhoneIcon />
          <EmergencyCallText style={styles.iconText}>
            {emergencyCallText}
          </EmergencyCallText>
        </TouchableOpacity>
      )}
      {children}
      <View style={styles.difficultiesLoggingBox}>
        <DifficultiesLoggingText style={styles.difficultiesLoggingText}>
          {difficultiesLoggingText}
        </DifficultiesLoggingText>
        <TouchableOpacity
          style={styles.phoneBox}
          onPress={makerPhonePressCallback("*5104")}
        >
          <AntDesign
            style={styles.phoneIcon}
            name="phone"
            size={21}
            color={Colors.light.text}
          />
          <DifficultiesLoggingPhone>{phoneNumber}</DifficultiesLoggingPhone>
        </TouchableOpacity>
      </View>
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
    alignSelf: "flex-start",
    marginBottom: 60,
  },
  iconText: {
    marginLeft: 10,
  },
  difficultiesLoggingBox: {
    alignItems: "center",
    marginTop: "auto",
  },
  difficultiesLoggingText: {
    textAlign: "center",
    paddingHorizontal: 26,
  },
  phoneBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  phoneIcon: {
    marginRight: 5,
  },
});
